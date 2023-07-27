
function attachCell() {
    let container = document.querySelector('#container')
    let cell = document.createElement('div')

    cell.setAttribute('id', 'cell')
    container.appendChild(cell)
    
}

function loopCells(cells) {
    for (i = cells; i > 0; i--) {
        attachCell()
    }
}

loopCells(16)