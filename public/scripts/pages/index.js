// Fonction de création des recettes
async function displayData(recipes) {
   const cardColsSection = document.querySelector(".cardsCols");

   // Je trie par ordre alphabétique
   recipes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
         return -1;
      }
      if (nameA > nameB) {
         return 1;
      }
      return 0;
   });

   // Je génère chaque recette
   recipes.forEach((recipe) => {
      const recipeModel = recetteCardFactory(recipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création des recettes filtrées
async function displayData(arrayFilterRecipes) {
   const cardColsSection = document.querySelector(".cardsCols");
   // Je réinitialise le container des cartes
   cardColsSection.innerHTML = "";

   // Je trie par ordre alphabétique
   arrayFilterRecipes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
         return -1;
      }
      if (nameA > nameB) {
         return 1;
      }
      return 0;
   });

   // Je génère chaque recette
   arrayFilterRecipes.forEach((recipe) => {
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
