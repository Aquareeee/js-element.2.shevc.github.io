const balanceElement = document.getElementById("balance");
const withdrawButton = document.getElementById("withdraw");
const depositButton = document.getElementById("deposit");
const amountInput = document.getElementById("amount");

let balance = 1000;

function updateBalance() {
    balanceElement.textContent = balance + " долларов";
}

withdrawButton.addEventListener("click", function() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Введите корректную сумму для снятия.");
    } else if (amount > balance) {
        alert("Недостаточно средств на балансе.");
    } else {
        balance -= amount;
        updateBalance();
        amountInput.value = "";
    }
});

depositButton.addEventListener("click", function() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Введите корректную сумму для пополнения.");
    } else {
        balance += amount;
        updateBalance();
        amountInput.value = "";
    }
});

updateBalance();