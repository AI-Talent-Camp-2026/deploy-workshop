console.log('HELLO FROM SCRIPTS.JS');
const button = document.getElementById('button');

if (button) {
    button.style.backgroundColor = 'blue';
    button.addEventListener('click', () => {
        console.log('Кнопка была нажата');
    });
}