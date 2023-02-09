let selectedTagsAppliance = [];
// Je créé le tag appareil
function createTagAppliance(currentAppliance) {
   const containerTags = document.querySelector(".container__tags");
   const tagApplianceModel = tagApplianceFactory(currentAppliance);
   const applianceTagCardDOM = tagApplianceModel.getTagApplianceDOM();
   containerTags.appendChild(applianceTagCardDOM);
}

// Je créé la fonction de suppression des tags
function deleteTagAppliance() {
   this.remove();
   selectedTagsAppliance = selectedTagsAppliance.filter((selectedTag) => selectedTag !== this.textContent);
   filterRecipesTags();
}

//  Je créé les boutons tags appareils au clic
function eventCreateTagAppliance() {
   const applianceOption = document.querySelectorAll(".wrapper__option--appareil");
   applianceOption.forEach((btn) =>
      btn.addEventListener("click", function () {
         // Je récupère le texte de l'appareil
         const currentAppliance = this.textContent;

         // Je créé le bouton tag
         if ("likeClicked" in this.dataset === false) {
            this.dataset.likeClicked = "clicked";
            this.setAttribute("aria-label", "Tag ajouté");
            createTagAppliance(currentAppliance);
            selectedTagsAppliance.push(currentAppliance);
            filterRecipesTags();
         } else if ("likeClicked" in this.dataset === true) {
            console.log("Déjà cliqué");
            this.setAttribute("aria-label", "Tag déjà créé");
         }

         // Je récupère tous les boutons tag
         const buttonsTag = document.querySelectorAll(".btn");

         // Je supprime le tag
         buttonsTag.forEach((btn) => btn.addEventListener("click", deleteTagAppliance));
      })
   );
}
