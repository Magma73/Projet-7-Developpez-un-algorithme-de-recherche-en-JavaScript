// console.log(recipes);

async function displayData(recipes) {
    const cardColsSection = document.querySelector(".cardsCols");

    recipes.forEach((recipe) => {
       const recipeModel = recetteCardFactory(recipe);
       const recipeCardDOM = recipeModel.getRecetteCardDOM();
       cardColsSection.appendChild(recipeCardDOM);
    });
 }

 async function displayWrapperIngredient(recipes) {
    const wrapperHiddenIngredient = document.querySelector(".wrapper__hidden--ingredient");

    recipes.forEach((recipe) => {
       const ingredientWrapperModel = wrappersFactory(recipe);
       const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
       wrapperHiddenIngredient.appendChild(ingredientWrapperCardDOM);
    });
 }


 async function init() {
    // Récupère les datas des recettes
    displayData(recipes);
    displayWrapperIngredient(recipes);
 }

 init();

