const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
const topHeader = document.querySelector('.top-header');
const clsBtn = document.querySelector('.close-btn')

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    topHeader.classList.toggle('menu-active');
})

clsBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    topHeader.classList.toggle('menu-active');
})