document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    function moveToSlide(currentIndex) {
        carouselTrack.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
    }

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });
});
