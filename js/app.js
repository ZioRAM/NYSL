const header = document.querySelector
('.main-header');

window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})

const navCheck = document.querySelector ('.menu-btn');
const navLinks = document.querySelector ('.nav-links')


// if(navCheck == "checked") {
//     navLinks.style.display = "none"; 
// }
// else {
//     navLinks.style.display = "";
// }