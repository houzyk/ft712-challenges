// Navbar JS
const navbar = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper")
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 4) {
    navbar.classList.add("navbar-white");
    navWrapper.classList.add("top");
  } else {
    navbar.classList.remove("navbar-white");
    navWrapper.classList.remove("top");
  }
});

// Email in NavBar
const form = document.querySelector('form');
const formInput = document.querySelector('.input-element');
const navAccount = document.getElementById('navAccount');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  navAccount.innerText = formInput.value;
});

// Dropdown JS
// const dropdowns = document.querySelectorAll('.dropbtn');
// const dropdown1 = document.querySelector('.dropdown-content-left');
// const dropdown2 = document.querySelectorAll('.dropdown-content-right')[0];
// const dropdown3 = document.querySelectorAll('.dropdown-content-right')[1];

// dropdowns[0].addEventListener("mouseover", () => {
//   dropdown1.style.display= "flex";
// });
// dropdowns[0].addEventListener("mouseleave", () => {
//   dropdown1.addEventListener("mouseover", () => {
//     dropdown1.style.display= "flex";
//   });
//   dropdown1.addEventListener("mouseleave", () => {
//     dropdown1.style.display= "none";
//   });
//   dropdown1.style.display= "none";
// });

// dropdowns[1].addEventListener("mouseover", () => {
//   dropdown2.style.display= "inherit";
// });
// dropdown2.addEventListener("mouseover", () => {
//     dropdown2.style.display= "inherit";
//   });
// dropdown2.addEventListener("mouseleave", () => {
//     dropdown2.style.display= "none";
//   });

// setTimeout(() => {
//   dropdowns[1].addEventListener("mouseleave", () => {
//     dropdown2.style.display= "none";
//   });
// }, 500);

// dropdowns[2].addEventListener("mouseover", () => {
//   dropdown3.style.display= "inherit";
// });
// dropdowns[2].addEventListener("mouseleave", () => {
//   dropdown3.style.display= "none";
//   dropdown3.addEventListener("mouseover", () => {
//     dropdown3.style.display= "inherit";
//   });
//   dropdown3.addEventListener("mouseleave", () => {
//     dropdown3.style.display= "none";
//   });
// });
