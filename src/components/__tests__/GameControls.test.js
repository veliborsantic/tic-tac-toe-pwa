import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GameControls } from '../GameControls'

test('GameControls buttons call handlers', () => {
  const resetGame = jest.fn()
  const resetStats = jest.fn()
  render(<GameControls onResetGame={resetGame} onResetStats={resetStats} />)
  fireEvent.click(screen.getByText('Nova igra'))
  fireEvent.click(screen.getByText('Reset statistike'))
  expect(resetGame).toHaveBeenCalled()
  expect(resetStats).toHaveBeenCalled()
})


