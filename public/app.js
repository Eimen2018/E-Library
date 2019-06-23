const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const link = document.querySelectorAll('link');

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle("open");
})