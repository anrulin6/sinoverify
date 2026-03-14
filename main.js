const menuToggle = document.getElementById("mobile-menu");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){

navLinks.classList.toggle("active");

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});