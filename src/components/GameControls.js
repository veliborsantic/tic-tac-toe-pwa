import React from 'react'
import { styles } from '../styles/gameStyles'

/**
 * GameControls component for game control buttons
 * @param {Object} props - Component props
 * @param {Function} props.onResetGame - Reset game handler
 * @param {Function} props.onResetStats - Reset stats handler
 * @returns {JSX.Element} GameControls component
 */
export function GameControls({ onResetGame, onResetStats }) {
  return (
    <div style={styles.buttonContainer}>
      <button 
        onClick={onResetGame}
        style={{ ...styles.button, ...styles.primaryButton }}
      >
        Nova igra
      </button>
      
      <button 
        onClick={onResetStats}
        style={{ ...styles.button, ...styles.secondaryButton }}
      >
        Reset statistike
      </button>
    </div>
  )
}
