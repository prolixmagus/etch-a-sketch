

//creating the Grid

function createRow() {
    let row = document.createElement('div');
    row.setAttribute('id', 'row');
    return row;
}

function createCell() {
    let cell = document.createElement('div');
    cell.setAttribute('id', 'cell')
    return cell;
}

function createGrid(rows, cells) {
    let container = document.querySelector('#container');

    for (i = rows; i > 0; i--) {
        let row = createRow()
        container.appendChild(row)

        for (j = cells; j > 0; j--) {
                let cell = createCell()
                row.appendChild(cell)
        }
    }
}

//adding events to grid cells

function changeAllCellColor() {
    let allCells = document.querySelectorAll('#cell')
    allCells.forEach((item) => {
        item.addEventListener('mouseover', changeColor)
        console.log(item)
    })
}

function changeColor (e) {
    e.target.style.background = "yellow"
}

//button event

function buttonChange() {
    let buttons = document.querySelectorAll('#btn')
    buttons.forEach((item) => {
        item.addEventListener('click', addClass)
    })
}

function addClass(e) {
    e.target.classList.add('btn-change')
}

function removeButtonChange() {
    let buttons = document.querySelectorAll('#btn')
    buttons.forEach((item) => {
        item.addEventListener('transitionend', removeClass)
    })
}

function removeClass(e) {
    e.target.classList.remove('btn-change')
}

function reset() {
    let button = document.querySelector('.reset')
    button.addEventListener('click', () => { 
        window.location.reload()
    })
}

//running the program
createGrid(16, 16);
changeAllCellColor()
buttonChange();
removeButtonChange();
reset()


