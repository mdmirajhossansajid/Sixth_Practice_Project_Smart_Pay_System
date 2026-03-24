document.getElementById("sendmoney-btn").addEventListener("click",function(){
    const sendMoneyNumber=getValueFromInput("sendmoney-number");
    if(sendMoneyNumber.length!=11)
    {
        alert("Invalid Number")
        return;
    }
    const amount=getValueFromInput("sendmoney-amount");
    const currentBalance=getBalance();
    const newBalance=currentBalance-Number(amount);
    const pin=getValueFromInput("sendmoney-pin");
    if(pin=="1234")
    {
        alert(`Send Money SuccessFull from ${sendMoneyNumber} at ${new Date()}`)
        setBalance(newbalance);
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=
        `<div class="transaction-card p-5 bg-base-100">
            Add Money SuccessFull from ${sendMoneyNumber} at ${new Date()}
            </div>`;
        history.append(newHistory);
    }
    else
    {
        alert("Invalid PIN");
        return;
    }
})