const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav");
const links = document.querySelectorAll(".nav li");
hamburger.addEventListener('click', ()=>{
//Animate Links
navLinks.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
});
//Hamburger Animation
hamburger.classList.toggle("toggle");
});


//Section-A Animation with GSAP
gsap.from('.anime1', {opacity: 0, duration: 1.5, y: -50, stagger: 0.6});
gsap.from('.img1', {duration: 2, delay: 1.1, x: 800, opacity: 0});


//Section-B Animation with GSAP
let tl= gsap.timeline({
    scrollTrigger: {
        trigger: '.section-b',
        start: 'center bottom',
    }
});

tl.from('.anime2', { x: -700, opacity: 0, duration: 1 })
tl.from('.anime3', { x: 700, opacity: 0, duration: 1.5 }, "-=1")