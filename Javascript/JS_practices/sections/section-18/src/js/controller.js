import 'core-js/stable';
import { async } from 'regenerator-runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';

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
    console.error(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
