

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
    })
}

function changeColor (e) {
    e.target.style.background="yellow"
}

//running the program
createGrid(16, 16);
changeAllCellColor()
