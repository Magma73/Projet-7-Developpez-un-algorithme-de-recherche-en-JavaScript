function recetteCardFactory(datas) {
   const { id, name, ingredients, time, description, appliance, ustensils } = datas;

   //    console.log(ingredients);

   // const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

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
      image.setAttribute("src", "https://source.unsplash.com/random/300x150?recette");
      // image.setAttribute("tabindex", "0");

      // Création card header
      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header d-flex justify-content-between align-items-center bg-secondary border-0";

      // Création card title
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title m-0";
      cardTitle.textContent = name;

      // Création icon clock
      const iconClock = document.createElement("i");
      iconClock.className = "far fa-clock pr-2";

      // Création card text
      const cardText = document.createElement("p");
      cardText.className = "card-text d-flex flex-row-reverse align-items-center";
      cardText.textContent = time + " min";

      // Création card body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body d-flex";
      cardBody.setAttribute("style", "max-height: 186px");

      // Création container card body
      const containerBody = document.createElement("div");
      containerBody.className = "container p-0";

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
      // if (unit !== undefined) {
      //     const unit = ingredient.unit;
      //     const video = document.createElement("video");
      //     video.setAttribute("src", mediaVideo);
      //     video.setAttribute("alt", title);
      //     video.setAttribute("aria-label", title);
      //     video.controls = false;
      //     video.className = "card__media--video";
      //     mediaElement.appendChild(video);
      //  } else if (image !== undefined) {
      //     const img = document.createElement("img");
      //     img.setAttribute("src", mediaPhoto);
      //     img.setAttribute("alt", title);
      //     img.className = "card__media--img";
      //     mediaElement.appendChild(img);
      //  } else {
      //     console.log("Pas d'images ni de vidéos trouvées");
      //  }

      ingredients.forEach((ingredient) => {
         // let ingredient = ingredient.ingredient;
         //  console.log(ingredient.ingredient);
         const elementListBody = document.createElement("li");
         //  elementListBody.textContent = ingredient.ingredient + " : " + ingredient.quantity + " ";
         //  const unit = ingredient.unit;
         //  if (unit === undefined) {
         //     const unity = " ";
         //     console.log(unity);
         //     elementListBody.appendChild(unity);
         //  } else if (unit !== undefined) {
         //     const unity = unit;
         //     // unit ;
         //     console.log(unity);
         //     elementListBody.appendChild(unity);
         //  }

         // Condition pour afficher ou non les quantités et unités
         if (ingredient.quantity == undefined) {
            elementListBody.textContent = ingredient.ingredient;
         } else if (ingredient.unit == undefined) {
            elementListBody.textContent = ingredient.ingredient + ": " + ingredient.quantity;
         } else if (ingredient.unit == "grammes") {
            elementListBody.textContent = ingredient.ingredient + ": " + ingredient.quantity + "g";
         } else {
            elementListBody.textContent = ingredient.ingredient + ": " + ingredient.quantity + ingredient.unit;
         }

         listBody.appendChild(elementListBody);
         console.log(elementListBody);
         //  let quantity = ingredient.quantity;
      });

      // Ajout icon Clock dans cardText
      cardText.appendChild(iconClock);

      // Ajout des éléments dans card header
      cardHeader.appendChild(cardTitle);
      cardHeader.appendChild(cardText);

      // Ajout des éléments dans list body
      //   listBody.appendChild(elementListBody);
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
   return { id, name, ingredients, time, description, appliance, ustensils, getRecetteCardDOM };
}
