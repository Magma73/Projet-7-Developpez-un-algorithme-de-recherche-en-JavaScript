function filterRecipesTags() {
   // Je récupère le tableau des recettes filtrées par la recherche simple : arrayFilterRecipes
   // S'il est égal à 0, je fais mon filtre avancée sur le tableau recipes
   console.log("Tableaux en entrée :");
   console.log(arrayFilterRecipes);
   console.log(arrayAdvancedFilterRecipes);
   const storedArrayAdvancedFilterRecipes = localStorage.getItem("arrayAdvancedFilterRecipes");
   const arrayAdvancedFilterRecipesStored = JSON.parse(storedArrayAdvancedFilterRecipes);
   console.log("Tableau storé :");
   console.log(arrayAdvancedFilterRecipesStored);

   // Si la longueur du tableau storé est égale à celle du tableau recipes et que recipes est vide, j'utilise recipes => si aucune recherche simple ni avancée
   if ((storedArrayAdvancedFilterRecipes.length === recipes.length) && (arrayFilterRecipes.length === 0)) {
      console.log("Tableau recipes");
      arrayAdvancedFilterRecipes.filter((recipe) => {
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
      // Sinon si, la longueur du tableau arrayAdvandedFilterRecipes est égal à du tableau storé, j'utilise arrayFilterRecipes => si recherche simple
   } else if (arrayAdvancedFilterRecipes.length === storedArrayAdvancedFilterRecipes.length){
      console.log("Tableau arrayFilterRecipes");
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
      // Sinon si, la longueur du tableau arrayAdvandedFilterRecipes est différente du tableau storé, j'utilise le tableau storé => si recherche avancée
   } else if (arrayAdvancedFilterRecipes.length !== storedArrayAdvancedFilterRecipes.length) {
      console.log("Tableau arrayAdvancedFilterRecipesStored");
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
   }


   console.log("Tableaux en sortie :");
   console.log(arrayFilterRecipes);
   console.log(arrayAdvancedFilterRecipes);
   console.log("Tableau storé :");
   console.log(arrayAdvancedFilterRecipesStored);

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
