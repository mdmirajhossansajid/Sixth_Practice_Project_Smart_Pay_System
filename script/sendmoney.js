document.getElementById("sendmoney-btn").addEventListener("click", function () {

    const number = getValueFromInput("sendmoney-number");
    if (number.length != 11) {
        alert("Invalid Number");
        return;
    }

    const amount = Number(getValueFromInput("sendmoney-amount"));
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid Amount");
        return;
    }

    const newBalance = getBalance() - amount;

    if (newBalance < 0) {
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFromInput("sendmoney-pin");

    if (pin === "1234") {

        const time = new Date().toLocaleString();

        setBalance(newBalance);

        addHistory(`Send Money: ${amount} BDT to ${number} at ${time}`);

    } else {
        alert("Invalid PIN");
    }
});