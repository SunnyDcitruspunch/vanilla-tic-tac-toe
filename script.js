const cells = document.querySelectorAll('.cell')
const resetBtn = document.getElementById('reset')
let currentPlayer = 'X'
let winner = ''

Array.from(cells).forEach(cell => {
  cell.addEventListener('click', fillCell)
})

function fillCell(e) {
  const target = e.target
  target.value = currentPlayer
  checkCurrentStatus()
}

function checkCurrentStatus() {
  if(hasWinner()) {
    const winnerElement = document.querySelector('.winner')
    winnerElement.innerHTML = `${currentPlayer} Won!!`
  } else {
    updatePlayer()
  }
}

function hasWinner() {
  return hasHorizontalWinner() || hasVerticalWinner() || hasDiagonalWinner()
}

function hasVerticalWinner() {
  if(cell1.value && cell4.value && cell7.value && cell1.value === cell4.value && cell7.value === cell4.value) {
    return true
  }
  
  if(cell2.value && cell5.value && cell8.value && cell2.value === cell5.value && cell8.value === cell6.value) {
    return true
  }
  
  if(cell3.value && cell6.value && cell9.value && cell3.value === cell6.value && cell6.value === cell9.value) {
    return true
  }

  return false
}

function hasDiagonalWinner() {
  if(cell1.value && cell5.value && cell9.value && cell1.value === cell5.value && cell9.value === cell5.value) {
    return true
  }
  
  if(cell3.value && cell5.value && cell7.value && cell3.value === cell5.value && cell5.value === cell7.value) {
    return true
  }

  return false
}

const cell1 = document.getElementById("cell-1")
const cell2 = document.getElementById("cell-2")
const cell3 = document.getElementById("cell-3")
const cell4 = document.getElementById("cell-4")
const cell5 = document.getElementById("cell-5")
const cell6 = document.getElementById("cell-6")
const cell7 = document.getElementById("cell-7")
const cell8 = document.getElementById("cell-8")
const cell9 = document.getElementById("cell-9")

function hasHorizontalWinner() {
  if(cell1.value && cell2.value && cell3.value && cell1.value === cell2.value && cell2.value === cell3.value) {
    return true
  }
  
  if(cell4.value && cell5.value && cell6.value && cell4.value === cell5.value && cell5.value === cell6.value) {
    return true
  }
  
  if(cell7.value && cell8.value && cell9.value && cell7.value === cell8.value && cell8.value === cell9.value) {
    return true
  }

  return false
}

function updatePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

resetBtn.addEventListener('click', resetHistory)

function resetHistory() {
  Array.from(cells).forEach(cell => {
    cell.value = ''
  })
  const winnerElement = document.querySelector('.winner')
  winnerElement.innerHTML = ''
  currentPlayer = 'X'
}
