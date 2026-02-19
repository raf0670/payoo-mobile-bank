document.getElementById("cashout-btn").addEventListener("click", function() {
    const agentNumber = getValueFromId("cashout-number");
    const amount = getValueFromId("cashout-amount");
    const currBalance = getBalance();

    const newBalance = Number(currBalance) - Number(amount);
    if (newBalance < 0) {
        alert("Invalid amount to withdraw!");
        return;
    }

    const cashoutPin = getValueFromId("cashout-pin");
    if (cashoutPin === "3370") {
        setBalance(newBalance);
    } else {
        alert("Invalid PIN!");
        return;
    }
});