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
         if ("likeClicked" in this.dataset === false) {
            this.dataset.likeClicked = "clicked";
            this.setAttribute("aria-label", "Tag ajouté");
            createTagIngredient(currentIngredient);
            selectedTagsIngredients.push(currentIngredient);
            filterRecipesTags();
            // console.log(selectedTagsIngredients);
            // console.log(currentIngredient);
         } else if ("likeClicked" in this.dataset === true) {
            this.setAttribute("aria-label", "Tag déjà créé");
         }

         // Je récupère tous les boutons tag
         const buttonsTag = document.querySelectorAll(".btn");

         // Je supprime le tag
         buttonsTag.forEach((btn) => btn.addEventListener("click", deleteTagIngredient));
      })
   );
}