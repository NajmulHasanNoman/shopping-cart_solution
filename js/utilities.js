function getTextElementById(elementId){
    const productTotalElement=document.getElementById(elementId);
    const currentProductTotalString=productTotalElement.innerText;
    const currentProductTotal=parseInt(currentProductTotalString);
    return currentProductTotal;
}

function setTextElementValueById(elementId,value){
    const subTotalElement=document.getElementById(elementId);
    subTotalElement.innerText=value;   
}
function calculateSubTotal(){
    const currentPhoneTotal=getTextElementById('phone-total');
    const currentCaseTotal=getTextElementById('case-total');
    const subTotal=currentPhoneTotal+currentCaseTotal;
    setTextElementValueById('sub-total',subTotal);
    
    //calculate tax
//const taxAmount=parseFloat(subTotal*0.05).toFixed(2);
const taxAmount=parseFloat((subTotal*0.05).toFixed(2));
setTextElementValueById('tax-amount',taxAmount);

//calculate Total

//console.log(Total);
const Total=subTotal+taxAmount;
setTextElementValueById('final-total',Total);
}

