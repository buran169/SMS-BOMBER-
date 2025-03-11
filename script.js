function sendSMS() {
    let phone = document.getElementById("phoneNumber").value;
    let amount = document.getElementById("amount").value;
    let responseMessage = document.getElementById("responseMessage");

    if (phone === "" || amount === "") {
        responseMessage.innerHTML = "❌ Please fill in all fields!";
        responseMessage.style.color = "red";
        return;
    }

    let apiUrl = `https://cherykuwait.com/topbomb.php?phone=${phone}&amount=${amount}`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            if (data.includes("Success")) {
                responseMessage.innerHTML = "✅ Message Sent Successfully!";
                responseMessage.style.color = "green";
            } else {
                responseMessage.innerHTML = "❌ Failed to Send Message!";
                responseMessage.style.color = "red";
            }
        })
        .catch(error => {
            responseMessage.innerHTML = "❌ Error Occurred!";
            responseMessage.style.color = "red";
        });
                  }
