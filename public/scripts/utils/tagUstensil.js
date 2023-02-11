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
   selectedTagsUstensil = selectedTagsUstensil.filter((selectedTag) => selectedTag !== this.textContent);
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
         createTagUstensil(currentUstensil);

         // J'ajoute le nom dans le tableau selectedTagsUstensil
         selectedTagsUstensil.push(currentUstensil);

         // J'appelle la fonction de filtre des recettes par tag
         filterRecipesTags();

         // Je récupère tous les boutons tag
         const buttonsTag = document.querySelectorAll(".btn");

         // Je supprime le tag
         buttonsTag.forEach((btn) => btn.addEventListener("click", deleteTagUstensil));
      })
   );
}
