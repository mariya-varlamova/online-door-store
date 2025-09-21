document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.intro');
    const images = [
        'img/Img1.png',
        'img/Img3.png', 
        'img/Img4.png'
    ];

    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        intro.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    intro.style.backgroundImage = `url(${images[0]})`;

    setInterval(changeBackground, 5000);
});

