// =============== BOTON BUSCAR - MOBILE ============

const btn_search = document.querySelector(".nav__search-button");
const input_search = document.querySelector(".nav__search-content");
const btn_login = document.querySelector(".nav__button");

btn_search.addEventListener("click", () => {
  btn_login.style.display = "none";
  btn_search.style.display = "none";
  input_search.style.display = "block";
});
