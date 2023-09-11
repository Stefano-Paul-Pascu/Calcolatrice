function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Errore';
    }
}