import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Square } from '../Square'

test('Square renders value and handles click', () => {
  const handle = jest.fn()
  render(<Square value={'X'} onSquareClick={handle} isWinning={false} />)
  expect(screen.getByText('X')).toBeInTheDocument()
  fireEvent.click(screen.getByText('X'))
  expect(handle).toHaveBeenCalledTimes(1)
})

test('Square applies winning style', () => {
  render(<Square value={null} onSquareClick={() => {}} isWinning={true} index={0} />)
  const div = screen.getByTestId('square-0')
  expect(div).toBeInTheDocument()
})


