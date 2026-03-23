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
        alert("log in successfull");
        setBalance(newBalance);
    }
    else
    {
        alert("Invalid PIN");
        return;
    }
})