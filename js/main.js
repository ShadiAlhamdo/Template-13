let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
let searchIcon = document.querySelector('#search-icon');
let btnClose = document.querySelector('#close');
searchIcon.onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
};
btnClose.onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');
let header = document.querySelector('header');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  let current = 'home';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 50) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((item) => {
    item.classList.remove('active');
    if (item.href.includes(current)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

//footer copyright
let footer = document.querySelector('.footer .credit');
let date = new Date();
let text = ` ${date.getFullYear()}`;
footer.appendChild(document.createTextNode(text));
///////////////////////////////
var swiper = new Swiper('.home-slider', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 55555000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper('.review-slider', {
  effect: 'cards',
  grabCursor: true,
});
///////////////////////////////////////
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeout() {
  setInterval(loader, 3000);
}
window.onload = fadeout;
