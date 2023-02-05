// Je génère le tag ingrédient
function createTagIngredient(currentIngredient) {
   const containerTags = document.querySelector(".container__tags");
   const tagIngredientModel = tagIngredientFactory(currentIngredient);
   const ingredientTagCardDOM = tagIngredientModel.getTagIngredientDOM();
   containerTags.appendChild(ingredientTagCardDOM);
}


// Je créé la fonction de fermeture des tags
// function deleteIngredientList(event) {
//     // event.target.remove();
//     // console.log(currentIngredient.target);
//     // console.log(currentIngredient);

//     event.target.style.display = "none";
//     // console.log(event);
//   }

//   function reAddIngredientList(event) {
//     console.log(event);
//     // event.target.style.display = "flex";
//     // event.target.add();
//     // console.log(event.target);
//     // console.log(currentIngredient.target);
//     // console.log(currentIngredient);
//   }

  function deleteTagIngredient() {
     this.remove();
    console.log(this);
  }