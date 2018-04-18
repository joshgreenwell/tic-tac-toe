const main = require('./main')

let endGameSpy

beforeEach(() => {
  main.onload()
  endGameSpy = jest.fn(main, 'endGame').mockImplementation(() => {})
})

afterEach(() => {
  endGameSpy.mockClear()
})

test('accessors and mutators', () => {
  main.setMarkCount(1)
  expect(main.getMarkCount()).toEqual(1)

  main.setBoardState('a')
  expect(main.getBoardState()).toEqual('a')
})

test('clicked edits the box object as expected', () => {
  // Setup
  const box = { id: 'box0' }
  const expected = {
    id: 'box0',
    onclick: null,
    innerHTML: 'X'
  }

  // Function trigger
  main.clicked(box)

  // Validation
  expect(box).toEqual(expected)
  expect(main.getMarkCount()).toEqual(1)
});

test('updateBoardState updates boardState correctly', () => {
  // Setup
  const expected = 'X12 345 678 X36 147 258 246 X48'

  // Function trigger
  main.updateBoardState('X', 0)

  // Validation
  expect(main.getBoardState()).toEqual(expected)
});

test('checkWinner determines no winner', () => {
  // Setup
  const expected = '012 345 678 036 147 258 246 048'
  
  // Function trigger
  main.checkWinner(main.getBoardState())

  // Validation
  expect(main.getBoardState()).toEqual(expected)
  expect(endGameSpy).not.toHaveBeenCalled()
});


// Need to use a dom object to manage these...
// TODO: use framework to mock dom for unit tests
test.skip('endGame clears the onclicks', () => {
  // TODO: Test that the onlicks get removed
})

test.skip('checkWinner determines an X winner', () => {
  const expected = 'XXX 345 678 036 147 258 246 048'
  main.setBoardState(expected)
  main.checkWinner(main.getBoardState())

  expect(main.getBoardState()).toEqual(expected)
  expect(endGameSpy).toHaveBeenCalled()
  // TODO: spy on endGame to make sure it was called
});

test.skip('checkWinner determines an O winner', () => {
  const expected = 'OOO 345 678 036 147 258 246 048'
  main.setBoardState(expected)
  main.checkWinner(main.getBoardState())

  expect(main.getBoardState()).toEqual(expected)
  // TODO: spy on endGame to make sure it was called
});

test.skip('changeColor changes the correct positions', () => {
  // TODO: Test that the color has changed in the css
});