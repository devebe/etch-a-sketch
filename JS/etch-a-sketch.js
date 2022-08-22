function createGrid () {
    createHTML('body', 'div', 'container', 1);
    createHTML('div.container', 'div', 'square', 16);
}

function createHTML (parentNode,childNode,className,numberOf) {
    for (let i = 0; i < (parseInt(numberOf)); i++) {
        const parent = document.querySelector(parentNode);
        const child = document.createElement(childNode);
        parent.appendChild(child);
        child.classList.add(className);
    }
}

createGrid();