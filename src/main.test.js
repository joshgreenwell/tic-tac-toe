const main = require('./main')

beforeEach(() => {
  main.onload()
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
  const expected = 'X12 345 678 X36 147 258 246 X48'
  main.updateBoardState('X', 0)
  expect(main.getBoardState()).toEqual(expected)
});

test('checkWinner determines no winner', () => {
  const expected = '012 345 678 036 147 258 246 048'
  main.checkWinner(main.getBoardState())

  expect(main.getBoardState()).toEqual(expected)
  // TODO: spy on changeColor to make sure it is not called
});

test('checkWinner determines an X winner', () => {
  const expected = 'XXX 345 678 036 147 258 246 048'
  main.setBoardState(expected)
  main.checkWinner(main.getBoardState())

  expect(main.getBoardState()).toEqual(expected)
  // TODO: spy on changeColor to make sure it was called
});

test('checkWinner determines an O winner', () => {
  const expected = 'OOO 345 678 036 147 258 246 048'
  main.setBoardState(expected)
  main.checkWinner(main.getBoardState())

  expect(main.getBoardState()).toEqual(expected)
  // TODO: spy on changeColor to make sure it was called
});

test.skip('changeColor changes the correct positions', () => {
  // TODO: changeColor still needs to be written
});