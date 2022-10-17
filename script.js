let container = document.querySelector('.grid-container')

for (let i = 0; i < 256; i++) {
    let grid = document.createElement('div');

    // costumize grid here
        
    grid.setAttribute('class', 'grid-item');
    grid.setAttribute('id', 'grid-item-' + i);

    grid.addEventListener('mouseover', () => {
        grid.classList.add('grid-item-hovered');
    });

    container.appendChild(grid);
}