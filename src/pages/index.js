import { useGameStore } from '../store/gameStore'
import { Board } from '../components/Board'
import dynamic from 'next/dynamic'
// Stats is a named export; dynamic() expects a default export, so map to the named export
const Stats = dynamic(() => import('../components/Stats').then(mod => mod.Stats), { ssr: false })
import { GameHistory } from '../components/GameHistory'
import { GameControls } from '../components/GameControls'

import { styles } from '../styles/gameStyles'
import { getNextPlayer } from '../utils/gameLogic'

/**
 * Main Game component - orchestrates the entire Tic-tac-toe game
 * @returns {JSX.Element} Main game component
 */
export default function Game() {
  // Get game state and actions from Zustand store
  const {
    history,
    currentMove,
    winner,
    winningLine,
    stats,
    makeMove,
    jumpTo,
    resetGame,
    resetStats
  } = useGameStore()
  
  // Calculate derived state
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Tic-tac-toe sa Zustand
      </h1>
      
      <div style={styles.gameLayout}>
        {/* Game board and controls */}
        <div>
          <Board 
            xIsNext={xIsNext} 
            squares={currentSquares} 
            onPlay={makeMove}
            winningLine={winningLine}
          />
          
          <GameControls 
            onResetGame={resetGame}
            onResetStats={resetStats}
          />
          
          <Stats stats={stats} />
        </div>
        
        {/* Game history */}
        <GameHistory 
          history={history}
          currentMove={currentMove}
          onJumpTo={jumpTo}
        />
      </div>
    </div>
  )
}

