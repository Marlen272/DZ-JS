// script.js
const checkButton = document.getElementById('checkButton');
const userInput = document.getElementById('userInput');
const hintElement = document.getElementById('hintElement');

checkButton.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guess = Number(userInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Введите число от 1 до 100!');
        return;
    }

    if (guess === randomNumber) {
        hintElement.textContent = "Вы угадали!";
        hintElement.style.color = "black";
    } else if (guess < randomNumber) {
        hintElement.textContent = "Загаданное число больше";
        hintElement.style.color = "green";
    } else {
        hintElement.textContent = "Загаданное число меньше";
        hintElement.style.color = "red";
    }
});
