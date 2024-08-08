import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
    };
  } catch (err) {
    console.error(`${err} 🐦‍🔥🐦‍🔥🐦‍🔥`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const { data } = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    console.error(`${err} 🐦‍🔥🐦‍🔥🐦‍🔥`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  try {
    state.search.page = page;
    const start = (page - 1) * 10;
    const end = page * 10;
    return state.search.results.slice(start, end);
  } catch (err) {
    throw err;
  }
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // Formula = ing.quantity * newServings / oldServings.
  });
  state.recipe.servings = newServings;
};
