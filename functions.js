const mobileMenuBlock = document.getElementById('NavTextLinksContainer');
const mobileMenuButton = document.getElementById('MobileMenuButton');
const menuLines = document.querySelectorAll('.menuLine');
const closeModaleButtons = document.querySelectorAll('.closeArea');
const contactNavButton = document.querySelectorAll('.contact');
const modaleContact = document.getElementById('InfoContactModale');
const minus = document.getElementById('MinusButton');
const plus = document.getElementById('PlusButton');
const quantity = document.querySelector('.quantityValue');


//MOBILE MENU
mobileMenuButton.addEventListener('click', ()=>{
    mobileMenuBlock.classList.toggle('displayed');
})
//---------------------------------------
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


// MODALE CONTACT
for(i=0; i<contactNavButton.length; i++){
    contactNavButton[i].addEventListener('click',displayMenu);
}
for(i=0; i<closeModaleButtons.length; i++){
    closeModaleButtons[i].addEventListener('click',closeModale);
}



// MODALE QUANTITY
minus.addEventListener('click',()=>{
    if(quantity.innerText!=0){
        quantity.innerText = +quantity.innerText-1;
    }
})
plus.addEventListener('click',()=>{
    quantity.innerText = +quantity.innerText+1;
})