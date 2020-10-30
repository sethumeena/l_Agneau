const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link')

evtsArray = ['click','touchstart','touchend']

evtsArray.forEach( evt => {
    console.log(evt)
    if(evt == 'click'){ 
        hamburgerMenu.addEventListener('click', ()=>{
            navList.classList.toggle('show-nav-list')
            hamburgerMenu.classList.toggle('rotate');
        })   
    }
    if(evt == 'touchstart'){
        hamburgerMenu.addEventListener('touchstart', ()=>{
            hamburgerMenu.classList.add('touch-hover');
           
        })
    }
    if(evt == 'touchend'){
        hamburgerMenu.addEventListener('touchend', ()=>{
                hamburgerMenu.classList.remove('touch-hover');  
            })
    }
} 
);
navLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        navList.classList.toggle('show-nav-list')
        hamburgerMenu.classList.toggle('rotate');
    })
    })
const cta = document.querySelector('.cta');

cta.addEventListener('touchstart', ()=>{
   cta.classList.add('cta-touch-hover');
})
cta.addEventListener('touchend', ()=>{
    cta.classList.remove('cta-touch-hover');
})


    
   









