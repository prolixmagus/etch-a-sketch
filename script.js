

//creating the Grid

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
    while(true) {
        input = +prompt('Enter a single digit (max 100) to create a L x W square .\nHint: The smaller the number, the bigger the pixels')
            if (input === isNaN(input) || input > 100 || input <=0 || input === null) {
                alert('Please try again')
            } else {
                return input;
            }
    }
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
        square.removeEventListener('mouseenter', getRandomBackground)
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
        square.removeEventListener('mouseenter', blackColor)
        square.addEventListener('mouseenter', getRandomBackground)
    })
}

function getRandomBackground(e) {
    e.target.style.backgroundColor = colorRandomizer()
}

// enable toggling from Black to Psychadelic
function removeBlackEventListener() {
    let allSquares = document.querySelectorAll('#square')
    allSquares.forEach((square) => {
        square.removeEventListener('mouseenter', selectAllGridsBlack)
    })
}

function removePsychadelicEventListener() {
    let allSquares = document.querySelectorAll('#square')
    allSquares.forEach((square) => {
        square.removeEventListener('mouseenter', selectAllGridsPsychadelic )
    })
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

function setMode() {
        let changeButton = document.getElementById('change-mode')
        changeButton.addEventListener('click', changeBackground)
        changeButton.addEventListener('click', () => {
            changeButton.classList.toggle('change-day')
        })
        changeButton.addEventListener('click', changeBodyBackground)
    }

function changeBodyBackground() {
    const body = document.querySelector('body')
    body.classList.toggle('dark')
}

function changeBackground() {
    let gridWrap = document.querySelector('.grid-wrap')
    gridWrap.classList.toggle('grid-wrap-night')
}

//change image theme

//running the program
askUserForGrid();
setMode()



