import { usePWA } from '../hooks/usePWA'
import { styles } from '../styles/gameStyles'

/**
 * PWA Status component for showing install prompt and online status
 * @returns {JSX.Element} PWA status component
 */
export function PWAStatus() {
  const {
    isInstalled,
    isOnline,
    showInstallPrompt,
    installApp,
    requestNotificationPermission,
    sendNotification
  } = usePWA()

  const handleInstallClick = () => {
    installApp()
  }

  const handleNotificationPermission = async () => {
    const granted = await requestNotificationPermission()
    if (granted) {
      sendNotification('Tic-tac-toe', {
        body: 'Notifikacije su omogućene!',
        tag: 'notification-permission'
      })
    }
  }

  const handleTestNotification = () => {
    sendNotification('Tic-tac-toe', {
      body: 'Ovo je test notifikacija!',
      tag: 'test-notification'
    })
  }

  return (
    <div style={styles.pwaContainer}>
      {/* Online/Offline Status */}
      <div style={{
        ...styles.statusIndicator,
        backgroundColor: isOnline ? '#10b981' : '#ef4444'
      }}>
        {isOnline ? '🟢 Online' : '🔴 Offline'}
      </div>

      {/* Install Prompt */}
      {showInstallPrompt && !isInstalled && (
        <div style={styles.installPrompt}>
          <div style={styles.installContent}>
            <h4 style={styles.installTitle}>Instaliraj aplikaciju</h4>
            <p style={styles.installText}>
              Instalirajte Tic-tac-toe za bolje iskustvo igranja!
            </p>
            <div style={styles.installButtons}>
              <button
                onClick={handleInstallClick}
                style={{ ...styles.button, ...styles.primaryButton }}
              >
                Instaliraj
              </button>
              <button
                onClick={() => window.location.reload()}
                style={{ ...styles.button, ...styles.secondaryButton }}
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PWA Actions */}
      <div style={styles.pwaActions}>
        <button
          onClick={handleNotificationPermission}
          style={{ ...styles.button, ...styles.secondaryButton, fontSize: '0.8rem' }}
        >
          Omogući notifikacije
        </button>
        <button
          onClick={handleTestNotification}
          style={{ ...styles.button, ...styles.secondaryButton, fontSize: '0.8rem' }}
        >
          Test notifikacija
        </button>
      </div>

      {/* Installed Status */}
      {isInstalled && (
        <div style={styles.installedStatus}>
          ✅ Aplikacija je instalirana
        </div>
      )}
    </div>
  )
}
