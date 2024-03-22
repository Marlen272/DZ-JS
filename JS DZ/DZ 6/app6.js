// ПУНКТ 1
// const counterInput = document.getElementById('counter');
// const incrementBtn = document.getElementById('increment');
// const decrementBtn = document.getElementById('decrement');
// const resetBtn = document.getElementById('reset');
//
// incrementBtn.addEventListener('click', () => {
//     let value = parseInt(counterInput.value);
//     value++;
//     counterInput.value = value;
//     updateColor(value);
// });
//
// decrementBtn.addEventListener('click', () => {
//     let value = parseInt(counterInput.value);
//     value--;
//     counterInput.value = value;
//     updateColor(value);
// });
//
// resetBtn.addEventListener('click', () => {
//     counterInput.value = '0';
//     counterInput.classList.remove('positive', 'negative');
// });
//
// function updateColor(value) {
//     counterInput.classList.remove('positive', 'negative');
//     if (value > 0) {
//         counterInput.classList.add('positive');
//     } else if (value < 0) {
//         counterInput.classList.add('negative');
//     } else {
//         counterInput.classList.add('zero');
//     }
// }



const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const messageDiv = document.getElementById('message');

redLight.addEventListener('click', () => {
    showMessage('Стоп');
});

yellowLight.addEventListener('click', () => {
    showMessage('Готовься');
});

greenLight.addEventListener('click', () => {
    showMessage('Вперед');
});

function showMessage(message) {
    messageDiv.textContent = message;
}
