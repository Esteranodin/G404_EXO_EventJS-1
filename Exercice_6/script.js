const imageHover = document.querySelectorAll('.container img')

imageHover.forEach(image => {image.addEventListener('mouseenter', handleMouseEnter);
});

function handleMouseEnter(event){
    
    const imgTag = event.target;
    imgTag.src = imgTag.src.replace('.jpg', '_2.jpg'); 
};

imageHover.forEach(image => {image.addEventListener ('mouseleave', handleMouseLeave);
});

function handleMouseLeave(event) {
const imgTag = event.target;
imgTag.src = imgTag.src.replace('_2.jpg', '.jpg');
};