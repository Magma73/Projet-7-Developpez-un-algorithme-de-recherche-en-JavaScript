const searchForm = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-addon");
const searchContainer = document.querySelector(".search-container");
// const errorMsg = document.querySelector("#error-msg");

searchBtn.addEventListener("click", filterSearch);

function filterSearch() {
    // Je récupère la valeur saisie dans l'input et je le mets en minuscules
   valueSearch = searchForm.value.toLowerCase();
   console.log(valueSearch);
   // Je calcule la longueur de la valeur saisie
   nbCaracteres = valueSearch.length;
   console.log(nbCaracteres);

   if (nbCaracteres >= 3) {
      filterRecipes(valueSearch);
   } else if (nbCaracteres < 3) {
      console.log("Veuillez entrer plus de 3 caractères");
   }
}

function filterRecipes(valueSearch) {
   const wordToFind = valueSearch;
   const arrayRecipesLength = recipes.length;
   console.log("Longueur avant :", arrayRecipesLength);
   const arrayFilterRecipes = recipes.filter((recipe) => {
      // Je teste chaque recette

      return (
            //  if ( recipe.name.includes(wordToFind) || recipe.ingredients.some((ingredient) => ingredient.ingredient.includes(wordToFind)) || recipe.description.includes(wordToFind)) {
            //     console.log("c'est true")
            //     return true
            //  } else {
            //     console.log("c'est false")
            //      return false
            //  }
         //     );

         //Je recherche le mot dans le titre
         recipe.name.toLowerCase().includes(wordToFind) ||
         console.log(recipe.name.includes(wordToFind)) ||
         // Je recherche le mot dans les ingrédients
         recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(wordToFind)) ||
         console.log(recipe.ingredients.some((ingredient) => ingredient.ingredient.includes(wordToFind))) ||
         // Je recherche le mot dans la description
         recipe.description.toLowerCase().includes(wordToFind) ||
         console.log(recipe.description.includes(wordToFind))
      );
   });

   console.log("Longueur après :", arrayFilterRecipes.length);

   if (arrayFilterRecipes.length === 0) {
    // J'affiche le message d'erreur
    searchContainer.setAttribute("data-error", 'Aucune recette ne correspond à votre critère...Vous pouvez chercher "tarte aux pommes", "poisson", etc.');
    searchContainer.setAttribute("data-error-visible", "true");
    // errorMsg.style.display="block";
    console.log('Aucune recette ne correspond à votre critère...Vous pouvez chercher "tarte aux pommes", "poisson", etc.');
 } else {
    //Je n'affiche pas le message d'erreur
    searchContainer.setAttribute("data-error", "");
    searchContainer.setAttribute("data-error-visible", "");

    console.log(arrayFilterRecipes);
 }
}

// function filterIngredients(){};

// function filterDescription(){};
