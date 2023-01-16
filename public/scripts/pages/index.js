// Fonction de création des recettes
async function displayData(recipes) {
   const cardColsSection = document.querySelector(".cardsCols");

   recipes.forEach((recipe) => {
      const recipeModel = recetteCardFactory(recipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création du bouton ingrédient
async function displayButtonIngredient(recipes) {
   const wrapperHiddenIngredient = document.querySelector(".wrapper__hidden--ingredient");
   const ingredientWrapperModel = buttonIngredientFactory(recipes);
   const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
   wrapperHiddenIngredient.appendChild(ingredientWrapperCardDOM);
}
// Fonction de création du bouton appareil
async function displayButtonAppliance(recipes) {
   const wrapperHiddenAppareil = document.querySelector(".wrapper__hidden--appareil");
   const appareilWrapperModel = buttonApplianceFactory(recipes);
   const appareilWrapperCardDOM = appareilWrapperModel.getAppareilWrapperDOM();
   wrapperHiddenAppareil.appendChild(appareilWrapperCardDOM);
}
// Fonction de création du bouton ustensile
async function displayButtonUstensil(recipes) {
   const wrapperHiddenUstensil = document.querySelector(".wrapper__hidden--ustensil");
   const ustensilWrapperModel = buttonUstensilFactory(recipes);
   const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
   wrapperHiddenUstensil.appendChild(ustensilWrapperCardDOM);
}
async function init() {
   // Récupère les datas des recettes
   displayData(recipes);
   displayButtonIngredient(recipes);
   displayButtonAppliance(recipes);
   displayButtonUstensil(recipes);
}

init();
