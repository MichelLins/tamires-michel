function updateCountdown() {
    const startDate = new Date('2024-08-10T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();
const carouselImages = document.getElementById('carouselImages');
const totalImages = document.querySelectorAll('.carousel-images img').length;
let currentIndex = 0;
function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});
document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});
const emojis = ["😍", "😘", "❤️", "🥰", "💕", "💖"];
const emojiContainer = document.querySelector(".bg-transparent .absolute.w-full");
function createFloatingEmoji() {
    const emojiDiv = document.createElement("div");
    emojiDiv.className = "emoji";
    emojiDiv.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emojiDiv.style.left = `${Math.random() * 100}vw`;
    emojiDiv.style.fontSize = `${20 + Math.random() * 30}px`;
    emojiDiv.style.animationDuration = `${4 + Math.random() * 4}s`;
    emojiContainer.appendChild(emojiDiv);
    setTimeout(() => emojiDiv.remove(), 8000);
}
setInterval(createFloatingEmoji, 1000);
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("selected", i === index);
        slide.classList.toggle("previous", i === (index - 1 + slides.length) % slides.length);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
    currentIndex = index;
}
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});
document.querySelector(".control-prev").addEventListener("click", () => {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
});
document.querySelector(".control-next").addEventListener("click", () => {
    showSlide((currentIndex + 1) % slides.length);
});
window.addEventListener("load", function() {
        const audio = document.getElementById("myAudio");
        audio.play().catch(error => {
            console.error("Erro ao reproduzir o áudio automaticamente:", error);
        });
    });