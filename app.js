const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link')
const cta = document.querySelectorAll('.cta');


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

for (let button of cta ){
    console.log(button)
    button.addEventListener('touchstart', ()=>{
        button.classList.add('cta-touch-hover');
     })
}
for (let button of cta ){
    button.addEventListener('touchend', ()=>{
        button.classList.remove('cta-touch-hover');
     })
}




    
   









