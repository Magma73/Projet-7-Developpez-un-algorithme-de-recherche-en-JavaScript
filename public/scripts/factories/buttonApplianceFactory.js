function buttonApplianceFactory(datas) {
   const appliance = datas;

   // FACTORY DE LA LISTE DES APPAREILS

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   function getApplianceWrapperDOM() {
      // Création des éléments wrapper option appareils (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option wrapper__option--appareil";
      currentOption++;
      wrapperOption.textContent = appliance;
      // wrapperOption.setAttribute("id", "ma" + currentOption);

      return wrapperOption;
   }

   return { appliance, getApplianceWrapperDOM };
}
