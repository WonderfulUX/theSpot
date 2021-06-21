const menu = document.getElementById('NavTextLinksContainer');
const button = document.getElementById('MobileMenuButton');
const menuLines = document.querySelectorAll('.menuLine');
let menuDisplayed = false;

button.addEventListener('click', ()=>{
    menu.classList.toggle('displayed');
})
