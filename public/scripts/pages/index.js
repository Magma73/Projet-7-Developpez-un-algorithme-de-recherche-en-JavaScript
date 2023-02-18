// Fonction de création des recettes
async function displayData(recipes) {
   const cardColsSection = document.querySelector(".cardsCols");
   // Je réinitialise le container des cartes
   cardColsSection.innerHTML = "";

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

// Fonction de création des recettes filtrées par recherche simple
async function displayDataSimpleFilter(arrayFilterRecipes) {
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
// Fonction de création des recettes filtrées pa recherche avancée
async function displayDataAdvancedFilter(arrayAdvancedFilterRecipes) {
   const cardColsSection = document.querySelector(".cardsCols");
   // Je réinitialise le container des cartes
   cardColsSection.innerHTML = "";

   // Je trie par ordre alphabétique
   arrayAdvancedFilterRecipes.sort((a, b) => {
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
   arrayAdvancedFilterRecipes.forEach((advancedFilterRecipe) => {
      const recipeModel = recetteCardFactory(advancedFilterRecipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création des recettes filtrées par tag
async function displayDataTagFilter(arrayAdvancedFilterRecipes) {
   const cardColsSection = document.querySelector(".cardsCols");
   // Je réinitialise le container des cartes
   cardColsSection.innerHTML = "";

   // Je trie par ordre alphabétique
   arrayAdvancedFilterRecipes.sort((a, b) => {
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
   arrayAdvancedFilterRecipes.forEach((advancedFilterRecipe) => {
      const recipeModel = recetteCardFactory(advancedFilterRecipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création da la liste d'ingrédient : bouton ingrédient
async function displayListIngredient(recipes) {
   // Je réinitialise le container des ingrédients
   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   wrapperListIngredient.innerHTML = "";
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

// Fonction de création da la liste d'ingrédient : recherche simple
async function displayListIngredientSimpleFilter(arrayFilterRecipes) {
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
// Fonction de création da la liste d'ingrédient : recherche avancée
async function displayListIngredientAdvancedFilter(arrayAdvancedFilterRecipes, searchValueIngredient) {
   // Je réinitialise le container des ingrédients
   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   wrapperListIngredient.innerHTML = "";
   const wordToFind = searchValueIngredient;

   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayFilterIngredients = arrayAdvancedFilterRecipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayFilterIngredientsLowerCase = arrayFilterIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueFilterIngredients = Array.from(new Set(arrayFilterIngredientsLowerCase)); // Je supprime les doublons
   const uniqueFilterIngredientsSort = uniqueFilterIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const valueFilterIngredient = uniqueFilterIngredientsSort.filter((ingredients) => ingredients.includes(wordToFind));

   // Je génère chaque ingrédient
   valueFilterIngredient.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}
// Fonction de création da la liste d'ingrédient : tags ingrédients
async function displayListIngredientTagFilter(arrayAdvancedFilterRecipes, selectedTagsIngredients) {
   // Je réinitialise le container des ingrédients
   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   wrapperListIngredient.innerHTML = "";

   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayFilterIngredients = arrayAdvancedFilterRecipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayFilterIngredientsLowerCase = arrayFilterIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueFilterIngredients = Array.from(new Set(arrayFilterIngredientsLowerCase)); // Je supprime les doublons
   const uniqueFilterIngredientsSort = uniqueFilterIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const listIngredientWithoutTagsIngredients = uniqueFilterIngredientsSort.filter((ingredient) => !selectedTagsIngredients.includes(ingredient)); // J'enlève les tags déjà cliqués

   // Je génère chaque ingrédient
   listIngredientWithoutTagsIngredients.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}

// Fonction de création de la liste d'appareils : bouton appareil
async function displayListAppliance(recipes) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";
   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysAppliances = recipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules : Array(50) [ "Blender", "Saladier", "Cocotte", "Cuiseur de riz", "Four", "Four", "Four", "Four", "Saladier", "Four", … ]
   const uniqueAppliances = Array.from(new Set(arrayOfArraysAppliances)); // Je supprime les doublons : Array(11) [ "blender", "saladier", "cocotte", "cuiseur de riz", "four", "casserole", "poêle à crêpe", "sauteuse", "mixer", "poêle", … ]
   const uniqueAppliancesSort = uniqueAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque appareil
   uniqueAppliancesSort.forEach((appliance) => {
      const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getApplianceWrapperDOM();
      wrapperListAppareil.appendChild(appareilWrapperCardDOM);
   });
}

// Fonction de création de la liste d'appareils : recherche simple
async function displayListApplianceSimpleFilter(arrayFilterRecipes) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";

   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysFilterAppliances = arrayFilterRecipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules
   const uniqueFilterAppliances = Array.from(new Set(arrayOfArraysFilterAppliances)); // Je supprime les doublons
   const uniqueFilterAppliancesSort = uniqueFilterAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque appareil
   uniqueFilterAppliancesSort.forEach((appliance) => {
      const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getApplianceWrapperDOM();
      wrapperListAppareil.appendChild(appareilWrapperCardDOM);
   });
}
// Fonction de création da la liste d'appareils : recherche avancée
async function displayListApplianceAdvancedFilter(arrayAdvancedFilterRecipes, searchValueAppareil) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";
   const wordToFind = searchValueAppareil;

   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayFilterAppliance = arrayAdvancedFilterRecipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules
   const uniqueFilterAppliances = Array.from(new Set(arrayFilterAppliance)); // Je supprime les doublons
   const uniqueFilterAppliancesSort = uniqueFilterAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const valueFilterAppliance = uniqueFilterAppliancesSort.filter((appliance) => appliance.includes(wordToFind));

   // Je génère chaque appareil
   valueFilterAppliance.forEach((appliance) => {
      const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getApplianceWrapperDOM();
      wrapperListAppareil.appendChild(appareilWrapperCardDOM);
   });
}
// Fonction de création da la liste d'appareil : tags appareils
async function displayListApplianceTagFilter(arrayAdvancedFilterRecipes, selectedTagsAppliance) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";

   // Je modifie le tableau d'objets appareils afin de supprimer les doublons
   const arrayFilterAppliance = arrayAdvancedFilterRecipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules
   const uniqueFilterAppliance = Array.from(new Set(arrayFilterAppliance)); // Je supprime les doublons
   const uniqueFilterApplianceSort = uniqueFilterAppliance.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const listAppliancetWithoutTagsAppliance = uniqueFilterApplianceSort.filter((appliance) => !selectedTagsAppliance.includes(appliance)); // J'enlève les tags déjà cliqués

   // Je génère chaque appareil
   listAppliancetWithoutTagsAppliance.forEach((appareil) => {
      const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
      const applianceWrapperModel = buttonApplianceFactory(appareil);
      const applianceWrapperCardDOM = applianceWrapperModel.getApplianceWrapperDOM();
      wrapperListAppliance.appendChild(applianceWrapperCardDOM);
   });
}

// Fonction de création da la liste des ustensiles : bouton ustensile
async function displayListUstensil(recipes) {
   // Je réinitialise le container des ustensiles
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
   wrapperListUstensil.innerHTML = "";

   // Je crée un nouveau tableau avec les ustensils : Array(122) [ "moule à gateaux", "casserole", "saladier", "couteau", "fouet", "couteau", "économe", "fouet", "saladier", "plaque de cuisson", … ]
   const arrayOfArraysUstensils = recipes.map((recipe) => recipe.ustensils.map((ustensil) => ustensil.toLowerCase())).flat();
   const uniqueUstensils = Array.from(new Set(arrayOfArraysUstensils)); // Je supprime les doublons : Array(11) [ "blender", "saladier", "cocotte", "cuiseur de riz", "four", "casserole", "poêle à crêpe", "sauteuse", "mixer", "poêle", … ]
   const uniqueUstensilsSort = uniqueUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ustensile
   uniqueUstensilsSort.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}

// Fonction de création de la liste des ustensiles : recherche simple
async function displayListUstensilSimpleFilter(arrayFilterRecipes) {
   // Je réinitialise le container des ustensiles
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
   wrapperListUstensil.innerHTML = "";

   // Je crée un nouveau tableau avec les ustensils
   const arrayOfArraysUstensils = arrayFilterRecipes.map((recipe) => recipe.ustensils.map((ustensil) => ustensil.toLowerCase())).flat();
   const uniqueUstensils = Array.from(new Set(arrayOfArraysUstensils)); // Je supprime les doublons
   const uniqueUstensilsSort = uniqueUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ustensile
   uniqueUstensilsSort.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}

// Fonction de création da la liste des ustensiles : recherche avancée
async function displayListUstensilAdvancedFilter(arrayAdvancedFilterRecipes, searchValueUstensil) {
   // Je réinitialise le container des ustensiles
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
   wrapperListUstensil.innerHTML = "";
   const wordToFind = searchValueUstensil;

   // Je crée un nouveau tableau avec les ustensils
   const arrayOfArraysUstensils = arrayAdvancedFilterRecipes.map((recipe) => recipe.ustensils.map((ustensil) => ustensil.toLowerCase())).flat();
   const uniqueUstensils = Array.from(new Set(arrayOfArraysUstensils)); // Je supprime les doublons
   const uniqueUstensilsSort = uniqueUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const valueFilterUstensil = uniqueUstensilsSort.filter((ustensil) => ustensil.includes(wordToFind));

   // Je génère chaque ustensile
   valueFilterUstensil.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}
// Fonction de création da la liste d'ustensiles : tags ustensiles
async function displayListUstensilTagFilter(arrayAdvancedFilterRecipes, selectedTagsUstensil) {
   // Je réinitialise le container des ustensiles
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
   wrapperListUstensil.innerHTML = "";

   // Je crée un nouveau tableau avec les ustensils
   const arrayOfArraysUstensils = arrayAdvancedFilterRecipes.map((recipe) => recipe.ustensils.map((ustensil) => ustensil.toLowerCase())).flat();
   const uniqueUstensils = Array.from(new Set(arrayOfArraysUstensils)); // Je supprime les doublons
   const uniqueUstensilsSort = uniqueUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const listUstensiltWithoutTagsUstensil = uniqueUstensilsSort.filter((ustensil) => !selectedTagsUstensil.includes(ustensil)); // J'enlève les tags déjà cliqués

   // Je génère chaque ustensile
   listUstensiltWithoutTagsUstensil.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}

async function init() {
   // Récupère les datas des recettes
   displayData(recipes);
   displayListIngredient(recipes);
   displayListAppliance(recipes);
   displayListUstensil(recipes);

   // J'appelle les fonctions de création des tags
   eventCreateTagIngredient();
   eventCreateTagAppliance();
   eventCreateTagUstensil();

   // Je réinitialise le local storage lorsque je rafraîchis la page
   window.addEventListener("beforeunload", function () {
      localStorage.setItem("isReloading", "true");
   });

   window.addEventListener("load", function () {
      var isReloading = localStorage.getItem("isReloading");
      if (isReloading) {
         localStorage.clear();
         localStorage.setItem("isReloading", "");
      }
   });
}

init();
