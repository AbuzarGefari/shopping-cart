function updateProductNumber(product,price,isIncrease) {
     const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;

    if (isIncrease == true) {
    productNumber = parseInt(productNumber) + 1  

    }
    else if(productNumber > 0) {
productNumber = parseInt(productNumber) - 1

    }
    productInput.value = productNumber;

  //updating Balance
    const productTotal = document.getElementById(product +'-total')
    productTotal.innerText = productNumber * price
    
    // calculation Total
    calculationTotal();
}
function getInputValue(product) {
     const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber
}


// calculate total 
function calculationTotal() {
   
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59

    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax 

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText =totalPrice ;
    

    
}


// phone number increase and decrease 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone',1219,true)
    
})
document.getElementById('phone-minus').addEventListener('click', function () {
     updateProductNumber('phone',1219,false)

})





// case Number increase and decrease

document.getElementById('case-plus').addEventListener('click', function () {
  
    updateProductNumber('case',59, true);
  

})
document.getElementById('case-minus').addEventListener('click', function () {
   
updateProductNumber('case',59, false);
  

    
    


})

