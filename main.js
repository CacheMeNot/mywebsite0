const burger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link_');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    burger.classList.add('pulse');
    setTimeout(() => {
        burger.classList.remove('pulse');
    }, 1000);
    menu.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('open');
    })
});

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 65) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
    }
})