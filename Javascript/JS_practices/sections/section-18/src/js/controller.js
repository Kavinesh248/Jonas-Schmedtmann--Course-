import 'core-js/stable';
import { async } from 'regenerator-runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.generateMarkupSpinner();

    // 1. Get recipe data
    await model.loadRecipe(id);

    // 2. Render recipe in the UI
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //1) Get search query
    const queryData = searchView.getQuery();
    if (!queryData) return;

    //2) Load search results
    await model.loadSearchResults(queryData);

    resultsView.generateMarkupSpinner();

    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
