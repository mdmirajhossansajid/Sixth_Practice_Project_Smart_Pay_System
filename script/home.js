document.getElementById("cashout-btn").addEventListener("click",function(){
    const  cashOutNumberInput=document.getElementById("cashout-number");
    const cashOutNumber=cashOutNumberInput.value;
    if(cashOutNumber.length!=11){
        alert("Invalid Agent Number");
        return;
    }

    const  cashOutAmountInput=document.getElementById("cashout-amount");
    const cashOutAmount=cashOutAmountInput.value;
    console.log(cashOutAmount);

    const currentBalanceElement=document.getElementById("balance");
    const currentBalance=currentBalanceElement.innerText;
    
    const newBalance=Number(currentBalance)-Number(cashOutAmount);
    if(newBalance<0)
       {
         alert("Invalid Amount");
         return;
       }

    const cashOutPinInput=document.getElementById("cashout-pin");
    const pin=cashOutPinInput.value;
    if(pin==="1234")
       {
         alert("Log in Successfull");
         console.log("newbalance",newBalance);
         currentBalanceElement.innerText=newBalance;

       }
    else
       {
         alert("Wrong Password");
         return;
       }
    


})