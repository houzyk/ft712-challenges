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
  if (formInput.value !== "") {
    navAccount.innerText = formInput.value;
  }
});

// Dropdown JS
const dropdowns = document.querySelectorAll('.dropdown');
const dropdown1 = document.querySelector('.dropdown-content-left');
const dropdown2 = document.querySelectorAll('.dropdown-content-right')[0];
const dropdown3 = document.querySelectorAll('.dropdown-content-right')[1];

dropdowns[0].addEventListener("mouseover", () => {
  dropdown1.style.display= "flex";
});
dropdown1.addEventListener("mouseover", () => {
    dropdown1.style.display= "flex";
});
dropdowns[0].addEventListener("mouseleave", () => {
  dropdown1.style.display= "none";
});
dropdown1.addEventListener("mouseleave", () => {
    dropdown1.style.display= "none";
});

dropdowns[1].addEventListener("mouseover", () => {
  dropdown2.style.display= "inherit";
});
dropdown2.addEventListener("mouseover", () => {
    dropdown2.style.display= "inherit";
});
dropdowns[1].addEventListener("mouseleave", () => {
    dropdown2.style.display= "none";
});
dropdown2.addEventListener("mouseleave", () => {
    dropdown2.style.display= "none";
});

dropdowns[2].addEventListener("mouseover", () => {
  dropdown3.style.display= "inherit";
});
dropdown3.addEventListener("mouseover", () => {
  dropdown3.style.display= "inherit";
  });
dropdowns[2].addEventListener("mouseleave", () => {
  dropdown3.style.display= "none";
});
dropdown3.addEventListener("mouseleave", () => {
  dropdown3.style.display= "none";
});

// Seasons Photo JS
const seasonImages = document.querySelector('.dropdown-images');
const seasons = document.querySelectorAll('.seasons');
const summer = seasons[0];
const winter = seasons[1];
const spring = seasons[2];
const fall = seasons[3];

summer.addEventListener("mouseover", () => {
  seasonImages.innerHTML = `<a href="#"> <img src="https://filmdaily.co/wp-content/uploads/2021/06/summer.jpg" alt="summer"/> </a>`;
});
winter.addEventListener("mouseover", () => {
  seasonImages.innerHTML = `<a href="#"> <img src="https://www.almanac.com/sites/default/files/image_nodes/winter_sunrise-2.jpg" alt="winter"/> </a>`;
});
fall.addEventListener("mouseover", () => {
  seasonImages.innerHTML = `<a href="#"> <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00031467_hrit6x.jpg" alt="fall"/> </a>`;
});
spring.addEventListener("mouseover", () => {
  seasonImages.innerHTML = `<a href="#"> <img src="https://images.unsplash.com/photo-1602094891528-97ea074d30b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="spring"/> </a>`;
});
