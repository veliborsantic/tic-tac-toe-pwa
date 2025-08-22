import { Square } from './Square'
import { styles } from '../styles/gameStyles'
import { 
  calculateWinner, 
  calculateRemainingTurns, 
  calculateStatus,
  getNextPlayer 
} from '../utils/gameLogic'

/**
 * Board component for the Tic-tac-toe game
 * @param {Object} props - Component props
 * @param {boolean} props.xIsNext - Whether X is the next player
 * @param {Array} props.squares - Current board state
 * @param {Function} props.onPlay - Play handler function
 * @param {Array|null} props.winningLine - Winning line coordinates
 * @returns {JSX.Element} Board component
 */
export function Board({ xIsNext, squares, onPlay, winningLine }) {
  const winner = calculateWinner(squares)
  const remainingTurns = calculateRemainingTurns(squares)
  const currentPlayer = getNextPlayer(xIsNext ? 0 : 1)
  const status = calculateStatus(winner, remainingTurns, currentPlayer)

  const handleSquareClick = (index) => {
    if (squares[index] || winner) return
    onPlay(index)
  }

  const statusStyle = {
    ...styles.status,
    ...(winner && styles.winnerStatus)
  }

  return (
    <>
      <div style={statusStyle}>
        {status}
      </div>
      <div style={styles.boardContainer}>
        {squares.map((value, index) => (
          <Square
            key={`square-${index}`}
            value={value}
            onSquareClick={() => handleSquareClick(index)}
            isWinning={winningLine && winningLine.includes(index)}
          />
        ))}
      </div>
    </>
  )
}
