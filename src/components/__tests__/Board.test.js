import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Board } from '../Board'

test('Board renders status and squares and handles clicks', () => {
  const squares = [null,null,null,null,null,null,null,null,null]
  const onPlay = jest.fn()
  render(<Board xIsNext={true} squares={squares} onPlay={onPlay} winningLine={null} />)
  expect(screen.getByText(/Sledeći igrač:/)).toBeInTheDocument()
  const cell = screen.getByTestId('square-0')
  fireEvent.click(cell)
  expect(onPlay).toHaveBeenCalledWith(0)
})

test('Board prevents clicking filled square or when winner exists', () => {
  const squares = ['X',null,null,null,null,null,null,null,null]
  const onPlay = jest.fn()
  render(<Board xIsNext={true} squares={squares} onPlay={onPlay} winningLine={null} />)
  const cells = screen.getAllByText('')
  fireEvent.click(cells[0])
  expect(onPlay).not.toHaveBeenCalled()
})


