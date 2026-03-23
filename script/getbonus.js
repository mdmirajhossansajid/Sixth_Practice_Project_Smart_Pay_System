document.getElementById("getbonus-btn").addEventListener("click",function(){
    const code=getValueFromInput("getbonus-number");
    const currentBalance=getBalance();
    const newBalance=currentBalance+Number(50);
    if(code=="1111")
    {
        alert("Congratulation you get 50tk Bonus")
        setBalance(newBalance);
    }
    else(
        alert("Sorry Wrong Coupon code")
    )
})