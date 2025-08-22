import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GameHistory } from '../GameHistory'

test('GameHistory renders moves and calls onJumpTo', () => {
  const history = [[], ['X'], ['X','O']]
  const onJumpTo = jest.fn()
  render(<GameHistory history={history} currentMove={1} onJumpTo={onJumpTo} />)
  expect(screen.getByText('Početak igre')).toBeInTheDocument()
  expect(screen.getByText('Potez #1')).toBeInTheDocument()
  fireEvent.click(screen.getByText('Potez #1'))
  expect(onJumpTo).toHaveBeenCalledWith(1)
})


