const buttonRAZ = document.querySelector('button');

buttonRAZ.addEventListener('click', function handleResetAll () {
    let inputs = document.querySelectorAll('input');
inputs.forEach(input => {input.value = ''});
});