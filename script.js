

//creating the Grid

function createColumn() {
    let col = document.createElement('div');
    col.setAttribute('id', 'col');
    return col;
}

function createCell() {
    let cell = document.createElement('div');
    cell.setAttribute('id', 'cell')
    return cell;
}

function createGrid(cols, cells) {
    let container = document.querySelector('#container');

    for (i = cols; i > 0; i--) {
        let col = createColumn()
        container.appendChild(col)

        for (j = cells; j > 0; j--) {
                let cell = createCell()
                col.appendChild(cell)
        }
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
        window.location.reload()
}


//running the program
createGrid(10, 4);
changeAllCellColor()
buttonChange();
removeButtonChange();


