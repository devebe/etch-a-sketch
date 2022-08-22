function createGrid (rowAmount, columnAmount, canvasSize) {
    for (let i = 0; i < (parseInt(rowAmount)); i++){
        createHTML('div#container', 'div', 'row', 1);
        createHTML('div#row', 'div', 'column', parseInt(columnAmount))
    }
    setSquareDimensions('div#column', canvasSize, rowAmount);
}

function createHTML (parentNode, childNode, className, numberOf) {
    for (let i = 0; i < (parseInt(numberOf)); i++) {
        const parents = document.querySelectorAll(parentNode);
        const child = document.createElement(childNode);
        parents.forEach(parentNode => {parentNode.appendChild(child)});
        child.setAttribute("id",`${className}`);
    }
}

function setSquareDimensions (targetElement, canvasSize, rowAmount) {
    const squares = document.querySelectorAll(targetElement);
    let squareSize = (canvasSize - (rowAmount * 2)) / rowAmount;
    squares.forEach(targetElement => {
        targetElement.style.height = `${squareSize}px`;
        targetElement.style.width = `${squareSize}px`;
    });
}

function draw (targetElement, drawColor) {
    const blocks = document.querySelectorAll(targetElement);
    blocks.forEach(targetElement => {
        targetElement.addEventListener('mouseover', e => {
            if (drawColor === 'random' || drawColor === undefined || drawColor === null) {
                targetElement.style.backgroundColor = randomColor();
            }
            else {
                targetElement.style.backgroundColor = drawColor;
            }
        })
    });
}

function getCheckedUserInput() {
    let input = parseInt(prompt('Please enter the number of squares you want', ''));
    while (input > 100) {
        alert("Please enter a number below 100");
        input = parseInt(prompt('Please enter the number of squares you want', ''));
    }
    return input;
}

function randomValue() {
    let randomValue = Math.floor((Math.random()) * 255);
    return randomValue;
}

function randomColor() {
    let color = `rgb(${randomValue()},${randomValue()},${randomValue()})`;
    return color;
}

createHTML('body', 'div', 'container', 1);
createHTML('div#container', 'div', 'controls', 1);
createHTML('div#controls', 'button', 'setGrid', 1);
createHTML('div#controls', 'button', 'reset', 1);

let canvasSize = 640;

createGrid(16, 16, canvasSize);
draw('div#column', 'blue');

const button = document.querySelector('button');
button.textContent = 'Set amount of squares';

button.addEventListener('click', e => {
    const container = document.querySelector('div#container');
    container.remove();

    createHTML('body', 'div', 'container', 1);
    
    let userInput = getCheckedUserInput();

    createGrid(userInput, userInput, canvasSize);
    draw('div#column', 'blue');
});