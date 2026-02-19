document.getElementById("add-money-btn").addEventListener("click", function() {
    const bank = getValueFromId("add-money-bank");
    if (bank === "Select a Bank") {
        alert("Please select a Bank!");
        return;
    }
    const bankAccount = getValueFromId("add-money-account");
    const amount = getValueFromId("add-money-amount");
    const pin = getValueFromId("add-money-pin");

    const newBalance = getBalance() + Number(amount);

    if (pin === "3370") {
        setBalance(newBalance);
        alert(`${amount} added successfully from ${bank} to ${bankAccount} on ${new Date()}`);
    } else {
        alert("Invalid PIN!");
        return;
    }
});