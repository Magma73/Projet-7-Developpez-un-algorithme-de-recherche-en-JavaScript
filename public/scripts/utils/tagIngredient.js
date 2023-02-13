let selectedTagsIngredients = [];
// Je créé le tag ingrédient
function createTagIngredient(currentIngredient) {
   const containerTags = document.querySelector(".container__tags");
   const tagIngredientModel = tagIngredientFactory(currentIngredient);
   const ingredientTagCardDOM = tagIngredientModel.getTagIngredientDOM();
   containerTags.appendChild(ingredientTagCardDOM);
}

// Je créé la fonction de suppression des tags
function deleteTagIngredient() {
   this.remove();
   selectedTagsIngredients = selectedTagsIngredients.filter((selectedTag) => selectedTag !== this.textContent);
   filterRecipesTags();
}

//  Je créé les boutons tags ingrédients au clic
function eventCreateTagIngredient() {
   const ingredientOption = document.querySelectorAll(".wrapper__option--ingredient");
   ingredientOption.forEach((btn) =>
      btn.addEventListener("click", function () {
         // Je récupère le texte de l'ingrédient
         const currentIngredient = this.textContent;

         // Je créé le bouton tag
         createTagIngredient(currentIngredient);

         // J'ajoute le nom dans le tableau selectedTagsIngredients
         selectedTagsIngredients.push(currentIngredient);

         // J'appelle la fonction de filtre des recettes par tag
         filterRecipesTags();

         // Je récupère tous les boutons tag
         const buttonsTag = document.querySelectorAll(".btn");

         // Je supprime le tag
         buttonsTag.forEach((btn) => btn.addEventListener("click", deleteTagIngredient));
      })
   );
}