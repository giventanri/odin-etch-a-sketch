let btnBWMode = document.querySelector('#bw-mode');
btnBWMode.addEventListener('click', createBWGrid);

let btnRGBMode = document.querySelector('#rgb-mode');
btnRGBMode.addEventListener('click', createRGBGrid);

function createBWGrid() {
    let size = prompt("Blank ink. Enter # of squares per side: (1-100)");
    if (size < 101 && size > 0) createGrid(size, "BW");
}

function createRGBGrid() {
    let size = prompt("Rainbow onk! Enter # of squares per side: (1-100)");
    if (size < 101 && size > 0) createGrid(size, "RGB");
}

function generateRGB() {
    return "#" + (Math.floor(Math.random()*16777215).toString(16));
}

function createGrid(size, mode) {
    let container = document.querySelector('.grid-container')
    container.innerHTML = '';
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";

    for (let i = 0; i < size**2; i++) {
        let grid = document.createElement('div');

        grid.setAttribute('class', 'grid-item');
        grid.style.opacity = 1;

        if (mode == "BW") {
            grid.addEventListener('mouseover', () => {
                grid.style.opacity -= 1;
        })}

        else if (mode == "RGB") {
            grid.addEventListener('mouseover', () => {
                grid.style.opacity -= .1;
                grid.style.backgroundColor = generateRGB();
        })};

        container.appendChild(grid);
    }
}    

createGrid(16, "BW");