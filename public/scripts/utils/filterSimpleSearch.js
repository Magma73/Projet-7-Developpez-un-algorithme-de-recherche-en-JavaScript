const searchForm = document.querySelector("#search-input");
const searchContainer = document.querySelector(".search-container");

searchForm.addEventListener("input", function () {
   search = this.value;
   console.log(search);
   filterSearch();
   filterRecipesTags();
   // localStorage.setItem("search", JSON.stringify(search));
});

//J'initialise le tableau arrayFilterRecipes
let arrayFilterRecipes = [];

function filterSearch() {
   // Je récupère la valeur saisie dans l'input et je le stocke
   const valueSearch = search.toLowerCase();

   // Je calcule la longueur de la valeur saisie
   let nbCaracteres = valueSearch.length;

   if (nbCaracteres >= 3) {
      console.log("nb caracteres >=3");
      filterRecipes(valueSearch);
      // Je stocke la valeur saisie dans le local storage
      // localStorage.setItem("valueSearch", JSON.stringify(valueSearch));
      localStorage.setItem("search", JSON.stringify(search));
   } else if (nbCaracteres > 0 && nbCaracteres < 3) {
      // J'affiche le message d'erreur
      console.log("nbCaracteres > 0 && nbCaracteres < 3");

      searchContainer.setAttribute("data-error", "Veuillez entrer plus de 3 caractères.");
      searchContainer.setAttribute("data-error-visible", "true");
      // Je réinitialise la valeur dans le local storage
      // localStorage.setItem("valueSearch", "");
      localStorage.setItem("search", "");
   } else if (nbCaracteres === 0) {
      console.log("nbCaracteres === 0");
      // displayData(recipes);
      // displayListIngredient(recipes);
      // displayListAppliance(recipes);
      // displayListUstensil(recipes);
      // eventCreateTagIngredient();
      // eventCreateTagAppliance();
      // eventCreateTagUstensil();
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", "Veuillez entrer plus de 3 caractères.");
      searchContainer.setAttribute("data-error-visible", "true");
      // Je réinitialise mon tableau de recettes filtrées à 0
      arrayFilterRecipes = [];
      // Je réinitialise la valeur dans le local storage
      // localStorage.setItem("valueSearch", "");
      localStorage.setItem("search", "");

   }
}

const filterRecipes = (valueSearch) => {
   // const wordToFind = new RegExp("\\b" + valueSearch + "\\b", "gi");
   // const wordToFind = new RegExp("\\b" + valueSearch, "i");

   const wordToFind = valueSearch;

   // Je réinitialise mon tableau de recettes filtrées à 0
   arrayFilterRecipes = [];

   arrayFilterRecipes = recipes.filter((recipe) => {
      // Je teste chaque recette

      return (
         //Je recherche le mot dans le titre
         recipe.name.match(wordToFind) ||
         // Je recherche le mot dans les ingrédients
         recipe.ingredients.some((ingredient) => ingredient.ingredient.match(wordToFind)) ||
         // Je recherche le mot dans la description
         recipe.description.match(wordToFind)
      );
   });



   // J'appelle les fonctions de création des recettes filtrées et des listes ingrédients, appareils et ustensiles
   displayDataSimpleFilter(arrayFilterRecipes);
   displayListIngredientSimpleFilter(arrayFilterRecipes);
   displayListApplianceSimpleFilter(arrayFilterRecipes);
   displayListUstensilSimpleFilter(arrayFilterRecipes);

   // J'appelle les fonctions de création des tags
   eventCreateTagIngredient();
   eventCreateTagAppliance();
   eventCreateTagUstensil();

   if (arrayFilterRecipes.length === 0) {
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", 'Aucune recette ne correspond à votre critère...Vous pouvez chercher "tarte aux pommes", "poisson", etc.');
      searchContainer.setAttribute("data-error-visible", "true");
   } else {
      //Je n'affiche pas le message d'erreur
      searchContainer.setAttribute("data-error", "");
      searchContainer.setAttribute("data-error-visible", "");
   }
};
