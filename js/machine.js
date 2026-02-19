function getValueFromId(id) {
    return document.getElementById(id).value;
}

function getBalance() {
    return Number(document.getElementById("balance").innerText);
}

function setBalance(newBalance) {
    document.getElementById("balance").innerText = newBalance;
}