document.getElementById("addMoney-btn").addEventListener("click",function(){
    const bankAccount=getValueFromInput("addMoney-bank");
    if(bankAccount=="Select Bank")
    {
         alert("Please Select a Bank")
         return;
    }
    const accno=getValueFromInput("addMoney-number");
    if(accno.length!=11)
    {
        alert("Invalid Account Number")
        return;
    }
    const amount=getValueFromInput("addMoney-amount");
    const currentBalance=getBalance();
    const newbalance=currentBalance+Number(amount);
    const pin=getValueFromInput("addMoney-pin");
    if(pin =="1234")
    {
        alert(`Add Money SuccessFull from ${bankAccount} at ${new Date()}`)
        setBalance(newbalance);
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=
        `<div class="transaction-card p-5 bg-base-100">
            Add Money SuccessFull from ${bankAccount},accno ${accno} at ${new Date()}
            </div>`;
        history.append(newHistory);
    }else{
        alert("Invalid Password");
    }


})