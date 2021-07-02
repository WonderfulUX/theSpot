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


// //CALENDAR
// fetch("https://world-clock.p.rapidapi.com/jsonp/cet/utc?callback=callback", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a0c10f9e8fmsh43cf769a4c9cf9bp1faa7cjsn20435422cd83",
// 		"x-rapidapi-host": "world-clock.p.rapidapi.com"
// 	}
// })
// .then(response=> {
// 	console.log(response.json());
// })
// // .then(data=>{
// //     console.log(data);
// // })
// .catch(err => {
// 	console.error(err);
// });