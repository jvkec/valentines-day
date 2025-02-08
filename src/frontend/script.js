const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
    noButton.style.display = 'none';
    setTimeout(() => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
        noButton.style.display = 'block';
    }, 1000);
}); 