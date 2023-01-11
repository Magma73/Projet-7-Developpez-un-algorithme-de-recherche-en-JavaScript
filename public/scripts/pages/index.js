// console.log(recipes);

async function displayData(recipes) {
    const cardColsSection = document.querySelector(".cardsCols");

    recipes.forEach((recipe) => {
       const recipeModel = recetteCardFactory(recipe);
       const recipeCardDOM = recipeModel.getRecetteCardDOM();
       cardColsSection.appendChild(recipeCardDOM);
    });
 }

//  async function init() {
//     // Récupère les datas des recettes
//     const { recipes } = await recipes;
//     displayData(recipes);
//  }

//  init();

 displayData(recipes);