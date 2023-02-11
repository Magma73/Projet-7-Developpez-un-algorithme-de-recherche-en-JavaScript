const searchInputIngredient = document.querySelector(".button__hidden--ingredient");
const searchInputAppareil = document.querySelector(".button__hidden--appareil");
const searchInputUstensil = document.querySelector(".button__hidden--ustensil");

let searchValueIngredient = "";
let searchValueAppareil = "";
let searchValueUstensil = "";

searchInputIngredient.addEventListener("input", function () {
   searchValueIngredient = this.value;
   filterRecipesAdvanced();
});

searchInputAppareil.addEventListener("input", function () {
   searchValueAppareil = this.value;
   filterRecipesAdvanced();
});

searchInputUstensil.addEventListener("input", function () {
   searchValueUstensil = this.value;
   filterRecipesAdvanced();
});

// J'initialise mon tableau arrayAdvancedFilterRecipes
let arrayAdvancedFilterRecipes = [];

function filterRecipesAdvanced() {
   const ingredientToFind = searchValueIngredient.toLowerCase();
   const appareilToFind = searchValueAppareil.toLowerCase();
   const ustensilToFind = searchValueUstensil.toLowerCase();

   // // J'initialise mon tableau arrayAdvancedFilterRecipes
   // let arrayAdvancedFilterRecipes = [];

   // Je réinitialise mon tableau à 0
   arrayAdvancedFilterRecipes = [];

   // Je récupère le tableau des recettes filtrées par la recherche simple : arrayFilterRecipes
   // S'il est égal à 0, je fais mon filtre avancée sur le tableau recipes
   if (arrayFilterRecipes.length === 0) {
      arrayAdvancedFilterRecipes = recipes.filter((recipe) => {
         // Je teste chaque recette

         return (
            // Je recherche le mot dans les ingrédients
            recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(ingredientToFind)) &&
            // Je recherche le mot dans les appareils
            recipe.appliance.toLowerCase().includes(appareilToFind) &&
            // Je recherche le mot dans les ustensiles
            recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(ustensilToFind))
         );
      });

      // Sinon, je fais mon filtre avancée sur le tableau arrayFilterRecipes
   } else {
      arrayAdvancedFilterRecipes = arrayFilterRecipes.filter((recipe) => {
         // Je teste chaque recette

         return (
            // Je recherche le mot dans les ingrédients
            recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(ingredientToFind)) &&
            // Je recherche le mot dans les appareils
            recipe.appliance.toLowerCase().includes(appareilToFind) &&
            // Je recherche le mot dans les ustensiles
            recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(ustensilToFind))
         );
      });
   }

   
   localStorage.setItem("arrayAdvancedFilterRecipes", JSON.stringify(arrayAdvancedFilterRecipes));

      // J'appelle les fonctions de création des recettes, des boutons ingrédients, appareils et ustensiles
   displayDataAdvancedFilter(arrayAdvancedFilterRecipes);
   displayListIngredientAdvancedFilter(arrayAdvancedFilterRecipes, searchValueIngredient);
   displayListApplianceAdvancedFilter(arrayAdvancedFilterRecipes, searchValueAppareil);
   displayListUstensilAdvancedFilter(arrayAdvancedFilterRecipes, searchValueUstensil);
   eventCreateTagIngredient();
   eventCreateTagAppliance();
   eventCreateTagUstensil();

   // J'affiche des messages d'erreur pour chaque ingrédient
   const wrapperHiddenIngredient = document.querySelector(".wrapper__hidden--ingredient");

   if (arrayAdvancedFilterRecipes.length === 0) {
      // J'affiche le message d'erreur
      wrapperHiddenIngredient.setAttribute("data-error", "Aucun ingrédient ne correspond à votre critère");
      wrapperHiddenIngredient.setAttribute("data-error-visible", "true");
   } else {
      //Je n'affiche pas le message d'erreur
      wrapperHiddenIngredient.setAttribute("data-error", "");
      wrapperHiddenIngredient.setAttribute("data-error-visible", "");
   }

   // J'affiche des messages d'erreur pour chaque appareil
   const wrappersHiddenAppliance = document.querySelector(".wrapper__hidden--appareil");

   if (arrayAdvancedFilterRecipes.length === 0) {
      // J'affiche le message d'erreur
      wrappersHiddenAppliance.setAttribute("data-error", "Aucun appareil ne correspond à votre critère");
      wrappersHiddenAppliance.setAttribute("data-error-visible", "true");
   } else {
      //Je n'affiche pas le message d'erreur
      wrappersHiddenAppliance.setAttribute("data-error", "");
      wrappersHiddenAppliance.setAttribute("data-error-visible", "");
   }

   // J'affiche des messages d'erreur pour chaque ustensile
   const wrappersHiddenUstensil = document.querySelector(".wrapper__hidden--ustensil");

   if (arrayAdvancedFilterRecipes.length === 0) {
      // J'affiche le message d'erreur
      wrappersHiddenUstensil.setAttribute("data-error", "Aucun ustensile ne correspond à votre critère");
      wrappersHiddenUstensil.setAttribute("data-error-visible", "true");
   } else {
      //Je n'affiche pas le message d'erreur
      wrappersHiddenUstensil.setAttribute("data-error", "");
      wrappersHiddenUstensil.setAttribute("data-error-visible", "");
   }
}
