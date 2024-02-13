const randomNumber = Math.trunc(Math.random() * 10);
// const randomNumberContainer = document.getElementById('random-number-container');
const randomNumberContainer = document.querySelector('#random-number-container');
const input = document.querySelector('#floatingInput');
const checkButton = document.querySelector('#check-button');
// const hintContainer = document.querySelector('#hint');
const hintContainer = document.querySelector('[role="alert"]');

// randomNumberContainer.innerText = randomNumber;
function checkResult() {
    // console.log('Ejecutado!');
    const response = Number(input.value);

    if (response > 10 || response < 0) {
        hintContainer.innerHTML = '☝️ Recuerda que todos los numeros están entre el 0 y el 10';
        hintContainer.classList = 'alert alert-danger';
        return;
    }

    if (randomNumber === response) {
        hintContainer.innerHTML = '✅ Excelente! Le atinaste';
        hintContainer.classList = 'alert alert-success';

    } else if (randomNumber > response) {
        hintContainer.innerHTML = '📈 Intenta un numéro más grande';
        hintContainer.classList = 'alert alert-warning';

    } else if (randomNumber < response) {
        hintContainer.innerHTML = '📉 Intenta un numéro más pequeño';
        hintContainer.classList = 'alert alert-warning';
    }
}


checkButton.addEventListener('click', checkResult);
