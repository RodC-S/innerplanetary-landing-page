const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
const body = document.querySelector('body');
const topHeader = document.querySelector('.top-header');
const clsBtn = document.querySelector('.close-btn');
const menuItens = document.querySelectorAll('.nav-bar ul li');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    topHeader.classList.toggle('menu-active');
    navBar.focus();
})

clsBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    topHeader.classList.toggle('menu-active');
})

navBar.addEventListener('blur', (e) => {
    if (navBar.getAttribute('class') !== "nav-bar") {
        navBar.classList.toggle('active');
        topHeader.classList.toggle('menu-active');
        console.log(e.currentTarget.getAttribute('class'));
    }
});

for (const itens of menuItens) {
    itens.addEventListener('mousedown', (e) => {
        e.preventDefault();
    })
}