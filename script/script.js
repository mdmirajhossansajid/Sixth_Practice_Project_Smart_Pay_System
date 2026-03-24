document.getElementById("login-btn").addEventListener("click", function () {

    const number = document.getElementById("input-number").value;
    const pin = document.getElementById("input-pin").value;

    if (number.length !== 11) {
        alert("Invalid Number");
        return;
    }

    if (pin !== "1234") {
        alert("Invalid PIN");
        return;
    }

    localStorage.setItem("isLoggedIn", "true");

    if (!localStorage.getItem("balance")) {
        localStorage.setItem("balance", "45000");
    }

    window.location.href = "home.html";
});