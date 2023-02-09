function tagApplianceFactory(datas) {
   const currentAppliance = datas;

   // FACTORY DU TAG INGREDIENT
   function getTagApplianceDOM() {
      // Création du bouton tag
      const buttonTagAppliance = document.createElement("button");
      buttonTagAppliance.className = "btn btn-appareil text-white pl-3 pr-4 mr-sm-5 mb-3 fs-7 d-flex justify-content-between align-items-center";
      buttonTagAppliance.textContent = currentAppliance;
      buttonTagAppliance.setAttribute("type", "button");
      buttonTagAppliance.setAttribute("style", "text-transform : capitalize");

      // Création span contenant icon close
      const spanIconClose = document.createElement("span");
      spanIconClose.className = "icon-close pl-3 d-flex align-items-center";

      // Création de icon close
      const iconClose = document.createElement("i");
      iconClose.className = "far fa-times-circle";
      iconClose.setAttribute("style", "font-size:20px");

      // J'intègre les éléments dans le bouton tag
      spanIconClose.appendChild(iconClose);
      buttonTagAppliance.appendChild(spanIconClose);

      return buttonTagAppliance;
   }

   return { currentAppliance, getTagApplianceDOM };
}
