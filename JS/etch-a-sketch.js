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

function setSquareDimensions (square, size) {
    const squares = document.querySelectorAll(square);
    squares.forEach(square => {
        square.style.height = `${size}px`;
        square.style.width = `${size}px`;
    });
}

createHTML('body', 'div', 'container', 1);
createGrid(16,16,24);