function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var displayValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(displayValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
