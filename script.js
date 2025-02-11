document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const flowerContainer = document.querySelector('.flower-container');
    const container = document.querySelector('.container');

    // initially hidiing the container
    container.style.display = 'none';

    // show container after flower animation
    setTimeout(() => {
        // Zoom the flower before hiding
        flowerContainer.style.transform = 'scale(0.1)'; // Scale down to very small
        flowerContainer.style.opacity = '0'; // Fade out

        // Show the question container after the flower disappears
        setTimeout(() => {
            container.style.display = 'block'; // Show the question container
            container.classList.add('animate__animated', 'animate__fadeIn');
        }, 500); // Wait for the flower animation to complete
    }, 2500); // Time before starting the flower animation

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
            <h1 class="animate__animated animate__heartBeat">thank you :) (even if u tried to press no + ill get you real flowers) ❤️</h1>
            <div class="tenor-gif-embed" data-postid="8592107" data-share-method="host" data-aspect-ratio="1.08036" data-width="100%">
                <a href="https://tenor.com/view/hello-kitty-closer-dear-daniel-love-lean-gif-8592107">Hello Kitty Closer GIF</a> from <a href="https://tenor.com/search/hello+kitty-gifs">Hello Kitty GIFs</a>
            </div>
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        `;
        
        // Re-insert the Tenor embed script to ensure the GIF loads
        const script = document.createElement('script');
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    });
}); 