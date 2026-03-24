document.getElementById("paybill-btn").addEventListener("click",function(){
    const bankAccount=getValueFromInput("paybill-bank");
    if(bankAccount=="Select Bank")
    {
        alert("Please Select A bank")
        return;
    }
    const accNumber=getValueFromInput("paybill-number");
    if(accNumber.length!=11)
    {
        alert("Please Select  correct Number")
        return;
    }
    const amount=getValueFromInput("paybill-amount");
    const currentBalance=getBalance();
    const newBalance=currentBalance-Number(amount);
     const pin=getValueFromInput("paybill-pin");
     if(pin=="1234")
     {
         alert(`Pay Bill SuccessFull from ${bankAccount} at ${new Date()}`)
        setBalance(newBalance);
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=
        `<div class="transaction-card p-5 bg-base-100">
            Add Money SuccessFull from ${bankAccount},accNumber ${accNumber} at ${new Date()}
            </div>`;
        history.append(newHistory);
     } else
     {
        alert("Invalid PIN");
        return;
     }
})