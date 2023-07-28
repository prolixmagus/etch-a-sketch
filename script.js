
let selectedRow = document.querySelector('#row')
let container = document.querySelector('#container')

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

function CreateGrid(rows, cells) {
    for (i = rows; i > 0; i--) {
        let row = createRow()
        container.appendChild(row)

        for (j = cells; j > 0; j--) {
                let cell = createCell()
                row.appendChild(cell)
        }
    }
}

CreateGrid(16, 16);