


let display = document.getElementById('display');
display.value = '0';
let currentValue = '';


function backspace() {
    //Remove the last character from the display
    // display.value = (display.value).splice(0, -1);
    // console.log(display.value)
    currentValue = currentValue.slice(0, -1);
    console.log(currentValue);

    // If the display becomes empty, set it to '0'
    if (currentValue === '') {
        currentValue = '0';
    }
    display.value = currentValue;
}

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        // If the current value is '0', replace it with the new value
        currentValue = '';
        display.value = value;
        console.log(display.value);

        currentValue += value;
        console.log(currentValue);

    }
    else {
        currentValue += value;
        console.log(currentValue);
        display.value = currentValue;
        console.log(display.value);
        // console.log(value);
        // console.log(typeof value);
        // console.log(currentValue);
        // console.log(typeof currentValue);
    }

}



function clearDisplay() {
    // Reset the display value to '0' when clearing
    display.value = '0';
    currentValue = '';
}



function calculateResult() {
    try {
        currentValue = eval(currentValue);
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
    }
}

function CalculatePercentage(value) {
    try {
        currentValue = eval(currentValue + '/100');
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
    }
}



