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

createHTML('body', 'div', 'container', 1);
createGrid(16,16,16);

const targetElement = 'div.column';
const blocks = document.querySelectorAll(targetElement);
blocks.forEach(targetElement => {
    targetElement.addEventListener('mouseover', e => {
        targetElement.classList.add('fill');
    })
});