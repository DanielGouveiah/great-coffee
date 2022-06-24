const mobileBtn = document.querySelector(".menu-mobile-btn");
const mobileMenu = document.querySelector(".menu-mobile");
const mobileMenuArray = Array.from(mobileMenu.children);
const html = document.documentElement;

function handleClick() {
  mobileMenu.classList.add("ativo");
  setTimeout(() => {
    html.addEventListener("click", outSideClick);
  }, 500);
}

function outSideClick(e) {
  console.log(e.target);
  if (!(mobileMenuArray.includes(e.target) || mobileMenu === e.target)) {
    mobileMenu.classList.remove("ativo");
    html.removeEventListener("click", outSideClick);
  }
  console.log();
}

mobileBtn.addEventListener("click", handleClick);
