

//creating the Grid


function createCell() {
    let cell = document.createElement('div');
    cell.setAttribute('id', 'cell')
    return cell;
}

function createGrid(input) {

    let container = document.querySelector('#container');
        for (j = input * input; j > 0; j--) {
                let cell = createCell()
                container.appendChild(cell)
        }
    }


//adding events to grid cells

function changeAllCellColor() {
    let allCells = document.querySelectorAll('#cell')
    allCells.forEach((item) => {
        item.addEventListener('mouseover', changeColor)
    })
}

function changeColor (e) {
    e.target.style.background = "yellow"
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
        input = prompt('Enter a single digit less than 100 to create a L x W square .\n Hint: The smaller the number, the bigger the pixels')
    }   while (isNaN(input) || input > 100 || input <= 0)

    return input;
}

function askUser() {
    let gridSizeButton = document.querySelector('#grid-size')
    gridSizeButton.addEventListener('click', function () {
        const input = userInput()
        createGrid(input);
        changeAllCellColor()

    })
}

//running the program
askUser();
buttonChange();
removeButtonChange();



