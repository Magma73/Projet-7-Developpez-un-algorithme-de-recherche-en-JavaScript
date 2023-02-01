// Je génère le tag ingrédient
function createTagIngredient(currentIngredient) {
   const containerTags = document.querySelector(".container__tags");
   const tagIngredientModel = tagIngredientFactory(currentIngredient);
   const ingredientTagCardDOM = tagIngredientModel.getTagIngredientDOM();
   containerTags.appendChild(ingredientTagCardDOM);
}

