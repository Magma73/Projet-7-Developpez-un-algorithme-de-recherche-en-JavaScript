function buttonUstensilFactory(datas) {
   const { ustensils } = datas;

   // console.log(appliance);
   //    let arrayIngredients = [];
   //    recipes.forEach(recipe => {
   //        recipe.ingredients.forEach(ingredient => {
   //         arrayIngredients.push(ingredient.ingredient);
   //        });
   //    });

   //    console.log(arrayIngredients);
   // console.log(ustensils);

   // const arrayIngredients = recipes.map(recipe => recipe.ingredients).flat();
   // const uniqueIngredients = arrayIngredients.filter((ingredient, index) => arrayIngredients.findIndex(i => i.ingredient === ingredient.ingredient) === index);

   // Je modifie le tableau d'objets ustensils afin de supprimer les doublons

   const arrayUstensils = recipes.map((recipe) => recipe.ustensils).flat(); // Je concatène les objets
   const arrayUstensilsLowerCase = arrayUstensils.map((recipe) => recipe.toLowerCase()); // Je mets tout en minuscules
   const uniqueUstensils = Array.from(new Set(arrayUstensilsLowerCase)); // Je supprime les doublons
   const uniqueUstensilsSort = uniqueUstensils.sort(); // Je trie par ordre alphabétique

   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");

   // FACTORY DE LA LISTE DES USTENSILES

   function getUstensilWrapperDOM() {
      // Création des éléments wrapper option ustensils (li)
      uniqueUstensils.forEach((ustensil) => {
         const wrapperOption = document.createElement("li");
         wrapperOption.className = "wrapper__option wrapper__option";
         wrapperOption.textContent = ustensil;
         wrapperOption.setAttribute("id", "mu");
         wrapperListUstensil.appendChild(wrapperOption);
      });

      return wrapperListUstensil;
   }

   return { ustensils, getUstensilWrapperDOM };
}
