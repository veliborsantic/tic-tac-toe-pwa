import React from 'react'
import { styles } from '../styles/gameStyles'

/**
 * Square component for the Tic-tac-toe board
 * @param {Object} props - Component props
 * @param {string|null} props.value - Value to display ('X', 'O', or null)
 * @param {Function} props.onSquareClick - Click handler function
 * @param {boolean} props.isWinning - Whether this square is part of winning line
 * @returns {JSX.Element} Square component
 */
export function Square({ value, onSquareClick, isWinning, index }) {
  const squareStyle = {
    ...styles.square,
    ...(isWinning && styles.winningSquare),
    ...(value && styles.disabledSquare)
  }

  return (
    <div
      style={squareStyle}
      data-testid={index !== undefined ? `square-${index}` : 'square'}
      onClick={onSquareClick}
    >
      {value || ''}
    </div>
  )
}
