function createGrid (rowAmount, columnAmount, squareSize) {
    for (let i = 0; i < (parseInt(rowAmount)); i++){
        createHTML('div.container', 'div', 'row', 1);
        createHTML('div.row', 'div', 'column', parseInt(columnAmount))
    }
    setSquareDimensions('div.column', squareSize)
}

function createHTML (parentNode, childNode, className, numberOf) {
    for (let i = 0; i < (parseInt(numberOf)); i++) {
        const parents = document.querySelectorAll(parentNode);
        const child = document.createElement(childNode);
        parents.forEach(parentNode => {parentNode.appendChild(child)});
        child.classList.add(className);
    }
}

function setSquareDimensions (targetElement, size) {
    const squares = document.querySelectorAll(targetElement);
    squares.forEach(targetElement => {
        targetElement.style.height = `${size}px`;
        targetElement.style.width = `${size}px`;
    });
}

function draw(targetElement, drawColor) {
    const blocks = document.querySelectorAll(targetElement);
    blocks.forEach(targetElement => {
        targetElement.addEventListener('mouseover', e => {
        targetElement.style.backgroundColor = drawColor;
        })
    });
}

createHTML('body', 'button', 'gridSize', 1);
createHTML('body', 'div', 'container', 1);

const button = document.querySelector('button');
button.textContent = 'Set amount of squares';

button.addEventListener('click', e => {
    const container = document.querySelector('div.container');
    container.remove();

    createHTML('body', 'div', 'container', 1);
    
    let dimensions = parseInt(prompt('Please enter the number of squares you want', ''));
    let squareSize = (640 - dimensions) / dimensions;

    createGrid(dimensions, dimensions, squareSize);
    draw('div.column', 'black');
});