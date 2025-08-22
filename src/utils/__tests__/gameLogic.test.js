describe('gameLogic utilities', () => {
  test('calculateWinner returns correct winner or null', async () => {
    const { calculateWinner } = await import('../gameLogic')
    const xWin = ['X','X','X',null,null,null,null,null,null]
    const oWin = [null,null,null,'O','O','O',null,null,null]
    const none = [null,'X',null,'O',null,null,null,null,null]

    expect(calculateWinner(xWin)).toBe('X')
    expect(calculateWinner(oWin)).toBe('O')
    expect(calculateWinner(none)).toBeNull()
  })

  test('getWinningLine returns winning coordinates or null', async () => {
    const { getWinningLine } = await import('../gameLogic')
    const line = ['X','X','X',null,null,null,null,null,null]
    expect(getWinningLine(line)).toEqual([0,1,2])
    const none = [null,'X',null,'O',null,null,null,null,null]
    expect(getWinningLine(none)).toBeNull()
  })

  test('calculateRemainingTurns counts empty squares', async () => {
    const { calculateRemainingTurns } = await import('../gameLogic')
    expect(calculateRemainingTurns([null,null,null])).toBe(3)
    expect(calculateRemainingTurns(['X',null,'O'])).toBe(1)
  })

  test('isDraw returns true only when no nulls', async () => {
    const { isDraw } = await import('../gameLogic')
    expect(isDraw(['X','O','X','X','O','X','O','X','O'])).toBe(true)
    expect(isDraw(['X','O',null])).toBe(false)
  })

  test('calculateStatus shows winner, draw, or next player', async () => {
    const { calculateStatus } = await import('../gameLogic')
    expect(calculateStatus('X', 3, 'X')).toBe('Pobednik: X')
    expect(calculateStatus(null, 0, 'O')).toBe('Nerešeno!')
    expect(calculateStatus(null, 2, 'X')).toBe('Sledeći igrač: X')
  })

  test('getNextPlayer alternates X and O', async () => {
    const { getNextPlayer } = await import('../gameLogic')
    expect(getNextPlayer(0)).toBe('X')
    expect(getNextPlayer(1)).toBe('O')
    expect(getNextPlayer(2)).toBe('X')
  })
})


