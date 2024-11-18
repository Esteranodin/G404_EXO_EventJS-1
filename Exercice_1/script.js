const imageHover = document.querySelector('#imageHover');

imageHover.addEventListener('mouseenter', function handleSurvolImageChange () {
imageHover.src = "images/image1_2.jpg";
});

imageHover.addEventListener('mouseleave', function handleSurvolImageChange () {
    imageHover.src = "images/image1.jpg"
});

