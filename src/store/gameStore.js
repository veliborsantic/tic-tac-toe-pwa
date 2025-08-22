import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { 
  GAME_STATUS, 
  INITIAL_BOARD, 
  INITIAL_STATS 
} from '../constants/gameConstants'
import { 
  calculateWinner, 
  getWinningLine, 
  isDraw, 
  getNextPlayer 
} from '../utils/gameLogic'

// Load initial state from localStorage
const loadInitialState = () => {
  if (typeof window !== 'undefined') {
    try {
      const savedStats = localStorage.getItem('tic-tac-toe-stats')
      return savedStats ? JSON.parse(savedStats) : INITIAL_STATS
    } catch (error) {
      console.error('Error loading from localStorage:', error)
      return INITIAL_STATS
    }
  }
  return INITIAL_STATS
}

/**
 * Zustand store for game state management
 */
export const useGameStore = create(
  combine(
    {
      // Initial state
      history: [INITIAL_BOARD],
      currentMove: 0,
      gameStatus: GAME_STATUS.PLAYING,
      winner: null,
      winningLine: null,
      stats: loadInitialState()
    },
    (set, get) => ({
      /**
       * Makes a move on the board
       * @param {number} squareIndex - Index of the square to play
       */
      makeMove: (squareIndex) => {
        const { history, currentMove, stats } = get()
        const currentSquares = history[currentMove]
        
        // Validate move
        if (currentSquares[squareIndex] || get().gameStatus !== GAME_STATUS.PLAYING) {
          return
        }
        
        // Create new board state
        const nextSquares = [...currentSquares]
        const nextPlayer = getNextPlayer(currentMove)
        nextSquares[squareIndex] = nextPlayer
        
        // Update history
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        const nextMove = nextHistory.length - 1
        
        // Check game state
        const winner = calculateWinner(nextSquares)
        const winningLine = winner ? getWinningLine(nextSquares) : null
        const draw = !winner && isDraw(nextSquares)
        
        // Determine game status
        let gameStatus = GAME_STATUS.PLAYING
        if (winner) gameStatus = GAME_STATUS.WINNER
        else if (draw) gameStatus = GAME_STATUS.DRAW
        
        // Update statistics if game ended
        const newStats = updateStats(stats, gameStatus, winner)
        
        set({
          history: nextHistory,
          currentMove: nextMove,
          gameStatus,
          winner,
          winningLine,
          stats: newStats
        })
        
        // Save to localStorage
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem('tic-tac-toe-stats', JSON.stringify(newStats))
          } catch (error) {
            console.error('Error saving to localStorage:', error)
          }
        }
      },
      
      /**
       * Jumps to a specific move in history
       * @param {number} moveIndex - Index of the move to jump to
       */
      jumpTo: (moveIndex) => {
        const { history } = get()
        const currentSquares = history[moveIndex]
        
        // Recalculate game state for the selected move
        const winner = calculateWinner(currentSquares)
        const winningLine = winner ? getWinningLine(currentSquares) : null
        const draw = !winner && isDraw(currentSquares)
        
        let gameStatus = GAME_STATUS.PLAYING
        if (winner) gameStatus = GAME_STATUS.WINNER
        else if (draw) gameStatus = GAME_STATUS.DRAW
        
        set({
          currentMove: moveIndex,
          gameStatus,
          winner,
          winningLine
        })
      },
      
      /**
       * Resets the game to initial state
       */
      resetGame: () => {
        set({
          history: [INITIAL_BOARD],
          currentMove: 0,
          gameStatus: GAME_STATUS.PLAYING,
          winner: null,
          winningLine: null
        })
      },
      
      /**
       * Resets game statistics
       */
              resetStats: () => {
          set({
            stats: INITIAL_STATS
          })
          
          // Clear from localStorage
          if (typeof window !== 'undefined') {
            try {
              localStorage.removeItem('tic-tac-toe-stats')
            } catch (error) {
              console.error('Error clearing localStorage:', error)
            }
          }
        }
    })
  )
)

/**
 * Updates game statistics based on game result
 * @param {Object} currentStats - Current statistics
 * @param {string} gameStatus - Current game status
 * @param {string|null} winner - Winner of the game
 * @returns {Object} Updated statistics
 */
function updateStats(currentStats, gameStatus, winner) {
  const newStats = { ...currentStats }
  
  if (gameStatus === GAME_STATUS.WINNER) {
    if (winner === 'X') newStats.xWins++
    else newStats.oWins++
    newStats.totalGames++
  } else if (gameStatus === GAME_STATUS.DRAW) {
    newStats.draws++
    newStats.totalGames++
  }
  
  return newStats
}
