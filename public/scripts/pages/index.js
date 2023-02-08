// Fonction de création des recettes
async function displayData(recipes) {
   const cardColsSection = document.querySelector(".cardsCols");
   // Je réinitialise le container des cartes
   cardColsSection.innerHTML = "";

   // Je trie par ordre alphabétique
   recipes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
         return -1;
      }
      if (nameA > nameB) {
         return 1;
      }
      return 0;
   });

   // Je génère chaque recette
   recipes.forEach((recipe) => {
      const recipeModel = recetteCardFactory(recipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création des recettes filtrées
async function displayDataSimpleFilter(arrayFilterRecipes) {
   const cardColsSection = document.querySelector(".cardsCols");
   // Je réinitialise le container des cartes
   cardColsSection.innerHTML = "";

   // Je trie par ordre alphabétique
   arrayFilterRecipes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
         return -1;
      }
      if (nameA > nameB) {
         return 1;
      }
      return 0;
   });

   // Je génère chaque recette
   arrayFilterRecipes.forEach((filterRecipe) => {
      const recipeModel = recetteCardFactory(filterRecipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}
// Fonction de création des recettes filtrées
async function displayDataAdvancedFilter(arrayAdvancedFilterRecipes) {
   const cardColsSection = document.querySelector(".cardsCols");
   // Je réinitialise le container des cartes
   cardColsSection.innerHTML = "";

   // Je trie par ordre alphabétique
   arrayAdvancedFilterRecipes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
         return -1;
      }
      if (nameA > nameB) {
         return 1;
      }
      return 0;
   });

   // Je génère chaque recette
   arrayAdvancedFilterRecipes.forEach((advancedFilterRecipe) => {
      const recipeModel = recetteCardFactory(advancedFilterRecipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création da la liste d'ingrédient : bouton ingrédient
async function displayListIngredient(recipes) {
   // Je réinitialise le container des ingrédients
   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   wrapperListIngredient.innerHTML = "";
   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayIngredients = recipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayIngredientsLowerCase = arrayIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueIngredients = Array.from(new Set(arrayIngredientsLowerCase)); // Je supprime les doublons
   const uniqueIngredientsSort = uniqueIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ingrédient
   uniqueIngredientsSort.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}

// Fonction de création da la liste d'ingrédient : recherche simple
async function displayListIngredientSimpleFilter(arrayFilterRecipes) {
   // Je réinitialise le container des ingrédients
   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   wrapperListIngredient.innerHTML = "";

   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayFilterIngredients = arrayFilterRecipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayFilterIngredientsLowerCase = arrayFilterIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueFilterIngredients = Array.from(new Set(arrayFilterIngredientsLowerCase)); // Je supprime les doublons
   const uniqueFilterIngredientsSort = uniqueFilterIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ingrédient
   uniqueFilterIngredientsSort.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}
// Fonction de création da la liste d'ingrédient : recherche avancée
async function displayListIngredientAdvancedFilter(arrayAdvancedFilterRecipes, searchValueIngredient) {
   // Je réinitialise le container des ingrédients
   const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
   wrapperListIngredient.innerHTML = "";
   const wordToFind = searchValueIngredient;
   console.log(wordToFind);

   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayFilterIngredients = arrayAdvancedFilterRecipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayFilterIngredientsLowerCase = arrayFilterIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueFilterIngredients = Array.from(new Set(arrayFilterIngredientsLowerCase)); // Je supprime les doublons
   const uniqueFilterIngredientsSort = uniqueFilterIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const valueFilterIngredient = uniqueFilterIngredientsSort.filter((ingredients) => ingredients.includes(wordToFind));

   // Je génère chaque ingrédient
   valueFilterIngredient.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}

// Fonction de création de la liste d'appareils : bouton appareil
async function displayListAppliance(recipes) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";
   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysAppliances = recipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules : Array(50) [ "Blender", "Saladier", "Cocotte", "Cuiseur de riz", "Four", "Four", "Four", "Four", "Saladier", "Four", … ]
   const uniqueAppliances = Array.from(new Set(arrayOfArraysAppliances)); // Je supprime les doublons : Array(11) [ "blender", "saladier", "cocotte", "cuiseur de riz", "four", "casserole", "poêle à crêpe", "sauteuse", "mixer", "poêle", … ]
   const uniqueAppliancesSort = uniqueAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque appareil
   uniqueAppliancesSort.forEach((appliance) => {
      const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getApplianceWrapperDOM();
      wrapperListAppareil.appendChild(appareilWrapperCardDOM);
   });
}

// Fonction de création de la liste d'appareils : recherche simple
async function displayListApplianceSimpleFilter(arrayFilterRecipes) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";

   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysFilterAppliances = arrayFilterRecipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules
   const uniqueFilterAppliances = Array.from(new Set(arrayOfArraysFilterAppliances)); // Je supprime les doublons
   const uniqueFilterAppliancesSort = uniqueFilterAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque appareil
   uniqueFilterAppliancesSort.forEach((appliance) => {
      const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getApplianceWrapperDOM();
      wrapperListAppareil.appendChild(appareilWrapperCardDOM);
   });
}
// Fonction de création da la liste d'appareils : recherche avancée
async function displayListApplianceAdvancedFilter(arrayAdvancedFilterRecipes, searchValueAppareil) {
   // Je réinitialise le container des appareils
   const wrapperListAppliance = document.querySelector(".wrapper__list--appareil");
   wrapperListAppliance.innerHTML = "";
   const wordToFind = searchValueAppareil;

   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayFilterAppliance = arrayAdvancedFilterRecipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules
   const uniqueFilterAppliances = Array.from(new Set(arrayFilterAppliance)); // Je supprime les doublons
   const uniqueFilterAppliancesSort = uniqueFilterAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const valueFilterAppliance = uniqueFilterAppliancesSort.filter((appliance) => appliance.includes(wordToFind));

   // console.log(valueFilterAppliance);

   // Je génère chaque appareil
   valueFilterAppliance.forEach((appliance) => {
      const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getApplianceWrapperDOM();
      wrapperListAppareil.appendChild(appareilWrapperCardDOM);
   });
}

// Fonction de création da la liste des ustensiles : bouton ustensile
async function displayListUstensil(recipes) {
   // Je réinitialise le container des ustensiles
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
   wrapperListUstensil.innerHTML = "";

   // Je crée un nouveau tableau avec les ustensils : Array(50) [ (3) […], (1) […], (1) […], (2) […], (3) […], (3) […], (2) […], (2) […], (2) […], (3) […], … ]
   const arrayOfArraysUstensils = recipes.map((recipe) => recipe.ustensils);

   // console.log(arrayOfArraysUstensils);

   let arrayValueUstensils = []; // J'initialise mon tableau
   for (const [key, value] of Object.entries(arrayOfArraysUstensils)) {
      // Je récupère les valeurs du tableau arrayOfArraysUstensils
      const ustensil = `${value}`;
      arrayValueUstensils.push(ustensil); // Je stocke les valeurs dans mon tableau arrayValueUstensils : Array(50) [ "cuillère à Soupe,verres,presse citron", "presse citron", "couteau", "saladier,passoire", "moule à tarte,râpe à fromage,couteau", "moule à tarte,saladier,fourchette", "moule à tartelettes (6),casserole", "moule à gateaux,casserole", "cuillère en bois,couteau", "plat à gratin,couteau,Économe", … ]
   }
   const arrayUstensils = arrayValueUstensils.join(",").split(","); // Je supprime les virgules pour que chaque ustensile soit un élément du tableau : Array(122) [ "cuillère à Soupe", "verres", "presse citron", "presse citron", "couteau", "saladier", "passoire", "moule à tarte", "râpe à fromage", "couteau", … ]
   const arrayUstensilsLowerCase = arrayUstensils.map((recipe) => recipe.toLowerCase()); // Je mets tout en minuscules
   const uniqueUstensils = Array.from(new Set(arrayUstensilsLowerCase)); // Je supprime les doublons : Array(25) [ "cuillère à soupe", "verres", "presse citron", "couteau", "saladier", "passoire", "moule à tarte", "râpe à fromage", "fourchette", "moule à tartelettes (6)", … ]
   const uniqueUstensilsSort = uniqueUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ustensile
   uniqueUstensilsSort.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}

// Fonction de création de la liste des ustensiles : recherche simple
async function displayListUstensilSimpleFilter(arrayFilterRecipes) {
   // Je réinitialise le container des ustensiles
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
   wrapperListUstensil.innerHTML = "";

   // Je crée un nouveau tableau avec les ustensils
   const arrayOfArraysUstensils = arrayFilterRecipes.map((recipe) => recipe.ustensils);

   let arrayValueUstensils = []; // J'initialise mon tableau
   for (const [key, value] of Object.entries(arrayOfArraysUstensils)) {
      // Je récupère les valeurs du tableau arrayOfArraysUstensils
      const ustensil = `${value}`;
      arrayValueUstensils.push(ustensil); // Je stocke les valeurs dans mon tableau arrayValueUstensils
   }
   const arrayFilterUstensils = arrayValueUstensils.join(",").split(","); // Je supprime les virgules pour que chaque ustensile soit un élément du tableau
   const arrayFilterUstensilsLowerCase = arrayFilterUstensils.map((recipe) => recipe.toLowerCase()); // Je mets tout en minuscules
   const uniqueFilterUstensils = Array.from(new Set(arrayFilterUstensilsLowerCase)); // Je supprime les doublons
   const uniqueFilterUstensilsSort = uniqueFilterUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ustensile
   uniqueFilterUstensilsSort.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}

// Fonction de création da la liste des ustensiles : recherche avancée
async function displayListUstensilAdvancedFilter(arrayAdvancedFilterRecipes, searchValueUstensil) {
   // Je réinitialise le container des appareils
   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
   wrapperListUstensil.innerHTML = "";
   const wordToFind = searchValueUstensil;

   // Je crée un nouveau tableau avec les ustensils
   const arrayOfArraysUstensils = arrayAdvancedFilterRecipes.map((recipe) => recipe.ustensils);

   let arrayValueUstensils = []; // J'initialise mon tableau
   for (const [key, value] of Object.entries(arrayOfArraysUstensils)) {
      // Je récupère les valeurs du tableau arrayOfArraysUstensils
      const ustensil = `${value}`;
      arrayValueUstensils.push(ustensil); // Je stocke les valeurs dans mon tableau arrayValueUstensils
   }
   const arrayFilterUstensils = arrayValueUstensils.join(",").split(","); // Je supprime les virgules pour que chaque ustensile soit un élément du tableau
   const arrayFilterUstensilsLowerCase = arrayFilterUstensils.map((recipe) => recipe.toLowerCase()); // Je mets tout en minuscules
   const uniqueFilterUstensils = Array.from(new Set(arrayFilterUstensilsLowerCase)); // Je supprime les doublons
   const uniqueFilterUstensilsSort = uniqueFilterUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique
   const valueFilterUstensil = uniqueFilterUstensilsSort.filter((ustensil) => ustensil.includes(wordToFind));

   // Je génère chaque ustensile
   valueFilterUstensil.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}

async function init() {
   // Récupère les datas des recettes
   displayData(recipes);
   displayListIngredient(recipes);
   displayListAppliance(recipes);
   displayListUstensil(recipes);

   // eventCreateTagIngredient();
   // Je créé les boutons tags ingrédients au clic
   // const ingredients = document.querySelectorAll(".wrapper__option");
   // ingredients.forEach((btn) =>
   //    btn.addEventListener("click", function () {
   //       // Je récupère le texte de l'ingrédient
   //       const currentIngredient = this.textContent;

   //       // Je créé le bouton tag
   //       if ("likeClicked" in this.dataset === false) {
   //          this.dataset.likeClicked = "clicked";
   //          this.setAttribute("aria-label", "Tag ajouté");
   //          createTagIngredient(currentIngredient);
   //       } else if ("likeClicked" in this.dataset === true) {
   //          console.log("Déjà cliqué");
   //          this.setAttribute("aria-label", "Tag déjà créé");
   //       }

   //       // Je récupère tous les boutons tag
   //       const buttonsTag = document.querySelectorAll(".btn");

   //       // Je supprime le tag
   //       buttonsTag.forEach((btn) => btn.addEventListener("click", deleteTagIngredient));
   //    })
   // );
}

init();
