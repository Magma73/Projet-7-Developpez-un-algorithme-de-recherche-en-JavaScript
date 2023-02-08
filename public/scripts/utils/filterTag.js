function filterRecipesTags() {
   // Je récupère le tableau des recettes filtrées par la recherche simple : arrayFilterRecipes
   // S'il est égal à 0, je fais mon filtre avancée sur le tableau recipes
   if (arrayFilterRecipes.length === 0) {
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
      // return filteredRecipes;
      console.log(arrayAdvancedFilterRecipes);
      //    console.log(recipes);
      // Sinon, je fais mon filtre avancée sur le tableau arrayFilterRecipes
   } else {
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
   }
   // J'appelle les fonctions de création des recettes, des boutons ingrédients, appareils et ustensiles
   displayDataTagFilter(arrayAdvancedFilterRecipes);
   displayListIngredientTagFilter(arrayAdvancedFilterRecipes, selectedTagsIngredients);

}
