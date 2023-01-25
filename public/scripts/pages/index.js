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
   arrayFilterRecipes.forEach((filterRecipe) => {
      const recipeModel = recetteCardFactory(filterRecipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création du bouton ingrédient
async function displayButtonIngredient(recipes) {
   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayIngredients = recipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayIngredientsLowerCase = arrayIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueIngredients = Array.from(new Set(arrayIngredientsLowerCase)); // Je supprime les doublons
   const uniqueIngredientsSort = uniqueIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ingrédient
   uniqueIngredientsSort.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}

// Fonction de filtre de la recherche avancée par ingrédients
async function displayButtonIngredient(arrayFilterRecipes) {
   // Je réinitialise le container des ingrédients
   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   wrapperListIngredient.innerHTML = "";

   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayFilterIngredients = arrayFilterRecipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayFilterIngredientsLowerCase = arrayFilterIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueFilterIngredients = Array.from(new Set(arrayFilterIngredientsLowerCase)); // Je supprime les doublons
   const uniqueFilterIngredientsSort = uniqueFilterIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ingrédient
   uniqueFilterIngredientsSort.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}

// Fonction de création du bouton appareil
async function displayButtonAppliance(recipes) {
   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysAppliances = recipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules : Array(50) [ "Blender", "Saladier", "Cocotte", "Cuiseur de riz", "Four", "Four", "Four", "Four", "Saladier", "Four", … ]
   const uniqueAppliances = Array.from(new Set(arrayOfArraysAppliances)); // Je supprime les doublons : Array(11) [ "blender", "saladier", "cocotte", "cuiseur de riz", "four", "casserole", "poêle à crêpe", "sauteuse", "mixer", "poêle", … ]
   const uniqueAppliancesSort = uniqueAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque appareil
   uniqueAppliancesSort.forEach((appliance) => {
      const wrapperHiddenAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getAppareilWrapperDOM();
      wrapperHiddenAppareil.appendChild(appareilWrapperCardDOM);
   });
}

// Fonction de filtre de la recherche avancée par appareils
async function displayButtonAppliance(arrayFilterRecipes) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";

   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysFilterAppliances = arrayFilterRecipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules
   const uniqueFilterAppliances = Array.from(new Set(arrayOfArraysFilterAppliances)); // Je supprime les doublons
   const uniqueFilterAppliancesSort = uniqueFilterAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque appareil
   uniqueFilterAppliancesSort.forEach((appliance) => {
      const wrapperHiddenAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getAppareilWrapperDOM();
      wrapperHiddenAppareil.appendChild(appareilWrapperCardDOM);
   });
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
