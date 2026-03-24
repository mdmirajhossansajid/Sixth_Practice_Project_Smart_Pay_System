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
        alert(`Cash Out SuccessFull to ${cashOutNumber} at ${new Date()}`)
        setBalance(newBalance);
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=
        `<div class="transaction-card p-5 bg-base-100">
            Add Money SuccessFull from ${cashOutNumber},cashoutAmount ${cashOutAmount} at ${new Date()}
            </div>`;
        history.append(newHistory);
         

       }
    else
       {
         alert("Wrong Password");
         return;
       }
    


})