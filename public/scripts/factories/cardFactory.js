function recetteCardFactory(datas) {
   const { id, name, photo, ingredients, time, description, appliance, ustensils } = datas;

   const picture = `./assets/img/${photo}`;

   // FACTORY DES CARTES RECETTES

   function getRecetteCardDOM() {
      // Création col
      const col = document.createElement("div");
      col.className = "col mb-4";

      // Création article/carte recette
      const article = document.createElement("article");
      article.className = "card h-100 bg-secondary";

      // Création img
      const image = document.createElement("img");
      image.className = "card-img-top";
      image.setAttribute("src", picture);
      image.setAttribute("alt", name);
      image.setAttribute("style", "height: 250px;object-fit: cover;");

      // Création card header
      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header d-flex justify-content-between align-items-center bg-secondary border-0";

      // Création card title
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title m-0 w-75";
      cardTitle.textContent = name;

      // Création icon clock
      const iconClock = document.createElement("i");
      iconClock.className = "far fa-clock pr-2";

      // Création card text
      const cardText = document.createElement("p");
      cardText.className = "card-text d-flex flex-row-reverse align-items-center w-25";
      cardText.textContent = time + " min";

      // Création card body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body d-flex";
      cardBody.setAttribute("style", "max-height: 186px");

      // Création container card body
      const containerBody = document.createElement("div");
      containerBody.className = "container p-0";
      containerBody.setAttribute("style", "overflow: hidden;text-overflow: ellipsis;");

      // Création row card body
      const rowBody = document.createElement("div");
      rowBody.className = "row";

      // Création col card body
      const colBody = document.createElement("div");
      colBody.className = "col";

      // Création list card body
      const listBody = document.createElement("ul");
      listBody.className = "list-unstyled";
      listBody.setAttribute("style", "font-size: 12px");

      // Création element list card body
      const elementListBody = document.createElement("li");
      elementListBody.textContent = "hello";

      // Création col2 card body
      const colBody2 = document.createElement("div");
      colBody2.className = "col";

      // Création description card body
      const descriptionBody = document.createElement("p");
      descriptionBody.className = "card-text";
      descriptionBody.textContent = description;
      descriptionBody.setAttribute("style", "font-size: 12px");

      // Création des unités
      ingredients.forEach((ingredient) => {
         const elementListBody = document.createElement("li");

         // Condition pour afficher ou non les quantités et unités
         if (ingredient.quantity == undefined) {
            elementListBody.textContent = ingredient.ingredient;
         } else if (ingredient.unit == undefined) {
            elementListBody.textContent = ingredient.ingredient + ": " + ingredient.quantity;
         } else if (ingredient.unit == "grammes") {
            elementListBody.textContent = ingredient.ingredient + ": " + ingredient.quantity + " g";
         } else {
            elementListBody.textContent = ingredient.ingredient + ": " + ingredient.quantity + " " + ingredient.unit;
         }

         listBody.appendChild(elementListBody);
      });

      // Ajout icon Clock dans cardText
      cardText.appendChild(iconClock);

      // Ajout des éléments dans card header
      cardHeader.appendChild(cardTitle);
      cardHeader.appendChild(cardText);

      // Ajout des éléments dans list body
      colBody.appendChild(listBody);

      // Ajout des éléments dans description body
      colBody2.appendChild(descriptionBody);

      // Ajout des éléments dans row body
      rowBody.appendChild(colBody);
      rowBody.appendChild(colBody2);

      // Ajout des éléments dans container body
      containerBody.appendChild(rowBody);

      // Ajout des éléments dans card body
      cardBody.appendChild(containerBody);

      // Ajout des éléments dans article
      article.appendChild(image);
      article.appendChild(cardHeader);
      article.appendChild(cardBody);

      // Ajout les articles dans col
      col.appendChild(article);

      return col;
   }
   // return { name,  id, city, country, tagline, price, picture, getUserCardDOM }
   return { id, name, photo, ingredients, time, description, appliance, ustensils, getRecetteCardDOM };
}
