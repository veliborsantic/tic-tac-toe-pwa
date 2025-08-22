import React from 'react'
import { styles } from '../styles/gameStyles'

/**
 * GameHistory component for displaying move history
 * @param {Object} props - Component props
 * @param {Array} props.history - Game history array
 * @param {number} props.currentMove - Current move index
 * @param {Function} props.onJumpTo - Jump to move handler
 * @returns {JSX.Element} GameHistory component
 */
export function GameHistory({ history, currentMove, onJumpTo }) {
  const getMoveDescription = (index) => {
    return index > 0 ? `Potez #${index}` : 'Početak igre'
  }

  const getButtonStyle = (index) => {
    return {
      ...styles.historyButton,
      ...(index === currentMove ? styles.activeHistoryButton : styles.inactiveHistoryButton)
    }
  }

  return (
    <div style={styles.historyContainer}>
      <h3 style={styles.historyTitle}>Istorija poteza:</h3>
      <ol style={styles.historyList}>
        {history.map((_, index) => (
          <li key={index} style={styles.historyItem}>
            <button 
              onClick={() => onJumpTo(index)}
              style={getButtonStyle(index)}
            >
              {getMoveDescription(index)}
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
