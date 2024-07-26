
document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain');

    const numberOfDrops = 50;

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.animationDelay = `${Math.random() * 2.5}s`;
        rainContainer.appendChild(drop);
    }
});

