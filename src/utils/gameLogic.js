import { WINNING_LINES } from '../constants/gameConstants'

/**
 * Calculates the winner of the game based on the current board state
 * @param {Array} squares - Current board state
 * @returns {string|null} - Winner ('X' or 'O') or null if no winner
 */
export function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

/**
 * Gets the winning line coordinates for highlighting
 * @param {Array} squares - Current board state
 * @returns {Array|null} - Winning line coordinates or null if no winner
 */
export function getWinningLine(squares) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return line
    }
  }
  return null
}

/**
 * Calculates the number of remaining turns
 * @param {Array} squares - Current board state
 * @returns {number} - Number of empty squares
 */
export function calculateRemainingTurns(squares) {
  return squares.filter(square => !square).length
}

/**
 * Determines if the game is a draw
 * @param {Array} squares - Current board state
 * @returns {boolean} - True if game is a draw
 */
export function isDraw(squares) {
  return squares.every(square => square !== null)
}

/**
 * Calculates the game status message
 * @param {string|null} winner - Winner of the game
 * @param {number} remainingTurns - Number of remaining turns
 * @param {string} currentPlayer - Current player ('X' or 'O')
 * @returns {string} - Status message
 */
export function calculateStatus(winner, remainingTurns, currentPlayer) {
  if (winner) return `Pobednik: ${winner}`
  if (remainingTurns === 0) return 'Nerešeno!'
  return `Sledeći igrač: ${currentPlayer}`
}

/**
 * Determines the next player based on current move
 * @param {number} currentMove - Current move number
 * @returns {string} - Next player ('X' or 'O')
 */
export function getNextPlayer(currentMove) {
  return currentMove % 2 === 0 ? 'X' : 'O'
}
