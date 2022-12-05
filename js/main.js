var gBoard
var gGameInterval
var gCurrNum=0


function onInit(elLevel) {
    var levelNum = elLevel.id
    var gBoard = createBoard(levelNum)
    renderBoard(gBoard)

}


function createBoard(num) {
    const nums = shuffleNumbers(num)
    const board = []
    for (var i = 0; i < Math.sqrt(num); i++) {
        board.push([])
        for (var j = 0; j < Math.sqrt(num); j++) {
            board[i][j] = nums[0]
            nums.shift()
        }
    }
    return board
}



function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            const cell = board[i][j]
            const className = board
            strHTML += `<button td data-i="${i}" data-j="${j}" onclick="onCellClicked(this,${board.length})" class="board">${cell}</button></td>`
        }
        strHTML += '</tr>'
    }
    const elBoard = document.querySelector('tbody.board')
    elBoard.innerHTML = strHTML

}

function onCellClicked(elCell,num) {
    var count=1
    if(count===1){}
    if (+(elCell.innerHTML) === gCurrNum + 1) {

        elCell.style.backgroundColor = 'rgba(210,91,42,255)'
        gCurrNum++
    }

    if(gCurrNum===num**2){
        victory()
        setTimeout(onCloseVictory,5000)
        gCurrNum=0
    }
}


function victory() {

    var strHTML = '<div class="winning">Game Over</div>'

    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function onCloseVictory() {
    var elWinning = document.querySelector('.winning')
    elWinning.style.display = 'none'
}


function shuffleNumbers(num) {
    const nums = []
    for (var i = 0; i < num; i++) {
        nums.push(i + 1)
    }
    const shuffledNums = nums.sort(() => Math.random() - 0.5)
    return shuffledNums
}