function buttonUstensilFactory(datas) {
   const ustensil = datas;

   // FACTORY DE LA LISTE DES USTENSILES

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   function getUstensilWrapperDOM() {
      // Création des éléments wrapper option ustensils (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option wrapper__option--ustensil";
      currentOption++;
      wrapperOption.textContent = ustensil;
      // wrapperOption.setAttribute("id", "mu" + currentOption);

      return wrapperOption;
   }

   return { ustensil, getUstensilWrapperDOM };
}
