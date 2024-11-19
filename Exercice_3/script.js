const boiteDialogue = document.querySelector('#lastname');

boiteDialogue.addEventListener("keyup", handleAddBoite);
    
    function handleAddBoite (event) {
    window.alert(event.key);
};

// possible de mettre input au lieu de keyup ou keydown
// possible de mettre value à la place de key pour recup la valeur