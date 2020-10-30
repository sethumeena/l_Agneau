const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link')
hamburgerMenu.addEventListener('click', ()=>{
    navList.classList.toggle('show-nav-list')
    hamburgerMenu.classList.toggle('rotate');
})
navLink.forEach((link)=>{
link.addEventListener('click',()=>{
    navList.classList.toggle('show-nav-list')
    hamburgerMenu.classList.toggle('rotate');
})
})



    
   









