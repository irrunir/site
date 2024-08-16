document.getElementById('secureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const sanitizedInput = userInput.replace(/</g, "<").replace(/>/g, ">");
    alert('ورودی امن: ' + sanitizedInput);
});