let btnGridSize = document.querySelector('#change-grid-size');
btnGridSize.addEventListener('click', changeGridSize);

function changeGridSize() {
    console.log("click");
}

let container = document.querySelector('.grid-container')


function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    for (let i = 0; i < size**2; i++) {
        let grid = document.createElement('div');

        grid.setAttribute('class', 'grid-item');
        grid.setAttribute('id', 'grid-item-' + i);

        grid.addEventListener('mouseover', () => {
            grid.classList.add('grid-item-hovered');
        });

        container.appendChild(grid);
    }    
}
