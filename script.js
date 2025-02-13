let slideIndex = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].classList.remove('active');
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add('active');
}

window.onload = () => {
    document.querySelectorAll('.slide')[0].classList.add('active');
    setInterval(createHeart, 500);
};

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function toggleMusic() {
    const music = document.getElementById("background-music");
    const musicBtn = document.querySelector(".music-btn");

    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔊";
    } else {
        music.pause();
        musicBtn.textContent = "🔇";
    }
}
