document.getElementById("cashout-btn").addEventListener("click",function(){
    
   const  cashOutNumber=getValueFromInput("cashout-number")
    if(cashOutNumber.length!=11){
        alert("Invalid Agent Number");
        return;
    }

    const cashOutAmount=getValueFromInput("cashout-amount")

    const currentBalance=getBalance();
    const newBalance=currentBalance-Number(cashOutAmount);
    if(newBalance<0)
       {
         alert("Invalid Amount");
         return;
       }

    const pin=getValueFromInput("cashout-pin")
    if(pin==="1234")
       {
         alert("Log in Successfull");
        setBalance(newBalance);
         

       }
    else
       {
         alert("Wrong Password");
         return;
       }
    


})