// protect page
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}

// input value
function getValueFromInput(id) {
    return document.getElementById(id).value;
}

// balance
function getBalance() {
    return Number(localStorage.getItem("balance")) || 0;
}

function setBalance(value) {
    localStorage.setItem("balance", value);
    document.getElementById("balance").innerText = value;
}

// section show
function showAll(id) {
    const sections = ["add-money", "cashout", "sendmoney", "getbonus", "paybill", "history"];

    sections.forEach(sec => {
        document.getElementById(sec).classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

// logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}

// history system
function addHistory(message) {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    data.unshift(message);
    localStorage.setItem("history", JSON.stringify(data));
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById("history-container");
    container.innerHTML = "";

    const data = JSON.parse(localStorage.getItem("history")) || [];

    data.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-lg shadow">
            ${item}
        </div>`;
        container.appendChild(div);
    });
}

// load on start
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("balance").innerText = getBalance();
    renderHistory();
    if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("bg-black", "text-white");
}
});

function filterHistory(type) {
    const data = JSON.parse(localStorage.getItem("history")) || [];

    const container = document.getElementById("history-container");
    container.innerHTML = "";

    let filtered = data;

    if (type !== "all") {
        filtered = data.filter(item => item.includes(type));
    }

    filtered.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-lg shadow">
            ${item}
        </div>
        `;

        container.appendChild(div);
    });
}
