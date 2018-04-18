// es6 const works like final
const winningCombinations = '012 345 678 036 147 258 246 048' // every 3 numbers is a winning combination

let markCount // number of marks places on the board
let boardState // current state of the board

/*
  description: when the page loads this will happen
  params: none
  return: none
*/
window.onload = () => {
  // Selection disable
  document.onselectstart = () =>  false // ie
  document.onmousedown = () => false    // all other browsers cause ie is shit

  // Init globals
  setMarkCount(0)
  setBoardState(winningCombinations)

  // Add onclick to all elements that start with 'box'
  const arr = document.querySelectorAll('*[id^="box"]')
  arr.forEach(item => item.onclick = () => clicked(item))
}

/*
  description: sets the inner html of the passed elemt to an 'X' with some styling
  params: box - html element
  return: none
*/
const clicked = box => {
  const mark = markCount % 2 === 0 ? "X" : "O"
  const squareNumber = box.id.charAt(box.id.length-1)

  box.onclick = null
  box.innerHTML = mark
  
  updateBoardState(mark, squareNumber)
  setMarkCount(getMarkCount() + 1)
  checkWinner()
}

/*
  description: updates the boardState global with the new state based on the mark
  params: mark - String
          squareNumber - String
  return: none
*/
const updateBoardState = (mark, squareNumber) => {
  const regex = new RegExp(squareNumber, 'g')
  const localState = getBoardState().replace(regex, mark)
  setBoardState(localState)
}

/*
  description: checks for a winner and updates the game accordingly
  params: none
  return: none
*/
const checkWinner = () => {
  const localState = getBoardState()
  const x = localState.indexOf('XXX')
  const o = localState.indexOf('OOO')

  if (x > -1) { changeColor(x) }
  else if (o > -1) { changeColor(o) }
}

const changeColor = index => {
  // const combo = winningCombinations.substring(index, index+3)
  // const regex = new RegExp(`([id$="x${combo[0]}"])|([id$="x${combo[1]}"])|([id$="x${combo[2]}"])`, 'g')
  // console.log(regex)
  // const arr = document.querySelectorAll(regex)
  // arr.forEach(item => item.style.color = 'red')
}

// --- Accessors/Mutators for Globals --- //

/*
  accessor: for markCount global
  params: none
  return: markCount global
*/
const getMarkCount = () =>  markCount

/*
  mutator: for markCount global
  params: newCount - new value for markCount global
  return: none
*/
const setMarkCount = newCount => { markCount = newCount }

/*
  accessor: for boardState global
  params: none
  return: boardState global
*/
const getBoardState = () =>  boardState

/*
  mutator: for boardState global
  params: newState - new value for boardState global
  return: none
*/
const setBoardState = newState => { boardState = newState }

// Export the functions we want to test
module.exports = {
  onload: window.onload,
  
  clicked,
  updateBoardState,
  checkWinner,
  changeColor,

  getMarkCount,
  setMarkCount,
  getBoardState,
  setBoardState
}