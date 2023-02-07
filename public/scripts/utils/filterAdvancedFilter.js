const searchInputIngredient = document.querySelector(".button__hidden--ingredient");
const searchInputAppareil = document.querySelector(".button__hidden--appareil");
const searchInputUstensil = document.querySelector(".button__hidden--ustensil");

let searchValueIngredient = "";
let searchValueAppareil = "";
let searchValueUstensil = "";

searchInputIngredient.addEventListener("input", function () {
   searchValueIngredient = this.value;
   /*filterRecipesAdvanced();*/
   filterRecipesAdvanced();
});

searchInputAppareil.addEventListener("input", function () {
   searchValueAppareil = this.value;
   filterRecipesAdvanced();
   /*const searchValueAppareil = this.value;*/
});

searchInputUstensil.addEventListener("input", function () {
   searchValueUstensil = this.value;
   filterRecipesAdvanced();
   /*const searchValueUstensil = this.value;*/
});


function filterRecipesAdvanced() {
   const ingredientToFind = searchValueIngredient.toLowerCase();
   const appareilToFind = searchValueAppareil.toLowerCase();
   const ustensilToFind = searchValueUstensil.toLowerCase();

   console.log(arrayFilterRecipes);

   const arrayAdvancedFilterRecipes = arrayFilterRecipes.filter((recipe) => {
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

   // const arrayConcatIngredientAppareil = arrayFilterAdvancedRecipesIngredients.concat(arrayFilterAdvancedRecipesAppareils);
   // arrayFilterRecipes = arrayConcatIngredientAppareil.concat(arrayFilterAdvancedRecipesUstensil);

   //   // Je supprime les doublons
   //    Array.from(new Set(arrayFilterRecipes));

   //    console.log(arrayFilterAdvancedRecipes.length);
   //    console.log(arrayFilterAdvancedRecipes);

   console.log(arrayAdvancedFilterRecipes);

   // J'appelle les fonctions de création des recettes, des boutons ingrédients, appareils et ustensiles
   displayDataAdvancedFilter(arrayAdvancedFilterRecipes);

   displayListIngredientAdvancedFilter(arrayAdvancedFilterRecipes, searchValueIngredient);

   displayListApplianceAdvancedFilter(arrayAdvancedFilterRecipes, searchValueAppareil);

   displayListUstensilAdvancedFilter(arrayAdvancedFilterRecipes, searchValueUstensil);


      const wrappersHiddens = document.querySelectorAll(".wrapper__hidden");

      if (arrayFilterRecipes.length === 0) {
         // J'affiche le message d'erreur
         wrappersHiddens.setAttribute("data-error", "Aucun ingrédient ne correspond à votre critère");
         wrappersHiddens.setAttribute("data-error-visible", "true");
         console.log("Aucun ingrédient ne correspond à votre critère");
      } else {
         //Je n'affiche pas le message d'erreur
         wrappersHiddens.setAttribute("data-error", "");
         wrappersHiddens.setAttribute("data-error-visible", "");
      }
}
