// Game constants
export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const GAME_STATUS = {
  PLAYING: 'playing',
  WINNER: 'winner',
  DRAW: 'draw'
}

export const PLAYERS = {
  X: 'X',
  O: 'O'
}

export const INITIAL_BOARD = Array(9).fill(null)
export const INITIAL_STATS = {
  xWins: 0,
  oWins: 0,
  draws: 0,
  totalGames: 0
}
