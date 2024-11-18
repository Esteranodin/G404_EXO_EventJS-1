const boiteDialogue = document.querySelector('#lastname');

boiteDialogue.addEventListener("keyup", function handleAddBoite (event) {
    window.alert(event.key);
});