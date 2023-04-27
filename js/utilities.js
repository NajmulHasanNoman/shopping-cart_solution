function updateProductNumber(elementId,Isincrease){
    const productNumberField=document.getElementById(elementId);
    const previousProductNumberString=productNumberField.value;
    const previousProductNumber=parseInt(previousProductNumberString);
    let newProductNumber;
    if(Isincrease==true){
        newProductNumber=previousProductNumber+1;
    }
    else{
        newProductNumber=previousProductNumber-1;
    }
    productNumberField.value=newProductNumber;
    return newProductNumber;
}

function getTextElementValueById(elementId){
    const productTotalElement=document.getElementById(elementId);
    const productTotalString = productTotalElement.innerText;
    const productTotal=parseInt(productTotalString);
    return productTotal;
    
}
function calculateTotal(){
    //calculate subtotal
    const phoneTotal=getTextElementValueById('phone-total');
    const caseTotal=getTextElementValueById('case-total');
    const subTotal=phoneTotal+caseTotal;
    document.getElementById('sub-total').innerText=subTotal;

    //calculate taxation
    const tax=parseFloat((subTotal*0.05).toFixed(2));
    const taxAmount=document.getElementById('tax-amount');
    taxAmount.innerText=tax;

    //calculate Total
    const Total=subTotal+tax;
    const TotalAmount=document.getElementById('total');
    TotalAmount.innerText=Total;

}
