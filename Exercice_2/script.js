const boiteDialogue = document.querySelector('#lastname');

boiteDialogue.addEventListener("focusout", function handleAddBoite () {
    window.alert ("Merci de votre participation");
});

// à la place de focusout, il est mieux d'utiliser 'blur' (cf. phase de capture/phase de bouillonement)

