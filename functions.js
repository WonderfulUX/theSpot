const menu = document.getElementById('NavTextLinksContainer');
const button = document.getElementById('MobileMenuButton');
const menuLines = document.querySelectorAll('.menuLine');
let menuDisplayed = false;

button.addEventListener('click', ()=>{
    menu.classList.toggle('displayed');
    //toggleMenu();
})

// function toggleMenu(){
//     if(menuLines[0].style.margin!="0px"){
//         console.log('IF');
//         menuLines[0].style.margin="0";
//         menuLines[1].style.margin="0";
//         menuLines[1].style.opacity="0";
//         menuLines[2].style.margin="0";
//         menuLines[0].style.transform="translateY(50%) rotate(45deg)";
//         menuLines[2].style.transform="translateY(-50%) rotate(-45deg)";
//     }
//     else{
//         console.log('ELSE');
//         menuLines[0].style.margin="3px 0px";
//         menuLines[0].style.margin="3px 0px";
//         menuLines[1].style.opacity="1";
//         menuLines[2].style.margin="3px 0px";
//         menuLines[0].style.transform="translateY(-50%) rotate(0deg)";
//         menuLines[2].style.transform="translateY(50%) rotate(0deg)";
//     }
// }