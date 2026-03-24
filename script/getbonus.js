document.getElementById("getbonus-btn").addEventListener("click", function () {

    const code = getValueFromInput("getbonus-number");

    if (code === "1111") {

        const newBalance = getBalance() + 50;
        setBalance(newBalance);

        const time = new Date().toLocaleString();

        addHistory(`Bonus: 50 BDT added at ${time}`);

        alert("You got 50 BDT Bonus 🎉");

    } else {
        alert("Wrong Coupon");
    }
});