import { styles } from '../styles/gameStyles'

/**
 * Stats component for displaying game statistics
 * @param {Object} props - Component props
 * @param {Object} props.stats - Game statistics object
 * @returns {JSX.Element} Stats component
 */
export function Stats({ stats }) {
  return (
    <div style={styles.statsContainer}>
      <h3 style={styles.statsTitle}>Statistika</h3>
      <div style={styles.statsGrid}>
        <div>X pobede: <strong style={styles.statsValue}>{stats.xWins}</strong></div>
        <div>O pobede: <strong style={styles.statsValue}>{stats.oWins}</strong></div>
        <div>Nerešeno: <strong style={styles.statsValue}>{stats.draws}</strong></div>
        <div>Ukupno igara: <strong style={styles.statsValue}>{stats.totalGames}</strong></div>
      </div>
    </div>
  )
}
