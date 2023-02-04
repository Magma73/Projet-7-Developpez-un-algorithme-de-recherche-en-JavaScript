const searchInput = document.querySelector(".button__hidden--ingredient");

// J'appelle la fonction filterSearch à la saisie dans l'input ingrédient
searchInput.addEventListener("input", function () {
   const searchValue = this.value;
   console.log(searchValue);
   filterRecipes(searchValue);

   // Je supprime les éléments de la liste
   /*deleteIngredientList(searchValue);*/
});

// Je créé la fonction de suppression de la liste des ingrédients
// function deleteIngredientList(event) {
//   // event.target.remove();
//   // console.log(currentIngredient.target);
//   // console.log(currentIngredient);

//   event.target.style.display = "none";
//   // console.log(event);
// }

function filterRecipes(searchValue) {
// const valueSearch = searchValue.value.toLowerCase();
   const ingredientToFind = searchValue;
   let arrayFilterRecipes = [];
   // Je recherche le mot dans les ingrédients
   for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
         if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(ingredientToFind)) {
            arrayFilterRecipes.push(recipes[i]);
            break;
         }
      }
   }
   console.log(arrayFilterRecipes);
   console.log(arrayFilterRecipes.length);

   displayData(arrayFilterRecipes);
   displayButtonIngredient(arrayFilterRecipes);
   displayButtonAppliance(arrayFilterRecipes);
   displayButtonUstensil(arrayFilterRecipes);

   if (arrayFilterRecipes.length === 0) {
    // J'affiche le message d'erreur
    const wrapperHidden = document.querySelector(".wrapper__hidden--ingredient");
    // searchInput.setAttribute("placeholder", 'Aucune ingrédient ne correspond à votre critère.');
    wrapperHidden.setAttribute("data-error", 'Aucune ingrédient ne correspond à votre critère');
    wrapperHidden.setAttribute("data-error-visible", "true");
    console.log("Aucune ingrédient ne correspond à votre critère");
 } else {
    //Je n'affiche pas le message d'erreur
    wrapperHidden.setAttribute("data-error", "");
    wrapperHidden.setAttribute("data-error-visible", "");
    console.log("c'est ok");
 }
}
