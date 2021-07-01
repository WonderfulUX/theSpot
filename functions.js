const mobileMenu = document.getElementById('NavTextLinksContainer');
const button = document.getElementById('MobileMenuButton');
const menuLines = document.querySelectorAll('.menuLine');
let menuDisplayed = false;
const closeModaleButtons = document.querySelectorAll('.closeArea');
const contactNavButton = document.querySelectorAll('.contact');
const modaleContact = document.getElementById('InfoContactModale');

button.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('displayed');
})


for(i=0; i<contactNavButton.length; i++){
    contactNavButton[i].addEventListener('click',displayMenu);
}
for(i=0; i<closeModaleButtons.length; i++){
    closeModaleButtons[i].addEventListener('click',closeModale);
}




function displayMenu(){
    modaleContact.classList.add("modaleDisplay");
    setTimeout(()=>{
        modaleContact.querySelector(".modaleBox").classList.add("slide");
    },100)
}

function closeModale(e){
    e.target.parentElement.parentElement.classList.remove("modaleDisplay");
    setTimeout(()=>{
        e.target.parentElement.classList.remove("slide");
    },300)
}