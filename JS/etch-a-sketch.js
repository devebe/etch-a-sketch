function createGrid (rowAmount, columnAmount, canvasSize) {
    for (let i = 0; i < (parseInt(rowAmount)); i++){
        createHTML('div#canvas', 'div', 'row', 1);
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
    let squareSize = canvasSize / rowAmount;
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
    let input = parseInt(prompt('Please enter the number of squares you want on your canvas', ''));
    while (input > 100) {
        alert("Please enter a number below 100");
        input = parseInt(prompt('Please enter the number of squares you want on your canvas', ''));
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

function resetSquares () {
    const canvas = document.querySelector('div#canvas');
    canvas.remove();
    createHTML('div#container', 'div', 'canvas', 1);
    createGrid(16, 16, canvasSize);
    draw('div#column', '#000000');
}

let canvasSize = 560;

createHTML('body', 'div', 'container', 1);
createHTML('div#container', 'div', 'controls', 1);
createHTML('div#container', 'div', 'canvas', 1);
createHTML('div#controls', 'button', 'setGrid', 1);
createHTML('div#controls', 'p', 'title', 1);
createHTML('div#controls', 'button', 'reset', 1);


const setGrid = document.querySelector('button#setGrid');
setGrid.textContent = 'Set Resolution';

const reset = document.querySelector('button#reset');
reset.textContent = 'Reset All';

const para = document.querySelector('p#title');
para.textContent = 'Etch-a-sketch'


createGrid(16, 16, canvasSize);
draw('div#column', '#000000');

setGrid.addEventListener('click', e => {
    const canvas = document.querySelector('div#canvas');
    canvas.remove();

    createHTML('div#container', 'div', 'canvas', 1);
    
    let userInput = getCheckedUserInput();

    createGrid(userInput, userInput, canvasSize);
    draw('div#column', '#000000');
});

reset.addEventListener('click', e => {resetSquares();});