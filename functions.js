const menu = document.getElementById('NavTextLinksContainer');
const button = document.getElementById('MobileMenuButton');

button.addEventListener('click', ()=>{
  if(menu.classList.contains('displayed')){
      menu.classList.remove('displayed');
      console.log("IF");
  }
  else{
    menu.classList.add('displayed');
    console.log("ELSE");
  }
})

