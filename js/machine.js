function getValueFromId(id) {
    return document.getElementById(id).value;
}

function getBalance() {
    return Number(document.getElementById("balance").innerText);
}

function setBalance(newBalance) {
    document.getElementById("balance").innerText = newBalance;
    return;
}

function showOnly(id) {
    document.getElementById("add-money").classList.add("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
    return;
}