function updatePhoneTotal(phoneNumber){
    const phoneTotal=1219*phoneNumber;
    const updatePhoneTotalField=document.getElementById('phone-total');
    updatePhoneTotalField.innerText=phoneTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const phoneNumber= updateProductNumber('phone-field',true);
   updatePhoneTotal(phoneNumber);
  calculateTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phoneNumber=updateProductNumber('phone-field',false);
    
    updatePhoneTotal(phoneNumber);
    calculateTotal();
})