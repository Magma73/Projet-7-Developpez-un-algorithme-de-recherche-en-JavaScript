function buttonApplianceFactory(datas) {
   const appliance = datas;

   // FACTORY DE LA LISTE DES USTENSILES
   function getApplianceWrapperDOM() {
      // Création des éléments wrapper option appareils (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option";
      wrapperOption.textContent = appliance;

      return wrapperOption;
   }

   return { appliance, getApplianceWrapperDOM };
}
