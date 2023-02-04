const searchInput = document.querySelector(".button__hidden--ingredient");

// J'appelle la fonction filterSearch à la saisie dans l'input ingrédient
searchInput.addEventListener("input", function () {
   const searchValue = this.value;
//    console.log(searchValue);
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
//    console.log(arrayFilterRecipes);
//    console.log(arrayFilterRecipes.length);

   // J'appelle la fonction de création des recettes, des boutons ingrédients, appareils et ustensiles
   displayData(arrayFilterRecipes);
   displayButtonIngredient(arrayFilterRecipes);
   displayButtonAppliance(arrayFilterRecipes);
   displayButtonUstensil(arrayFilterRecipes);

   const wrapperHidden = document.querySelector(".wrapper__hidden--ingredient");

   if (arrayFilterRecipes.length === 0) {
    // J'affiche le message d'erreur
    wrapperHidden.setAttribute("data-error", 'Aucun ingrédient ne correspond à votre critère');
    wrapperHidden.setAttribute("data-error-visible", "true");
    console.log("Aucun ingrédient ne correspond à votre critère");
 } else {
    //Je n'affiche pas le message d'erreur
    wrapperHidden.setAttribute("data-error", "");
    wrapperHidden.setAttribute("data-error-visible", "");
    console.log("c'est ok");
 }



//     const ingredients = document.querySelectorAll(".wrapper__option");
//    ingredients.forEach((btn) =>
//       btn.addEventListener("click", function (event) {
//          // Je récupère le texte de l'ingrédient
//          console.log(this);
//          const currentIngredient = this.textContent;

//          // Je créé le bouton tag
//          createTagIngredient(currentIngredient);

//          // Je récupère tous les boutons tag
//         //  const buttonsTag = document.querySelectorAll(".btn");

//          // si currentIngredient est déjà créé alors je ne recréé pas le tag
//          //    if(buttonsTag.length !== 0){
//          //       closeTagIngredient();
//          //    } else {
//          //       console.log("Pas de tag");
//          //    }

//          // Je supprime l'ingrédient cliqué de la liste des ingrédients
//         //  deleteIngredientList(event);

//          // Pour chaque bouton tag cliqué, je supprime le bouton et je remet l'ingrédient dans la liste
//     //      buttonsTag.forEach((btn) =>
//     //      btn.addEventListener("click", deleteButton, reAddIngredientList(event) ));
//       })
//    );




}
