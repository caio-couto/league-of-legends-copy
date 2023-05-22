const searchButton = document.querySelector(".header__button.header__button--search");
const closeButton = document.querySelector(".header__button.header__button--close")
const searchInput = document.querySelector(".header__search input");


searchButton.addEventListener("click", () =>
{
  searchInput.classList.add("header__input--open");
  closeButton.classList.remove("header__button--hidden");
});

closeButton.addEventListener("click", () =>
{
  searchInput.classList.remove('header__input--open');
  closeButton.classList.add("header__button--hidden");
});
