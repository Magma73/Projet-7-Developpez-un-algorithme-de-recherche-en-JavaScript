function wrappersFactory(datas) {
   const { ingredients, appliance, ustensils } = datas;

   //    console.log(ingredients);

   // var arr = [1,2,3,4,1,2,3,1,2,3]

   // const uniqueIngredient = [...new Set(ingredients)];

   // console.log(uniqueIngredient);

   const wrapperListIngredient = document.querySelector(".wrapper__list");

   // const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

   // FACTORY DES CARTES RECETTES

   function getIngredientWrapperDOM() {
      // Création des éléments wrapper option (li)

      // let nbIngredient = ingredients.length;
      // console.log(nbIngredient);
      // console.log(ingredients);
      let arr = [];

      ingredients.forEach((ingredient) => {
         // const nbIngredient = ingredients.ingredient;

         arr.push(ingredient.ingredient);

         console.log(arr);
         // const uniqueIngredient = [...new Set(arr)];

         // console.log(uniqueIngredient);
         let nbIngredient = +1;
         // let total =+ nbIngredient;
         // console.log(total);

         // console.log(ingredient.length);

         // items.forEach(function(item){
         //     copie.push(item);
         //   });

         const wrapperOption = document.createElement("li");

         wrapperOption.className = "wrapper__option wrapper__option";
         wrapperOption.textContent = ingredient.ingredient;
         wrapperOption.setAttribute("id", "mi");

         wrapperListIngredient.appendChild(wrapperOption);
      });

      //    // Ajout icon arrow dans span
      //    iconArrowDown.appendChild(pathArrowDown);
      //    spanIconArrowDown.appendChild(iconArrowDown);

      //    // Ajout span dans button
      //    buttonHiddenIngredient.appendChild(spanIconArrowDown);

      //    // Ajout des éléments dans wrapper hidden ingredient
      //    divWrapperHiddenIngredient.appendChild(buttonHiddenIngredient);
      //    divWrapperHiddenIngredient.appendChild(wrapperUl);

      return wrapperListIngredient;
   }
   // return { name,  id, city, country, tagline, price, picture, getUserCardDOM }
   // return { ingredients, appliance, ustensils, getIngredientWrapperDOM };
   return { ingredients, appliance, ustensils, getIngredientWrapperDOM };
}
