document.getElementById("cashout-btn").addEventListener("click", function() {
    const agentNumber = document.getElementById("cashout-number").value;
    const amount = document.getElementById("cashout-amount").value;
    const currBalanceElement = document.getElementById("balance");
    const currBalance = currBalanceElement.innerText;

    const newBalance = Number(currBalance) - Number(amount);
    if (newBalance < 0) {
        alert("Invalid amount to withdraw!");
        return;
    }

    const cashoutPin = document.getElementById("cashout-pin").value;
    if (cashoutPin == "3370") {
        currBalanceElement.innerText = newBalance;
    } else {
        alert("Invalid PIN!");
        return;
    }
});