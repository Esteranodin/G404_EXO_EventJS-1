const buttonRAZ = document.querySelector('#raz');

buttonRAZ.addEventListener('click', handleResetAll);
    
    function handleResetAll () {
    let inputs = document.querySelectorAll('input');
inputs.forEach(input => {input.value = ''});
};