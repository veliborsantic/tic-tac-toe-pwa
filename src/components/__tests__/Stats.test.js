import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Stats } from '../Stats'

test('Stats displays values', () => {
  const stats = { xWins: 1, oWins: 2, draws: 3, totalGames: 6 }
  render(<Stats stats={stats} />)
  expect(screen.getByText(/X pobede:/)).toBeInTheDocument()
  expect(screen.getByText('1')).toBeInTheDocument()
  expect(screen.getByText('2')).toBeInTheDocument()
  expect(screen.getByText('3')).toBeInTheDocument()
  expect(screen.getByText('6')).toBeInTheDocument()
})


