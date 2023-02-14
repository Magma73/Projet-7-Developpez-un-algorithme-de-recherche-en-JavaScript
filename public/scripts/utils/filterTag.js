function filterRecipesTags() {
   // Je récupère la valeur saisie dans la recherche simple
   // const storedInputValueSearch = localStorage.getItem("valueSearch");
   // const valueSearchStored = JSON.parse(storedInputValueSearch);
   // console.log(valueSearch);
   // console.log(valueSearch.length);
   // console.log("valueSearch.length !== 0");
   // console.log(valueSearch.length !== 0);
   // console.log("valueSearch === false");
   // console.log(valueSearch === false);
   // console.log("valueSearch === true");
   // console.log(valueSearch === true);
   // console.log("valueSearch !== true");
   // console.log(valueSearch !== true);
   // console.log("valueSearch !== false");
   // console.log(valueSearch !== false);
   // console.log("valueSearch === ''");
   // console.log(valueSearch === "");
   // console.log("valueSearch === null");
   // console.log(valueSearch == null);
   // console.log("valueSearch !== null");
   // console.log(valueSearch !== null);
   // console.log("valueSearch == undefined");
   // console.log(valueSearch == undefined);
   // console.log("valueSearch === undefined");
   // console.log(valueSearch === undefined);
   // console.log("valueSearch !== undefined");
   // console.log(valueSearch !== undefined);
   // console.log(typeof valueSearch);
   // console.log(valueSearch ?? false);
   // console.log(valueSearch === false);
   // console.log(searchValueIngredient);
   // console.log(searchValueIngredient === false);
   // console.log(valueSearch === true);
   // console.log(searchValueIngredient);
   // console.log(searchValueIngredient === "");
   // Je récupère le tableau storé des recettes filtrées par la recherche avancée
   // const storedArrayAdvancedFilterRecipes = localStorage.getItem("arrayAdvancedFilterRecipes");
   // const arrayAdvancedFilterRecipesStored = JSON.parse(storedArrayAdvancedFilterRecipes);

   // const valueSearch = valueSearchStored;
   // const valueSearchLength = valueSearchStored.length;

   // if(valueSearchStored == null){valueSearchLength === 0}else{valueSearchLength === valueSearchStored.length;}
   // // Si la recherche simple utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche simple + recherche avancée
   // if (valueSearchLength !== 0 && (searchValueIngredient.length !== 0 || searchValueAppareil.length !== 0 || searchValueUstensil.length !== 0)) {
   //    arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple pas utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche avancée
   // } else if (valueSearchLength === 0 && (searchValueIngredient.length !== 0 || searchValueAppareil.length !== 0 || searchValueUstensil.length !== 0)) {
   //    arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple utilisée, alors j'utilise le tableau arrayFilterRecipes : recherche simple utilisée
   // } else if (valueSearchLength !== 0) {
   //    arrayAdvancedFilterRecipes = arrayFilterRecipes.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple pas utilisée, alors j'utilise le tableau recipes : recherche simple pas utilisée
   // } else if (valueSearchLength === 0) {
   //    arrayAdvancedFilterRecipes = recipes.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   // }

   // // Si la recherche simple utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche simple + recherche avancée
   // if (valueSearch.trim().length !== 0 && (searchValueIngredient.trim().length !== 0 || searchValueAppareil.trim().length !== 0  || searchValueUstensil.trim().length !== 0 )) {
   //    arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple pas utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche avancée
   // } else if (valueSearch.trim().length === 0  && (searchValueIngredient.trim().length !== 0 || searchValueAppareil.trim().length !== 0 || searchValueUstensil.trim().length !== 0)) {
   //    arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple utilisée, alors j'utilise le tableau arrayFilterRecipes : recherche simple utilisée
   // } else if (valueSearch.trim().length !== 0) {
   //    arrayAdvancedFilterRecipes = arrayFilterRecipes.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple pas utilisée, alors j'utilise le tableau recipes : recherche simple pas utilisée
   // } else if (valueSearch.trim().length === 0) {
   //    arrayAdvancedFilterRecipes = recipes.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   // }

   // // Si la recherche simple utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche simple + recherche avancée
   // if (valueSearch !=="" && (searchValueIngredient !=="" || searchValueAppareil !==""  || searchValueUstensil !=="" )) {
   //    arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple pas utilisée et qu'au moins un des champs de la recherche avancée utilisé, alors j'utilise le tableau storé : recherche avancée
   // } else if (valueSearch === ""  && (searchValueIngredient !=="" || searchValueAppareil !=="" || searchValueUstensil !=="")) {
   //    arrayAdvancedFilterRecipes = arrayAdvancedFilterRecipesStored.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple utilisée, alors j'utilise le tableau arrayFilterRecipes : recherche simple utilisée
   // } else if (valueSearch !== "") {
   //    arrayAdvancedFilterRecipes = arrayFilterRecipes.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   //    // Si la recherche simple pas utilisée, alors j'utilise le tableau recipes : recherche simple pas utilisée
   // } else if (valueSearch === "") {
   //    arrayAdvancedFilterRecipes = recipes.filter((recipe) => {
   //       return (
   //          selectedTagsIngredients.every((selectedTag) => {
   //             return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTag));
   //          }) &&
   //          selectedTagsAppliance.every((selectedTag) => {
   //             return recipe.appliance.toLowerCase().includes(selectedTag);
   //          }) &&
   //          selectedTagsUstensil.every((selectedTag) => {
   //             return recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTag));
   //          })
   //       );
   //    });
   // }

   const storedArrayAdvancedFilterRecipes = localStorage.getItem("arrayAdvancedFilterRecipes");
   const arrayAdvancedFilterRecipesStored = JSON.parse(storedArrayAdvancedFilterRecipes);

   const valueSearchStored = localStorage.getItem("valueSearch");
   const valueSearch = valueSearchStored || "";
   let valueSearchLength = valueSearch.length;

   // Correction: should use assignment operator instead of comparison operator
   if (valueSearchStored == null) {
      valueSearchLength = 0;
   } else {
      valueSearchLength = valueSearchStored.length;
   }

   //    const valueSearchStored = localStorage.getItem("valueSearch");
   // const valueSearch = valueSearchStored || "";
   // const valueSearchLength = valueSearch.length;

   let arrayAdvancedFilterRecipes = [];

   console.log(valueSearchStored);
   console.log(valueSearch);
   console.log(valueSearchLength);
   

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
