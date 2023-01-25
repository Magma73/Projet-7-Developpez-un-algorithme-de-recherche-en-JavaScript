function buttonIngredientFactory(datas) {
   const ingredient = datas;

   // FACTORY DE LA LISTE DES INGREDIENTS

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   function getIngredientWrapperDOM() {
      // Création des éléments wrapper option ingrédients (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option";
      currentOption++;
      wrapperOption.textContent = ingredient;
      wrapperOption.setAttribute("id", "mi" + currentOption);

      return wrapperOption;
   }

   return { ingredient, getIngredientWrapperDOM };
}
