document.getElementById("login-btn").addEventListener("click", function() {
    // get number
    const numberInput = document.getElementById("input-number").value;
    // get pin
    const pinInput = document.getElementById("input-pin").value;

    // matching
    if (numberInput === "01876790080" && pinInput === "3370") {
        window.location.assign("/home.html");
    } else {
        alert("Wrong credentials");
        return;
    }
})