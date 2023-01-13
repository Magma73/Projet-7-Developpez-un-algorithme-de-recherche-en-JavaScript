function wrappersFactory(datas) {
   const { ingredients, appliance, ustensils } = datas;

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

   const arrayIngredients = recipes.map((recipe) => recipe.ingredients).flat();
   // const arrayIngredients = recipes.map(recipe => recipe.ingredients);
   const uniqueIngredients = arrayIngredients.filter((ingredient, index) => arrayIngredients.findIndex((i) => i.ingredient === ingredient.ingredient) === index);
   // const uniqueIngredients = arrayIngredients.filter((ingredient, index) => console.log(ingredient.flat()));

   // console.log(arrayIngredients);
   // console.log(uniqueIngredients);

   const arrayAppareils = recipes.map((recipe) => recipe.appliance).flat();
   const uniqueAppareils = Array.from(new Set(arrayAppareils));

   // console.log(arrayAppareils);
   // console.log(uniqueAppareils);

   const arrayUstensils= recipes.map((recipe) => recipe.ustensils).flat();
   const uniqueUstensils = Array.from(new Set(arrayUstensils));

   // console.log(arrayUstensils);
   console.log(uniqueUstensils);

   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");

   // FACTORY DES BOUTONS DE FILTRE

   function getIngredientWrapperDOM() {
      // Création des éléments wrapper option ingrédients (li)
      uniqueIngredients.forEach((ingredient) => {
         const wrapperOption = document.createElement("li");
         wrapperOption.className = "wrapper__option wrapper__option";
         wrapperOption.textContent = ingredient.ingredient;
         wrapperOption.setAttribute("id", "mi");
         wrapperListIngredient.appendChild(wrapperOption);
      });

      return wrapperListIngredient;
   }

   function getAppareilWrapperDOM() {
      // Création des éléments wrapper option appareils (li)
      uniqueAppareils.forEach((appareil) => {
         const wrapperOption = document.createElement("li");
         wrapperOption.className = "wrapper__option wrapper__option";
         wrapperOption.textContent = appareil;
         wrapperOption.setAttribute("id", "ma");
         wrapperListAppareil.appendChild(wrapperOption);
      });

      return wrapperListAppareil;
   }

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

   return { ingredients, appliance, ustensils, getIngredientWrapperDOM, getAppareilWrapperDOM, getUstensilWrapperDOM };
}
