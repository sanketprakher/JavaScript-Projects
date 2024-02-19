let secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
console.log(secretNumber);
let attempts = 0;


function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    if (userGuess === '') {
        alert('Please enter a valid number.');
        return;
    }

    attempts++;


    if (userGuess == secretNumber) {
        document.getElementById('feedback').innerHTML = `Congratulations! You guessed the correct number in 
        ${attempts} attempts.`;
        document.getElementById('feedback').style.color = '#27ae60';
        disableInputAndButton();
    }
    else if (userGuess < secretNumber) {
        document.getElementById('feedback').innerHTML = 'Too low! Try again.';
        document.getElementById('feedback').style.color = '#e74c3c';
    }
    else {
        document.getElementById('feedback').innerHTML = 'Too high! Try again.';
        document.getElementById('feedback').style.color = '#e74c3c';
    }
    console.log(attempts);
}

function disableInputAndButton() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber)
    attempts=0;
    console.log(attempts)
    document.getElementById('userGuess').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('userGuess').disabled = false;
    document.querySelector('button').disabled = false;
}