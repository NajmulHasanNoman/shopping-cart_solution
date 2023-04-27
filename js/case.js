function updateCaseNumber(isIncrease){
    const caseNumberField=document.getElementById('case-number-field');
    const caseNumberString=caseNumberField.value;
    const previousCaseNumber=parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease==true){
        newCaseNumber=previousCaseNumber+1;
    }
    else{
         newCaseNumber=previousCaseNumber-1;
    }
    // if(newCaseNumber<0){
    //     return;
    // }
    caseNumberField.value=newCaseNumber;
    return newCaseNumber;
} 

function updateCaseTotalPrice(newCaseNumber){
     const newCaseTotalPrice=59*newCaseNumber;
     const caseTotalElement=document.getElementById('case-total');
     caseTotalElement.innerText=newCaseTotalPrice;
     return newCaseTotalPrice;
     
}
function updateSubTotal(){
    //const newCaseTotal=updateCaseTotalPrice();
   // const subtotal=document.getElementById('sub-total');
    
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber=updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();


})
document.getElementById('btn-case-minus').addEventListener('click',function(){
   const newCaseNumber= updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
   
})


