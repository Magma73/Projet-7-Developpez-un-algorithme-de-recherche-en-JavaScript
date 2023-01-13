// console.log(recipes);

async function displayData(recipes) {
   const cardColsSection = document.querySelector(".cardsCols");

   recipes.forEach((recipe) => {
      const recipeModel = recetteCardFactory(recipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

async function displayWrappers(recipes) {
   const wrapperHiddenIngredient = document.querySelector(".wrapper__hidden--ingredient");
   const ingredientWrapperModel = wrappersFactory(recipes);
   const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
   wrapperHiddenIngredient.appendChild(ingredientWrapperCardDOM);



   const wrapperHiddenAppareil= document.querySelector(".wrapper__hidden--appareil");
   const appareilWrapperModel = wrappersFactory(recipes);
   const appareilWrapperCardDOM = appareilWrapperModel.getAppareilWrapperDOM();
   wrapperHiddenAppareil.appendChild(appareilWrapperCardDOM);


   const wrapperHiddenUstensil= document.querySelector(".wrapper__hidden--ustensil");
   const ustensilWrapperModel = wrappersFactory(recipes);
   const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
   wrapperHiddenUstensil.appendChild(ustensilWrapperCardDOM);



   //  uniqueIngredients.forEach((ingredient) => {
   //       const ingredientWrapperModel = wrappersFactory(ingredient);
   //      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
   //      wrapperHiddenIngredient.appendChild(ingredientWrapperCardDOM);

   //   });

   // recipes.forEach((recipe) => {
   //    const ingredientWrapperModel = wrappersFactory(recipe);
   //    const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
   //    wrapperHiddenIngredient.appendChild(ingredientWrapperCardDOM);
   // });
}

async function init() {
   // Récupère les datas des recettes
   displayData(recipes);
   displayWrappers(recipes);
}

init();
