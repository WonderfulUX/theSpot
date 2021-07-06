
const mobileMenuBlock = document.getElementById('NavTextLinksContainer'),
      mobileMenuButton = document.getElementById('MobileMenuButton'),
      menuLines = document.querySelectorAll('.menuLine'),
      closeModaleButtons = document.querySelectorAll('.close'),
      contactNavButton = document.querySelectorAll('.contact'),
      modaleContact = document.getElementById('InfoContactModale'),
      minus = document.getElementById('MinusButton'),
      plus = document.getElementById('PlusButton'),
      productList = document.querySelectorAll('.productContainer'),
      modaleQuantity = document.getElementById('ModaleQuantity'),
      modaleBox = document.getElementById('closeMenu'),
      validateButton = document.getElementById('ValidateQuantity');


let temporaryValue,
    temporaryElement,
    quantityValue = document.querySelector('.quantityValue') ;

//MOBILE MENU
mobileMenuButton.addEventListener('click', ()=>{
    mobileMenuBlock.classList.toggle('displayed');
})
//---------------------------------------
function showContact(){
    modaleContact.classList.add("modaleDisplay");
    setTimeout(()=>{
        modaleContact.querySelector(".modaleBox").classList.add("slide");
    },100)
}

function closeModale(){
    this.parentElement.parentElement.classList.remove("modaleDisplay");
    setTimeout(()=>{
        this.parentElement.classList.remove("slide");
        if(this.parentElement.classList.contains('modaleBox')){
            quantityValue.innerText='1';
        }
    },300);
}


// MODALE CONTACT
for(let i=0; i<contactNavButton.length; i++){
    contactNavButton[i].addEventListener('click',showContact);
}
for(let i=0; i<closeModaleButtons.length; i++){
    closeModaleButtons[i].addEventListener('click',closeModale);
}



// MODALE QUANTITY
minus.addEventListener('click',()=>{
    if(quantityValue.innerText!=0){
        quantityValue.innerText = +quantityValue.innerText-1;
        temporaryValue = +quantityValue.innerTex;
    }
})
plus.addEventListener('click',()=>{
    quantityValue.innerText = +quantityValue.innerText+1;
    temporaryValue = +quantityValue.innerText;
})


for (product of productList){
        product.addEventListener('click',()=>{
            modaleQuantity.classList.add('modaleDisplay');
        });
    }


// for (product of productList){
//     product.addEventListener('click',changeQuantity);
// }


// function changeQuantity(e){
//     console.log(e.target);
//     elementSelection(e.target);
//     updateQuantity();
// }

// function elementSelection(){
//     console.log('selection');
//     console.log(this);
//     temporaryElement = product;
//     quantityValue = product.querySelector('.quantityIndicator').innerText;
//     console.log(temporaryElement);
//     console.log(quantityValue);
// }

// function updateQuantity(){
//     console.log('update');
//     modaleQuantity.classList.add('modaleDisplay');
//     validateButton.addEventListener('click',(element)=>{
//         console.log('click');
//         element.innerText = temporaryValue;
//         console.log(element);
//     });
// }

