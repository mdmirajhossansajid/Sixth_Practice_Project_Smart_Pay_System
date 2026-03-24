document.getElementById("addMoney-btn").addEventListener("click", function () {

    const bankAccount = getValueFromInput("addMoney-bank");
    if (bankAccount == "Select Bank") {
        alert("Please Select a Bank");
        return;
    }

    const accno = getValueFromInput("addMoney-number");
    if (accno.length != 11) {
        alert("Invalid Account Number");
        return;
    }

    const amount = Number(getValueFromInput("addMoney-amount"));
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid Amount");
        return;
    }

    const newBalance = getBalance() + amount;

    const pin = getValueFromInput("addMoney-pin");

    if (pin === "1234") {

        const time = new Date().toLocaleString();

        alert(`Add Money Successful`);

        setBalance(newBalance);

        addHistory(`Add Money: ${amount} BDT from ${bankAccount} (${accno}) at ${time}`);

    } else {
        alert("Invalid PIN");
    }
});