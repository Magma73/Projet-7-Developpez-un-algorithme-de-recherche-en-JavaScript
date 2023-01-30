// Bouton ingrédients
// Ouverture du wrapper
const buttonWrapperIngredient = document.querySelector(".button__wrapper--ingredient");
// console.log(buttonWrapperIngredient);
buttonWrapperIngredient.addEventListener("click", openDropdownIngredient);

// Fermeture du wrapper
const wrapperHiddenIngredient = document.querySelector(".wrapper__icon--ingredient");

wrapperHiddenIngredient.addEventListener("click", closeDropdownIngredient);

function openDropdownIngredient() {
  const wrapperIngredient = document.querySelector(".wrapper__select--ingredient");
  wrapperIngredient.className += " active";
}
function closeDropdownIngredient() {
  const wrapperIngredient = document.querySelector(".wrapper__select--ingredient");
  wrapperIngredient.className = "wrapper__select--ingredient";
}


// Bouton appareils
// Ouverture du wrapper
const buttonWrapperAppareil = document.querySelector(".button__wrapper--appareil");
buttonWrapperAppareil.addEventListener("click", openDropdownAppareil);

// Fermeture du wrapper
const wrapperHiddenAppareil = document.querySelector(".wrapper__icon--appareil");

wrapperHiddenAppareil.addEventListener("click", closeDropdownAppareil);

function openDropdownAppareil() {
  const wrapperAppareil = document.querySelector(".wrapper__select--appareil");
  wrapperAppareil.className += " active";
}
function closeDropdownAppareil() {
  const wrapperSelectAppareil = document.querySelector(".wrapper__select--appareil");
  wrapperSelectAppareil.className = "wrapper__select--appareil";
}

// Bouton ustensils
// Ouverture du wrapper
const buttonWrapperUstensil = document.querySelector(".button__wrapper--ustensil");
buttonWrapperUstensil.addEventListener("click", openDropdownUstensil);

// Fermeture du wrapper
const wrapperHiddenUstensil = document.querySelector(".wrapper__icon--ustensil");

wrapperHiddenUstensil.addEventListener("click", closeDropdownUstensil);

function openDropdownUstensil() {
  const wrapperUstensil = document.querySelector(".wrapper__select--ustensil");
  wrapperUstensil.className += " active";
}
function closeDropdownUstensil() {
  const wrapperSelectUstensil = document.querySelector(".wrapper__select--ustensil");
  wrapperSelectUstensil.className = "wrapper__select--ustensil";
}
