// machine Input Value
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value;
}
// machine Element Value
function getBalance(){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log("current balance",Number(balance));
    return Number(balance);
}
// set value
function setBalance(value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}

function showAll(id){
    const addmoney=document.getElementById("add-money");
    const cashout=document.getElementById("cashout");
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    const selected=document.getElementById(id);
    selected.classList.remove("hidden");
}
