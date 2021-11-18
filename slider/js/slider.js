function slider() {
    const imageList = document.querySelector('.image__list');
    const arrowRight = document.querySelector('.right');
    const arrowLeft = document.querySelector('.left');
    let elemWidth = document.querySelector('.list__item img').width;
    let move = 0;
    arrowLeft.classList.add('opacity');

    function handlerRight() {
        arrowLeft.classList.remove('opacity');
        
        if (move <= (imageList.getBoundingClientRect().width - (elemWidth + 20))) {
            move += (elemWidth + 10); 
        }; 

        if(move >= (imageList.getBoundingClientRect().width - (elemWidth + 20)))  {
            arrowRight.classList.add('opacity');
        };

        imageList.style = `transform: translateX(-${move}px);`;
    }

    function handlerLeft() {
        arrowRight.classList.remove('opacity');

        if (move > 0) move -= (elemWidth + 10);
        if (move <= 0) arrowLeft.classList.add('opacity');

        imageList.style = `transform: translateX(-${move}px);`;
    }
        
    arrowRight.addEventListener('click', handlerRight); 
    arrowLeft.addEventListener('click', handlerLeft);
}