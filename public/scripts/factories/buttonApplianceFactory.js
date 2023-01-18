function buttonApplianceFactory(datas) {
   const { appliance } = datas;

   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysAppliances = recipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules : Array(50) [ "Blender", "Saladier", "Cocotte", "Cuiseur de riz", "Four", "Four", "Four", "Four", "Saladier", "Four", … ]
   const uniqueAppliances = Array.from(new Set(arrayOfArraysAppliances)); // Je supprime les doublons : Array(11) [ "blender", "saladier", "cocotte", "cuiseur de riz", "four", "casserole", "poêle à crêpe", "sauteuse", "mixer", "poêle", … ]
   const uniqueAppliancesSort = uniqueAppliances.sort((a, b) => a.localeCompare(b, 'fr')); // Je trie par ordre alphabétique

   const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");

   // FACTORY DE LA LISTE DES APPAREILS

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   function getAppareilWrapperDOM() {
      // Création des éléments wrapper option appareils (li)
      uniqueAppliancesSort.forEach((appliance) => {
         const wrapperOption = document.createElement("li");
         wrapperOption.className = "wrapper__option";
         currentOption++;
         wrapperOption.textContent = appliance;
         wrapperOption.setAttribute("id", "ma" + currentOption);
         wrapperListAppareil.appendChild(wrapperOption);
      });

      return wrapperListAppareil;
   }

   return { appliance, getAppareilWrapperDOM };
}
