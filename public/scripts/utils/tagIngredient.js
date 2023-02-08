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
    selectedTagsIngredients = selectedTagsIngredients.filter(selectedTag => selectedTag !== this);
    filterRecipesTags();
    // console.log(currentIngredient);
}

// function deleteTagIngredient(currentIngredient) {
//     // const tagToRemove = document.querySelector("`.btn:contains(${currentIngredient})`");
//     // const tagToRemove = document.getElementById(currentIngredient);
//     // const tagToRemove = document.querySelector(`#${currentIngredient}`);
//     // console.log(currentIngredient);
//     // console.log(tagToRemove);
//     // tagToRemove.remove();
//     // tagToRemove.style.display = "none!important";
//     selectedTagsIngredients = selectedTagsIngredients.filter(selectedTag => selectedTag !== currentIngredient);
//  }


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
            console.log("Déjà cliqué");
            this.setAttribute("aria-label", "Tag déjà créé");
         }

         // Je récupère tous les boutons tag
         const buttonsTag = document.querySelectorAll(".btn");

         // Je supprime le tag
         buttonsTag.forEach((btn) => btn.addEventListener("click", deleteTagIngredient));




//          // Je récupère tous les boutons tag
//          const buttonsTag = document.querySelectorAll(".btn");

//          // Je supprime le tag
//          buttonsTag.forEach((btn) => btn.addEventListener("click", function(event) {
//             // console.log(event.type);

//             const currentIngredient = this.textContent;
//             // console.log(currentIngredient);
// // event.preventDefault();
//             deleteTagIngredient(currentIngredient);

//             // selectedTags = selectedTags.filter(selectedTag => selectedTag !== tag);
//          }));
      })
   );
}


