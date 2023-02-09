function tagUstensilFactory(datas) {
   const currentUstensil = datas;

   // FACTORY DU TAG INGREDIENT
   function getTagUstensilDOM() {
      // Création du bouton tag
      const buttonTagUstensil = document.createElement("button");
      buttonTagUstensil.className = "btn btn-ustensil text-white pl-3 pr-4 mr-sm-5 mb-3 fs-7 d-flex justify-content-between align-items-center";
      buttonTagUstensil.textContent = currentUstensil;
      buttonTagUstensil.setAttribute("type", "button");
      buttonTagUstensil.setAttribute("style", "text-transform : capitalize");

      // Création span contenant icon close
      const spanIconClose = document.createElement("span");
      spanIconClose.className = "icon-close pl-3 d-flex align-items-center";

      // Création de icon close
      const iconClose = document.createElement("i");
      iconClose.className = "far fa-times-circle";
      iconClose.setAttribute("style", "font-size:20px");

      // J'intègre les éléments dans le bouton tag
      spanIconClose.appendChild(iconClose);
      buttonTagUstensil.appendChild(spanIconClose);

      return buttonTagUstensil;
   }

   return { currentUstensil, getTagUstensilDOM };
}