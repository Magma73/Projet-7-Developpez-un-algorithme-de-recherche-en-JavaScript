const searchForm = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-addon");
const searchContainer = document.querySelector(".search-container");

// J'appelle la fonction filterSearch au clic sur la loupe
searchBtn.addEventListener("click", filterSearch);

function filterSearch() {
   // Je récupère la valeur saisie dans l'input et je le mets en minuscules
   valueSearch = searchForm.value.toLowerCase();

   // Je calcule la longueur de la valeur saisie
   nbCaracteres = valueSearch.length;

   if (nbCaracteres >= 3) {
      filterRecipes(valueSearch);
   } else if (nbCaracteres > 0 && nbCaracteres < 3) {
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", "Veuillez entrer plus de 3 caractères.");
      searchContainer.setAttribute("data-error-visible", "true");
   } else if (nbCaracteres === 0){
      displayData(recipes);
      displayButtonIngredient(recipes);
      displayButtonAppliance(recipes);
      displayButtonUstensil(recipes);
   }
}

function filterRecipes(valueSearch) {
   const wordToFind = valueSearch;
   const arrayFilterRecipes = recipes.filter((recipe) => {
      // Je teste chaque recette
      return (
         //Je recherche le mot dans le titre
         recipe.name.toLowerCase().includes(wordToFind) ||
         // Je recherche le mot dans les ingrédients
         recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(wordToFind)) ||
         // Je recherche le mot dans la description
         recipe.description.toLowerCase().includes(wordToFind)
      );
   });

   // J'appelle la fonction  de création des recettes filtrées
   displayData(arrayFilterRecipes);

   // J'appelle la fonction de filtre de la recherche avancée par ingrédients
   displayButtonIngredient(arrayFilterRecipes);

   // J'appelle la fonction de filtre de la recherche avancée par appareil
   displayButtonAppliance(arrayFilterRecipes);

   // J'appelle la fonction de filtre de la recherche avancée par ustensile
   displayButtonUstensil(arrayFilterRecipes);

   if (arrayFilterRecipes.length === 0) {
      // J'affiche le message d'erreur
      searchContainer.setAttribute("data-error", 'Aucune recette ne correspond à votre critère...Vous pouvez chercher "tarte aux pommes", "poisson", etc.');
      searchContainer.setAttribute("data-error-visible", "true");
   } else {
      //Je n'affiche pas le message d'erreur
      searchContainer.setAttribute("data-error", "");
      searchContainer.setAttribute("data-error-visible", "");
   }
}