function buttonUstensilFactory(datas) {
   const { ustensils } = datas;

   // Je modifie le tableau d'objets ustensils afin de supprimer les doublons
   const arrayOfArraysUstensils = recipes.map((recipe) => recipe.ustensils); // Je crée un nouveau tableau avec les ustensils : Array(50) [ (3) […], (1) […], (1) […], (2) […], (3) […], (3) […], (2) […], (2) […], (2) […], (3) […], … ]

   let arrayValueUstensils = []; // J'initialise mon tableau
   for (const [key, value] of Object.entries(arrayOfArraysUstensils)) { // Je récupère les valeurs du tableau arrayOfArraysUstensils
      const ustensil = `${value}`;
      arrayValueUstensils.push(ustensil); // Je stocke les valeurs dans mon tableau arrayValueUstensils : Array(50) [ "cuillère à Soupe,verres,presse citron", "presse citron", "couteau", "saladier,passoire", "moule à tarte,râpe à fromage,couteau", "moule à tarte,saladier,fourchette", "moule à tartelettes (6),casserole", "moule à gateaux,casserole", "cuillère en bois,couteau", "plat à gratin,couteau,Économe", … ]
   }
   const arrayUstensils = arrayValueUstensils.join(",").split(","); // Je supprime les virgules pour que chaque ustensile soit un élément du tableau : Array(122) [ "cuillère à Soupe", "verres", "presse citron", "presse citron", "couteau", "saladier", "passoire", "moule à tarte", "râpe à fromage", "couteau", … ]
   const arrayUstensilsLowerCase = arrayUstensils.map((recipe) => recipe.toLowerCase()); // Je mets tout en minuscules
   const uniqueUstensils = Array.from(new Set(arrayUstensilsLowerCase)); // Je supprime les doublons : Array(25) [ "cuillère à soupe", "verres", "presse citron", "couteau", "saladier", "passoire", "moule à tarte", "râpe à fromage", "fourchette", "moule à tartelettes (6)", … ]
   const uniqueUstensilsSort = uniqueUstensils.sort(); // Je trie par ordre alphabétique

   const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");

   // FACTORY DE LA LISTE DES USTENSILES

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   function getUstensilWrapperDOM() {
      // Création des éléments wrapper option ustensils (li)
      uniqueUstensilsSort.forEach((ustensil) => {
         const wrapperOption = document.createElement("li");
         wrapperOption.className = "wrapper__option";
         currentOption++;
         wrapperOption.textContent = ustensil;
         wrapperOption.setAttribute("id", "mu" + currentOption);
         wrapperListUstensil.appendChild(wrapperOption);
      });

      return wrapperListUstensil;
   }

   return { ustensils, getUstensilWrapperDOM };
}