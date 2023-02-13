function buttonUstensilFactory(datas) {
   const ustensil = datas;

   // FACTORY DE LA LISTE DES USTENSILES

   function getUstensilWrapperDOM() {
      // Création des éléments wrapper option ustensils (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option wrapper__option--ustensil";
      wrapperOption.textContent = ustensil;

      return wrapperOption;
   }

   return { ustensil, getUstensilWrapperDOM };
}
