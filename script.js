

//creating the Grid
let colorMode = "cyan"
function drawGrid(input) {
    let container = document.querySelector('#container');
        for (h = 0; h < input; h++) {
                let cell = document.createElement('div');
                cell.setAttribute('id', 'cell')
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

//preventing adding more grids to existing grid
function removeEvent() {
    let gridSizeButton = document.querySelector('#grid-size')
    gridSizeButton.removeEventListener('click', createGrid)
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
    psychadelicButtonClick()
    BlackButtonClick()
}

//color options


function changeAllCellColor() {
    let allSquares = document.querySelectorAll('#square')
    allSquares.forEach((square) => {
        square.addEventListener('mouseenter', changeColor)
    })
}

function changeColor (e) {
    e.target.style.background = "cyan"
}

function BlackButtonClick() {
    let blackButton = document.getElementById('black')
    blackButton.addEventListener('click', selectAllGridsBlack)
}

function selectAllGridsBlack () {
    let allSquares = document.querySelectorAll('#square')
    allSquares.forEach((square) => {
        square.addEventListener('mouseenter', blackColor)
    })
}

function blackColor(e) {
    e.target.style.background = "black"
}

function psychadelicButtonClick() {
    let psychButton = document.getElementById('psycho')
    psychButton.addEventListener('click', selectAllGridsPsychadelic)
}

function selectAllGridsPsychadelic () {
    let allSquares = document.querySelectorAll('#square')
    allSquares.forEach((square) => {
        square.addEventListener('mouseenter', getRandomBackground)
    })
}

function getRandomBackground(e) {
    e.target.style.backgroundColor = colorRandomizer()
}

function colorRandomizer() {
    let colorArray = []
        for (let i = 0; i < 3; i++) {
            colorArray.push(Math.floor(Math.random() * 256))
        }
    const r = colorArray[0]
    const b = colorArray[1]
    const g = colorArray[2]
    
    return "rgb(" + r + "," + g + "," + b + ")";
}

//running the program
askUserForGrid();

