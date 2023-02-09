let selectedTagsUstensil = [];
// Je créé le tag appareil
function createTagUstensil(currentUstensil) {
    const containerTags = document.querySelector(".container__tags");
    const tagUstensilModel = tagUstensilFactory(currentUstensil);
    const UstensilTagCardDOM = tagUstensilModel.getTagUstensilDOM();
    containerTags.appendChild(UstensilTagCardDOM);
 }

 // Je créé la fonction de suppression des tags
 function deleteTagUstensil() {
   this.remove();
   selectedTagsUstensil = selectedTagsUstensil.filter(selectedTag => selectedTag !== this.textContent);
   filterRecipesTags();
}

 //  Je créé les boutons tags appareils au clic
 function eventCreateTagUstensil() {
    const UstensilOption = document.querySelectorAll(".wrapper__option--ustensil");
    UstensilOption.forEach((btn) =>
       btn.addEventListener("click", function () {
          // Je récupère le texte de l'appareil
          const currentUstensil = this.textContent;

          // Je créé le bouton tag
          if ("likeClicked" in this.dataset === false) {
             this.dataset.likeClicked = "clicked";
             this.setAttribute("aria-label", "Tag ajouté");
             createTagUstensil(currentUstensil);
             selectedTagsUstensil.push(currentUstensil);
             filterRecipesTags();
          } else if ("likeClicked" in this.dataset === true) {
             console.log("Déjà cliqué");
             this.setAttribute("aria-label", "Tag déjà créé");
          }

          // Je récupère tous les boutons tag
          const buttonsTag = document.querySelectorAll(".btn");

          // Je supprime le tag
          buttonsTag.forEach((btn) => btn.addEventListener("click", deleteTagUstensil));
       })
    );
 }
