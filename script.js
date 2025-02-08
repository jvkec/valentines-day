document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const flowerContainer = document.querySelector('.flower-container');
    const container = document.querySelector('.container');

    // initially hidiing the container
    container.style.display = 'none';

    // show container after flower animation
    setTimeout(() => {
        flowerContainer.style.transform = 'translate(-50%, -200%) scale(0.5)';
        flowerContainer.style.transition = 'all 1s ease-in-out';
        container.style.display = 'block';
        container.classList.add('animate__animated', 'animate__fadeIn');
    }, 2500);

    // no button movement
    noButton.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noButton.style.position = 'fixed';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });

    // yes button click
    yesButton.addEventListener('click', () => {
        container.innerHTML = `
            <h1 class="animate__animated animate__heartBeat">Yay! I love you! ❤️</h1>
            <img src="https://i.imgur.com/8ZUkFWd.png" alt="Hello Kitty" class="hello-kitty animate__animated animate__bounce">
        `;
    });
}); 