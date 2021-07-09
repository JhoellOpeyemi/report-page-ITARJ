const hamburger = document.querySelector(".bars");
const navLinksGroup = document.querySelector(".nav-links-group");

hamburger.addEventListener("click", openNav);

function openNav() {
  navLinksGroup.classList.toggle("active");

  if (hamburger.getAttribute("src") === "./images/bars-solid.svg") {
    hamburger.src = "./images/times-solid.svg";
  } else {
    hamburger.src = "./images/bars-solid.svg";
  }
}
