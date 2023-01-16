function buttonIngredientFactory(datas) {
   const { ingredients } = datas;

   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayIngredients = recipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayIngredientsLowerCase = arrayIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueIngredients = Array.from(new Set(arrayIngredientsLowerCase)); // Je supprime les doublons
   const uniqueIngredientsSort = uniqueIngredients.sort(); // Je trie par ordre alphabétique

   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");

   // FACTORY DE LA LISTE DES INGREDIENTS

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   function getIngredientWrapperDOM() {
      // Création des éléments wrapper option ingrédients (li)
      uniqueIngredients.forEach((ingredient) => {
         const wrapperOption = document.createElement("li");
         wrapperOption.className = "wrapper__option";
         currentOption++;
         wrapperOption.textContent = ingredient;
         wrapperOption.setAttribute("id", "mi" + currentOption);
         wrapperListIngredient.appendChild(wrapperOption);
      });

      return wrapperListIngredient;
   }

   return { ingredients, getIngredientWrapperDOM };
}
