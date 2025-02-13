body {
    background: linear-gradient(to bottom, #ffcccc, #ff99cc);
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    text-align: center;
    position: relative;
}

.slideshow-container {
    max-width: 80%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.slide {
    display: none;
    opacity: 0;
    transition: opacity 1s ease;
}

.slide.active {
    display: block;
    opacity: 1;
}

h2 {
    color: #ff6699;
}

.slide-img {
    max-width: 80%;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.next-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 60px;
    cursor: pointer;
}

.music-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #fff;
    border: none;
    border-radius: 50%;
    font-size: 1.5em;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
}

@keyframes heart {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) scale(0.5);
        opacity: 0;
    }
}

.heart {
    width: 30px;
    height: 30px;
    background: url('img/heart.png') no-repeat center;
    background-size: cover;
    position: fixed;
    top: -10%;
    animation: heart 5s linear infinite;
    pointer-events: none;
    z-index: 1000;
}
