const searchForm = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-addon");

searchBtn.addEventListener("click", filterSearch);

function filterSearch(){
    nbCaracteres = searchBtn.length;
    console.log(nbCaracteres);
}