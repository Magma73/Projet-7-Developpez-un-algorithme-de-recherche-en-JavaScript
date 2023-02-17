function filterRecipesTags() {
   // Je récupère la valeur saisie dans la recherche simple
   const valueSearchStored = localStorage.getItem("search");
   const valueSearch = valueSearchStored || "";
   let valueSearchLength = valueSearch.length;

   // Je teste si la valeur storée est nulle
   if (valueSearchStored == null) {
      valueSearchLength = 0;
   } else {
      valueSearchLength = valueSearchStored.length;
   }

   // Je récupère le tableau storé des recettes filtrées par la recherche avancée
   const storedArrayAdvancedFilterRecipes = localStorage.getItem("arrayAdvancedFilterRecipes");
   const arrayAdvancedFilterRecipesStored = JSON.parse(storedArrayAdvancedFilterRecipes);

   // J'initialise le tableau arrayAdvancedFilterRecipes
   let arrayAdvancedFilterRecipes = [];

   // Si la recherche simple utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche simple + recherche avancée
   if (valueSearchLength !== 0 && (searchValueIngredient.length !== 0 || searchValueAppareil.length !== 0 || searchValueUstensil.length !== 0)) {
      arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
         return (
            selectedTagsIngredients.every((selectedTag) => {
               return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
            }) &&
            selectedTagsAppliance.every((selectedTag) => {
               return recipe.appliance.toLowerCase().includes(selectedTag);
            }) &&
            selectedTagsUstensil.every((selectedTag) => {
               return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
            })
         );
      });
      // Si la recherche simple pas utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche avancée
   } else if (valueSearchLength === 0 && (searchValueIngredient.length !== 0 || searchValueAppareil.length !== 0 || searchValueUstensil.length !== 0)) {
      arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
         return (
            selectedTagsIngredients.every((selectedTag) => {
               return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
            }) &&
            selectedTagsAppliance.every((selectedTag) => {
               return recipe.appliance.toLowerCase().includes(selectedTag);
            }) &&
            selectedTagsUstensil.every((selectedTag) => {
               return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
            })
         );
      });
      // Si la recherche simple utilisée, alors j'utilise le tableau arrayFilterRecipes : recherche simple utilisée
   } else if (valueSearchLength !== 0) {
      arrayAdvancedFilterRecipes = arrayFilterRecipes.filter((recipe) => {
         return (
            selectedTagsIngredients.every((selectedTag) => {
               return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
            }) &&
            selectedTagsAppliance.every((selectedTag) => {
               return recipe.appliance.toLowerCase().includes(selectedTag);
            }) &&
            selectedTagsUstensil.every((selectedTag) => {
               return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
            })
         );
      });
      // Si la recherche simple pas utilisée, alors j'utilise le tableau recipes : recherche simple pas utilisée
   } else if (valueSearchLength === 0) {
      arrayAdvancedFilterRecipes = recipes.filter((recipe) => {
         return (
            selectedTagsIngredients.every((selectedTag) => {
               return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
            }) &&
            selectedTagsAppliance.every((selectedTag) => {
               return recipe.appliance.toLowerCase().includes(selectedTag);
            }) &&
            selectedTagsUstensil.every((selectedTag) => {
               return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
            })
         );
      });
   }

   // J'appelle les fonctions de création des recettes, des boutons ingrédients, appareils et ustensiles
   displayDataTagFilter(arrayAdvancedFilterRecipes);
   displayListIngredientTagFilter(arrayAdvancedFilterRecipes, selectedTagsIngredients);
   displayListApplianceTagFilter(arrayAdvancedFilterRecipes, selectedTagsAppliance);
   displayListUstensilTagFilter(arrayAdvancedFilterRecipes, selectedTagsUstensil);

   // J'appelle les fonctions de création des tags
   eventCreateTagIngredient();
   eventCreateTagAppliance();
   eventCreateTagUstensil();
}