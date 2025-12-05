import { useEffect, useCallback, useRef, useState } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import './UnityAvatarModal.css'

function UnityAvatarModal({ isOpen, onClose }) {
  const [showSavePopup, setShowSavePopup] = useState(false)
  const [showCompletePopup, setShowCompletePopup] = useState(false)
  const savedUuidRef = useRef(null)

  // Set page config before Unity loads (for jslib to read in Awake)
  useEffect(() => {
    window.pageConfig = 'AvatarHub'
    console.log('[WebGL] Set window.pageConfig:', window.pageConfig)
  }, [])

  const { unityProvider, loadingProgression, isLoaded, sendMessage, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.loader.js',
    dataUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.data',
    frameworkUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.framework.js',
    codeUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.wasm',
    productName: "FUZE Avatar Hub"
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle OnStateChanged event from Unity
  const handleStateChanged = useCallback((data) => {
    console.log('[WebGL] OnStateChanged received:', data)
    console.log('[WebGL] isLoaded status:', isLoaded)

    if (data === 'SceneLoaded') {
      console.log('[WebGL] Scene loaded')

      if (!isLoaded) {
        console.warn('[WebGL] Unity is not fully loaded yet! Waiting for isLoaded to be true...')
        return
      }

      console.log('[WebGL] Unity is fully loaded, calling LoadDefaultAvatar_ForHub')
      try {
        sendMessage('System', 'LoadDefaultAvatar_ForHub')
        console.log('[WebGL] Message sent successfully to Unity')
      } catch (error) {
        console.error('[WebGL] Error sending message:', error)
      }
    } else if (data === 'CloseAvatarModal') {
      console.log('[WebGL] CloseAvatarModal received')
      // If no UUID saved, just close the modal
      if (!savedUuidRef.current) {
        console.log('[WebGL] No UUID saved, closing modal directly')
        onClose()
      } else {
        console.log('[WebGL] UUID exists, showing save popup')
        setShowSavePopup(true)
      }
    }
  }, [sendMessage, isLoaded])

  // Send message when Unity is fully loaded
  useEffect(() => {
    if (isLoaded && isOpen) {
      console.log('[WebGL] Unity is now fully loaded! Sending LoadDefaultAvatar_ForHub...')
      try {
        sendMessage('System', 'LoadDefaultAvatar_ForHub')
        console.log('[WebGL] Message sent on load complete')
      } catch (error) {
        console.error('[WebGL] Error sending message on load:', error)
      }
    }
  }, [isLoaded, isOpen, sendMessage])

  // Handle OnChangedAvatar event from Unity - just store UUID in memory
  const handleChangedAvatar = useCallback((uuid) => {
    console.log('[WebGL] Avatar changed with UUID:', uuid)
    savedUuidRef.current = uuid
    console.log('[WebGL] UUID saved to memory')
  }, [])

  // Handle save and close - open new tab and show completion popup
  const handleSaveAndClose = useCallback(() => {
    if (savedUuidRef.current) {
      // Determine environment based on hostname
      const isDev = window.location.hostname === 'localhost' ||
                    window.location.hostname.includes('dev') ||
                    window.location.hostname.includes('127.0.0.1')

      // Build URL based on environment
      const baseUrl = isDev
        ? 'https://dev-web.fuzeapp.services/login'
        : 'https://fuze.io/login'

      const loginUrl = `${baseUrl}/?avatar_preset_uuid=${savedUuidRef.current}`

      console.log('[WebGL] Opening in new tab:', loginUrl)

      // Open in new tab
      window.open(loginUrl, '_blank', 'noopener,noreferrer')
    }

    // Close save popup and show completion popup
    setShowSavePopup(false)
    setShowCompletePopup(true)
  }, [])

  // Handle close without saving
  const handleCloseWithoutSaving = useCallback(() => {
    setShowSavePopup(false)
    savedUuidRef.current = null
    onClose()
  }, [onClose])

  // Handle popup cancel (just close popup, keep modal open)
  const handleCancelPopup = useCallback(() => {
    setShowSavePopup(false)
  }, [])

  // Handle completion confirmation - close everything
  const handleCompleteConfirm = useCallback(() => {
    setShowCompletePopup(false)
    savedUuidRef.current = null
    onClose()
  }, [onClose])

  // Handle completion cancel - go back to Unity
  const handleCompleteCancel = useCallback(() => {
    setShowCompletePopup(false)
  }, [])

  // Register event listeners
  useEffect(() => {
    console.log('[WebGL] Registering Unity event listeners')
    addEventListener('OnStateChanged', handleStateChanged)
    addEventListener('OnChangedAvatar', handleChangedAvatar)
    console.log('[WebGL] Event listeners registered')

    return () => {
      console.log('[WebGL] Removing Unity event listeners')
      removeEventListener('OnStateChanged', handleStateChanged)
      removeEventListener('OnChangedAvatar', handleChangedAvatar)
    }
  }, [addEventListener, removeEventListener, handleStateChanged, handleChangedAvatar])

  if (!isOpen) return null

  return (
    <div className="unity-modal-overlay">
      <div className="unity-modal-content">
        <div className="unity-container">
          {!isLoaded && (
            <div className="unity-loading">
              <p className="loading-text">
                Getting avatar ready...
              </p>
              <div className="loading-bar">
                <div
                  className="loading-progress"
                  style={{ width: `${loadingProgression * 100}%` }}
                />
              </div>
            </div>
          )}
          <Unity
            unityProvider={unityProvider}
            style={{
              width: '100%',
              height: '100%',
              visibility: isLoaded ? 'visible' : 'hidden'
            }}
          />
        </div>
      </div>

      {showSavePopup && (
        <div className="save-popup-overlay">
          <div className="save-popup">
            <div className="save-popup-logo">
              <img src="/Logo_FUZE.png" alt="FUZE" />
            </div>
            <h3>Save your style? Join FUZE to save your avatar</h3>
            <p>If you leave now, your changes will be lost.</p>
            <div className="save-popup-buttons">
              <button className="btn-save" onClick={handleSaveAndClose}>
                Join FUZE & Save
              </button>
              <button className="btn-leave" onClick={handleCloseWithoutSaving}>
                Leave Without Saving
              </button>
              <button className="btn-back" onClick={handleCancelPopup}>
                Go Back to Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {showCompletePopup && (
        <div className="save-popup-overlay">
          <div className="save-popup complete-popup">
            <h3>Registration Complete?</h3>
            <p className="complete-message">If you've finished signing up for FUZE,<br />click Complete to close this window.</p>
            <div className="complete-buttons">
              <button className="btn-cancel-complete" onClick={handleCompleteCancel}>
                Not Yet
              </button>
              <button className="btn-complete" onClick={handleCompleteConfirm}>
                Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UnityAvatarModal
