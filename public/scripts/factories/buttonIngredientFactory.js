function buttonIngredientFactory(datas) {
   const ingredient = datas;

   // FACTORY DE LA LISTE DES INGREDIENTS
   function getIngredientWrapperDOM() {
      // Création des éléments wrapper option ingrédients (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option";
      wrapperOption.textContent = ingredient;

      return wrapperOption;
   }

   return { ingredient, getIngredientWrapperDOM };
}
