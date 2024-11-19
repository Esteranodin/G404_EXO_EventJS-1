const imageHover = document.querySelectorAll('.container img')

imageHover.forEach(image => {
    image.addEventListener('mouseenter', handleMouseEnter);
});

function handleMouseEnter(event) {

    const imgTag = event.target;
    imgTag.src = imgTag.src.replace('.jpg', '_2.jpg');

    imgTag.removeEventListener('mouseenter', handleMouseEnter);

};