

//creating the Grid
function createColumn() {
    let column = document.createElement('div');
    column.setAttribute('id', 'column')
    return column;
}

function createCell() {
    let cell = document.createElement('div');
    cell.setAttribute('id', 'cell')
    return cell;
}

function drawGrid(input) {
    let container = document.querySelector('#container');
        for (h = 0; h < input; h++) {
                let square = document.createElement('div')
                let cell = createCell()
                container.appendChild(cell)
        }

        const rows = document.querySelectorAll('#cell');
        rows.forEach((item) => {
            for (w = 0; w < input; w++) {
                let square = document.createElement('div')
                square.setAttribute('id', 'square')
                item.appendChild(square)
        }
    })
        removeEvent();
}
    

function removeEvent() {
    let gridSizeButton = document.querySelector('#grid-size')
    gridSizeButton.removeEventListener('click', createGrid)
}
//adding events to grid cells

function changeAllCellColor() {
    let allSquares = document.querySelectorAll('#square')
    allSquares.forEach((square) => {
        square.addEventListener('mouseenter', changeColor)
    })
}

function changeColor (e) {
    e.target.style.background = "cyan"
}

//button event

function buttonChange() {
    let buttons= document.querySelectorAll('.button')
    buttons.forEach((item) => {
       item.addEventListener('click', addClass)
    }
)}

function addClass(e) {
    e.target.classList.add('btn-change')
}

function removeButtonChange() {
    let buttons = document.querySelectorAll('.button')
    buttons.forEach((item) => {
        item.addEventListener('transitionend', removeClass)
    })
}

function removeClass(e) {
    e.target.classList.remove('btn-change')
}

function reset() {
    window.location.reload()
}

function userInput() {
    let input = ""
    do {
        input = prompt('Enter a single digit (max 100) to create a L x W square .\nHint: The smaller the number, the bigger the pixels')
    }   while (isNaN(input) || input > 100 || input <= 0)

    return input;
}

function askUserForGrid() {
    let gridSizeButton = document.querySelector('#grid-size')
    gridSizeButton.addEventListener('click', createGrid)
}

function createGrid(){ 
    const input = userInput()
    drawGrid(input);
    changeAllCellColor()
}

//running the program

askUserForGrid();
buttonChange();
removeButtonChange();
