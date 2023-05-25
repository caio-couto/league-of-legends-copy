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

const riotButton = document.querySelectorAll(".header__button.header__button--riot");
const riotBar = document.querySelector(".riotbar");
const riotCloseButton = document.querySelector(".riotbar__menu .header__button.header__button--close");
const animation = document.querySelector(".riotbar__animation");

riotButton.forEach((button) =>
{
  button.addEventListener("click", () =>
  {
    riotBar.classList.toggle("riotbar--hidden");
    setTimeout(() =>
    {
      riotBar.classList.toggle("riotbar--anime");
    }, 50);
  });
});

riotCloseButton.addEventListener("click", () =>
{
  riotBar.classList.add("riotbar--hidden");
  riotBar.classList.remove("riotbar--anime");
});

const menuHeader = document.querySelector(".header__menu--center");
const header__box = document.querySelector(".header__box");
const menuChildrens = Array.from(header__box.children);
menuChildrens.forEach((elemnt) =>
{
  elemnt.dataset.width = elemnt.clientWidth;
});

header__box.addEventListener("resize", (event) =>
{
  console.log("resize");
});

const menu = new ResizeObserver(() =>
{
  const currentMenuChilndrens = Array.from(document.querySelector(".header__box").children);
  const childrensTotalWidth = currentMenuChilndrens.reduce((accum, curr, index) => 
  {
    if (menuHeader.clientWidth - accum - menuHeader.children[menuHeader.children.length - 1].clientWidth < curr.clientWidth)
    {
      if(index == 0)
      {
        return;
      }
      header__box.removeChild(curr);
    }
    return accum + curr.clientWidth;
  }, 0); 
  const widthGap = menuHeader.clientWidth - childrensTotalWidth - menuHeader.children[menuHeader.children.length - 1].clientWidth;

  if (menuChildrens.length > currentMenuChilndrens.length && widthGap > menuChildrens[currentMenuChilndrens.length].dataset.width)
  {
    header__box.appendChild(menuChildrens[currentMenuChilndrens.length]);
  }
}).observe(menuHeader);
