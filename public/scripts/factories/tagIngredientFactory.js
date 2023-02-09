function tagIngredientFactory(datas) {
    const currentIngredient = datas;

    // FACTORY DU TAG INGREDIENT
    function getTagIngredientDOM() {
       // Création du bouton tag
       const buttonTagIngredient = document.createElement("button");
       buttonTagIngredient.className = "btn btn-ingredient text-white pl-3 pr-4 mr-sm-5 mb-3 fs-7 d-flex justify-content-between align-items-center";
       buttonTagIngredient.textContent = currentIngredient;
       buttonTagIngredient.setAttribute("type", "button");
       buttonTagIngredient.setAttribute("style", "text-transform : capitalize");
       buttonTagIngredient.setAttribute("id", currentIngredient);

       // Création span contenant icon close
       const spanIconClose = document.createElement("span");
       spanIconClose.className = "icon-close pl-3 d-flex align-items-center";

       // Création de icon close
       const iconClose = document.createElement("i");
       iconClose.className = "far fa-times-circle";
       iconClose.setAttribute("style", "font-size:20px");

       // J'intègre les éléments dans le bouton tag
       spanIconClose.appendChild(iconClose);
       buttonTagIngredient.appendChild(spanIconClose);

       return buttonTagIngredient;
    }

    return { currentIngredient, getTagIngredientDOM };
 }