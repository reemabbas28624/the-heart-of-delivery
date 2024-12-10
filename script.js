
const button = document.getElementById("action-button");
const messageDiv = document.getElementById("message");
const pressDuration=0.0001 

button.addEventListener("mousedown", function() {
    pressTimeout = setTimeout(function() {
        messageDiv.style.display = "block";
    }, pressDuration);
});
