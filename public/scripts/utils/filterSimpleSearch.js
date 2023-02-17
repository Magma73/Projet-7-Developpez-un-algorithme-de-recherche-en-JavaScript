const searchForm = document.querySelector("#search-input");
const searchContainer = document.querySelector(".search-container");

searchForm.addEventListener("input", function () {
   search = this.value;
   filterSearch();
});

let arrayFilterRecipes = [];

function filterSearch() {
   // Je récupère la valeur saisie dans l'input et je le stocke
   const valueSearch = search.toLowerCase();

   // Je calcule la longueur de la valeur saisie
   let nbCaracteres = valueSearch.length;

   if (nbCaracteres >= 3) {
      filterRecipes(valueSearch);
      // Je stocke la valeur saisie dans le local storage
      localStorage.setItem("valueSearch", JSON.stringify(valueSearch));
   } else if (nbCaracteres > 0 && nbCaracteres < 3) {
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", "Veuillez entrer plus de 3 caractères.");
      searchContainer.setAttribute("data-error-visible", "true");
      // Je réinitialise la valeur dans le local storage
      localStorage.setItem("valueSearch", "");
   } else if (nbCaracteres === 0) {
      displayData(recipes);
      displayListIngredient(recipes);
      displayListAppliance(recipes);
      displayListUstensil(recipes);
      eventCreateTagIngredient();
      eventCreateTagAppliance();
      eventCreateTagUstensil();
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", "Veuillez entrer plus de 3 caractères.");
      searchContainer.setAttribute("data-error-visible", "true");
      // Je réinitialise mon tableau de recettes filtrées à 0
      arrayFilterRecipes = [];
      // Je réinitialise la valeur dans le local storage
      localStorage.setItem("valueSearch", "");
   }
}
function filterRecipes(valueSearch) {
   const wordToFind = new RegExp("\\b" + valueSearch + "\\b", "gi");

   // Je réinitialise mon tableau de recettes filtrées à 0
   arrayFilterRecipes = [];

   for (let i = 0; i < recipes.length; i++) {
      //Je recherche le mot dans le titre
      if (wordToFind.test(recipes[i].name)) {
         arrayFilterRecipes.push(recipes[i]);
         // Je recherche le mot dans la description
      } else if (wordToFind.test(recipes[i].description)) {
         arrayFilterRecipes.push(recipes[i]);
      }
   }

   // Je recherche le mot dans les ingrédients
   for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
         if (wordToFind.test(recipes[i].ingredients[j].ingredient)) {
            arrayFilterRecipes.push(recipes[i]);
            break;
         }
      }
   }

   // Je supprime les doublons du tableau
   for (let x = 0; x < arrayFilterRecipes.length; x++) {
      for (let y = x + 1; y < arrayFilterRecipes.length; y++) {
         if (arrayFilterRecipes[x] === arrayFilterRecipes[y]) {
            arrayFilterRecipes.splice(y, 1);
            y--;
         }
      }
   }

   // J'appelle les fonctions de création des recettes filtrées et des listes ingrédients, appareils et ustensiles
   displayDataSimpleFilter(arrayFilterRecipes);
   displayListIngredientSimpleFilter(arrayFilterRecipes);
   displayListApplianceSimpleFilter(arrayFilterRecipes);
   displayListUstensilSimpleFilter(arrayFilterRecipes);
   eventCreateTagIngredient();
   eventCreateTagAppliance();
   eventCreateTagUstensil();

   // J'affiche un message d'erreur si aucune recette ne correspond
   if (arrayFilterRecipes.length === 0) {
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", 'Aucune recette ne correspond à votre critère...Vous pouvez chercher "tarte aux pommes", "poisson", etc.');
      searchContainer.setAttribute("data-error-visible", "true");
      console.log("Aucune recette ne correspond à votre critère");
   } else {
      //Je n'affiche pas le message d'erreur
      searchContainer.setAttribute("data-error", "");
      searchContainer.setAttribute("data-error-visible", "");
   }
}
