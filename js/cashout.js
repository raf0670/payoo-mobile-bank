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

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-3xl">
                ${amount} cashed out successfully to ${agentNumber} on ${new Date()}.
            </div>
        `;
        history.append(newHistory);
        showOnly("history");
    } else {
        alert("Invalid PIN!");
        return;
    }
});