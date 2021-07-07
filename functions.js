
const mobileMenuBlock = document.getElementById('NavTextLinksContainer'),
      mobileMenuButton = document.getElementById('MobileMenuButton'),
      closeModaleButtons = document.querySelectorAll('.close'),
      contactNavButton = document.querySelectorAll('.contact'),
      modaleContact = document.getElementById('InfoContactModale'),
      minus = document.getElementById('MinusButton'),
      plus = document.getElementById('PlusButton'),
      productList = document.querySelectorAll('.productContainer'),
      modaleQuantity = document.getElementById('ModaleQuantity'),
      validateButton = document.getElementById('ValidateQuantity');


let quantityValue = document.querySelector('.quantityValue'),
    selectedProduct;

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
    }
})
plus.addEventListener('click',()=>{
    quantityValue.innerText = +quantityValue.innerText+1;
})



for (product of productList){
    product.addEventListener('click',setQuantityValue);
}

validateButton.addEventListener('click', updateQuantityIndicator);



function setQuantityValue(){
    modaleQuantity.classList.add('modaleDisplay');
    selectedProduct= this;
    if(!selectedProduct.querySelector('.quantityIndicator')){
        quantityValue.innerText='1';
        console.log("New assignment");
    }
    else{
        console.log("Update");
        quantityValue.innerText=selectedProduct.querySelector('.quantityIndicator').innerText;
    }
}

function updateQuantityIndicator(e){
    e.stopImmediatePropagation();
    let newValue;
    if(selectedProduct.querySelector('.quantityIndicator')){
        selectedProduct.querySelector('.quantityIndicator').innerText=quantityValue.innerText;
    }
    else{
        newValue = document.createElement('div');
        newValue.classList.add('quantityIndicator');
        newValue.innerText = quantityValue.innerText;
        selectedProduct.appendChild(newValue );
    }
    selectedProduct.classList.add('selectedProduct');
    if(quantityValue.innerText=='0'){
        selectedProduct.querySelector('.quantityIndicator').remove();
        selectedProduct.classList.remove('selectedProduct');
    }
    modaleQuantity.classList.remove('modaleDisplay');
}