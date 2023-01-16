function buttonApplianceFactory(datas) {
   const { appliance } = datas;

   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayAppareils = recipes.map((recipe) => recipe.appliance).flat(); // Je concatène les objets
   const arrayAppareilsLowerCase = arrayAppareils.map((recipe) => recipe.toLowerCase()); // Je mets tout en minuscules
   const uniqueAppareils = Array.from(new Set(arrayAppareilsLowerCase)); // Je supprime les doublons
   const uniqueAppareilsSort = uniqueAppareils.sort(); // Je trie par ordre alphabétique

   const wrapperListAppareil = document.querySelector(".wrapper__list--appareil");

   // FACTORY DE LA LISTE DES APPAREILS

   function getAppareilWrapperDOM() {
      // Création des éléments wrapper option appareils (li)
      uniqueAppareils.forEach((appareil) => {
         const wrapperOption = document.createElement("li");
         wrapperOption.className = "wrapper__option wrapper__option";
         wrapperOption.textContent = appareil;
         wrapperOption.setAttribute("id", "ma");
         wrapperListAppareil.appendChild(wrapperOption);
      });

      return wrapperListAppareil;
   }

   return { appliance, getAppareilWrapperDOM } ;
}
