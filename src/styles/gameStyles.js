// Game styles
export const styles = {
  // Layout styles
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'monospace',
    padding: '2rem',
    minHeight: '100vh',
    backgroundColor: 'linear-gradient(135deg, #a8e6cf 0%, #88d8c0 50%, #6bcb77 100%)'
  },

  title: {
    marginBottom: '2rem',
    color: '#ffffff',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },

  gameLayout: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  },

  // Board styles
  boardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    width: 'calc(3 * 2.5rem)',
    height: 'calc(3 * 2.5rem)',
    border: '1px solid #999',
  },

  // Square styles
  square: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#fff',
    border: '1px solid #999',
    outline: 0,
    borderRadius: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '2.5rem',
    height: '2.5rem',
    transition: 'background-color 0.2s ease',
    cursor: 'pointer',
    color: '#000',
    userSelect: 'none'
  },

  winningSquare: {
    backgroundColor: '#4ade80'
  },

  disabledSquare: {
    cursor: 'default'
  },

  // Status styles
  status: {
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  },

  winnerStatus: {
    color: '#dc2626'
  },

  // Button styles
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  },

  primaryButton: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },

  secondaryButton: {
    backgroundColor: '#6b7280',
    color: 'white'
  },

  buttonContainer: {
    marginTop: '1rem',
    display: 'flex',
    gap: '0.5rem'
  },

  // History styles
  historyContainer: {
    minWidth: '200px'
  },

  historyTitle: {
    margin: '0 0 1rem 0',
    color: '#374151'
  },

  historyList: {
    padding: 0,
    margin: 0
  },

  historyItem: {
    margin: '0.5rem 0'
  },

  historyButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    width: '100%',
    textAlign: 'left'
  },

  activeHistoryButton: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },

  inactiveHistoryButton: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },

  // Stats styles
  statsContainer: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },

  statsTitle: {
    margin: '0 0 0.5rem 0',
    color: '#374151'
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: '#374151'
  },

  statsValue: {
    color: '#1f2937'
  },

  // PWA styles
  pwaContainer: {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },

  statusIndicator: {
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  installPrompt: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    zIndex: 1001,
    maxWidth: '300px',
    width: '90%'
  },

  installContent: {
    textAlign: 'center'
  },

  installTitle: {
    margin: '0 0 0.5rem 0',
    color: '#1f2937',
    fontSize: '1.1rem'
  },

  installText: {
    margin: '0 0 1rem 0',
    color: '#6b7280',
    fontSize: '0.9rem'
  },

  installButtons: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center'
  },

  pwaActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },

  installedStatus: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#10b981',
    color: 'white',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textAlign: 'center'
  }
}
