function updateCaseTotal(caseNumber){
    const caseTotal=59*caseNumber;
    const caseTotalField=document.getElementById('case-total');
    console.log(caseTotalField);
    caseTotalField.innerText=caseTotal;
    }
    
    document.getElementById('btn-case-plus').addEventListener('click',function(){
      const caseNumber = updateProductNumber('case-field',true);
      updateCaseTotal(caseNumber);
      calculateTotal();
      
         
    })
    
    document.getElementById('btn-case-minus').addEventListener('click',function(){
       const caseNumber = updateProductNumber('case-field',false);
       updateCaseTotal(caseNumber);
       calculateTotal();
    })