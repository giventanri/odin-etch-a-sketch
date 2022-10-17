let container = document.querySelector('.grid-container')

for (let i = 0; i < 256; i++) {
    let grid = document.createElement('div');
    grid.setAttribute('class', 'grid-item');
    grid.setAttribute('id', 'grid-item-' + i);

    // costumize grid here

    container.appendChild(grid);
}
