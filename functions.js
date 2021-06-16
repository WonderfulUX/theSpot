const menu = document.getElementById('NavTextLinksContainer');
const button = document.getElementById('MobileMenuButton');
const menuLines = document.querySelectorAll('.menuLine')

button.addEventListener('click', ()=>{
  if(menu.classList.contains('displayed')){
      menu.classList.remove('displayed');
  }
  else{
    menu.classList.add('displayed');
  }
})

