const block = document.querySelector('.inner__block');
const input = document.querySelector('.input');

function tapOnMe() {
    let inputValue = input.value;
    block.innerHTML = inputValue;
    input.value = '';
}