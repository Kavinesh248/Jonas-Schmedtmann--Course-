import 'core-js/stable';
import { async } from 'regenerator-runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.generateMarkupSpinner();

    // 1. Update the results
    resultsView.update(model.getSearchResultsPage());

    // 2. Get recipe data
    await model.loadRecipe(id);

    // 3. Render recipe in the UI
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

    resultsView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update the servings in the state
  model.updateServings(newServings);

  // Update the servings in recipe view
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerRenderServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHanlerClick(controlPagination);
};

init();
