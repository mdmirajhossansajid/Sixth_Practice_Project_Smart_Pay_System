document.getElementById("paybill-btn").addEventListener("click", function () {

    const bank = getValueFromInput("paybill-bank");
    if (bank == "Select Bank") {
        alert("Select Bank");
        return;
    }

    const number = getValueFromInput("paybill-number");
    if (number.length != 11) {
        alert("Invalid Number");
        return;
    }

    const amount = Number(getValueFromInput("paybill-amount"));
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid Amount");
        return;
    }

    const newBalance = getBalance() - amount;

    if (newBalance < 0) {
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFromInput("paybill-pin");

    if (pin === "1234") {

        const time = new Date().toLocaleString();

        setBalance(newBalance);

        addHistory(`Pay Bill: ${amount} BDT via ${bank} (${number}) at ${time}`);

    } else {
        alert("Invalid PIN");
    }
});