const searchForm = document.querySelector("#search-input");
const searchContainer = document.querySelector(".search-container");

searchForm.addEventListener("input", function () {
   search = this.value;
   filterSearch();
   filterRecipesAdvanced();
   filterRecipesTags();
});

//J'initialise le tableau arrayFilterRecipes
let arrayFilterRecipes = [];

function filterSearch() {
   // Je récupère la valeur saisie dans l'input et je le stocke
   const valueSearch = search.toLowerCase();

   // Je calcule la longueur de la valeur saisie
   let nbCaracteres = valueSearch.length;

   if (nbCaracteres >= 3) {
      filterRecipes(valueSearch);
      // Je stocke la valeur saisie dans le local storage
      localStorage.setItem("search", JSON.stringify(search));
   } else if (nbCaracteres > 0 && nbCaracteres < 3) {
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", "Veuillez entrer plus de 3 caractères.");
      searchContainer.setAttribute("data-error-visible", "true");
      // Je réinitialise la valeur dans le local storage
      localStorage.setItem("search", "");
   } else if (nbCaracteres === 0) {
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", "Veuillez entrer plus de 3 caractères.");
      searchContainer.setAttribute("data-error-visible", "true");
      // Je réinitialise mon tableau de recettes filtrées à 0
      arrayFilterRecipes = [];
      // Je réinitialise la valeur dans le local storage
      localStorage.setItem("search", "");
   }
}

const filterRecipes = (valueSearch) => {
   const wordToFind = valueSearch.toLowerCase();
   console.log(wordToFind);
   // Je réinitialise mon tableau de recettes filtrées à 0
   arrayFilterRecipes = [];

   arrayFilterRecipes = recipes.filter((recipe) => {
      // Je teste chaque recette

      return (
         //Je recherche le mot dans le titre
         recipe.name.toLowerCase().includes(wordToFind) ||
         // Je recherche le mot dans les ingrédients
         recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(wordToFind.toLowerCase())) ||
         // Je recherche le mot dans la description
         recipe.description.toLowerCase().includes(wordToFind)
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
