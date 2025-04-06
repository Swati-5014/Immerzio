document.addEventListener('DOMContentLoaded', () => {
    const userProfile = document.querySelector('.user-profile');
    const dropdown = document.getElementById('dropdown');

    userProfile.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!userProfile.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentSlide);

    const counters = [
        { id: 'projects', start: 0, end: 20 },
        { id: 'volunteers', start: 0, end: 150 },
        { id: 'raised', start: 0, end: 8000 },
        { id: 'donors', start: 0, end: 500 }
    ];

    function animateCounter(id, start, end) {
        const duration = 2000;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        let current = start;
        const obj = document.getElementById(id);

        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    counters.forEach(counter => {
        animateCounter(counter.id, counter.start, counter.end);
    });
});

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const carouselTrack = document.querySelector('.carousel-track');

leftButton.addEventListener('click', () => {
    const currentTransform = getComputedStyle(carouselTrack).transform;
    const matrix = new WebKitCSSMatrix(currentTransform);
    const currentTranslateX = matrix.m41;
    const newTranslateX = currentTranslateX + 320; // Adjust based on card width
    carouselTrack.style.transform = `translateX(${newTranslateX}px)`;
});

rightButton.addEventListener('click', () => {
    const currentTransform = getComputedStyle(carouselTrack).transform;
    const matrix = new WebKitCSSMatrix(currentTransform);
    const currentTranslateX = matrix.m41;
    const newTranslateX = currentTranslateX - 320; // Adjust based on card width
    carouselTrack.style.transform = `translateX(${newTranslateX}px)`;
});
