import { useEffect, useCallback, useRef, useState } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { track, trackButtonClick } from '../utils/mixpanel'
import './UnityAvatarModal.css'

function UnityAvatarModal({ isOpen, onClose }) {
  const [showSavePopup, setShowSavePopup] = useState(false)
  const [showCompletePopup, setShowCompletePopup] = useState(false)
  const [showSmallScreenPopup, setShowSmallScreenPopup] = useState(false)
  const [shouldLoadUnity, setShouldLoadUnity] = useState(false)
  const savedUuidRef = useRef(null)

  // Check screen size when modal opens
  useEffect(() => {
    if (isOpen) {
      track('Modal Opened', { modal_name: 'unity_avatar_modal' })
      if (window.innerWidth < 900) {
        setShowSmallScreenPopup(true)
        setShouldLoadUnity(false)
      } else {
        setShouldLoadUnity(true)
      }
    }
  }, [isOpen])

  // Handle small screen popup confirmation
  const handleSmallScreenConfirm = useCallback(() => {
    setShowSmallScreenPopup(false)
    setShouldLoadUnity(true)
  }, [])

  // Handle close during loading
  const handleCloseWhileLoading = useCallback(() => {
    setShouldLoadUnity(false)
    onClose()
  }, [onClose])

  // Set page config before Unity loads (for jslib to read in Awake)
  useEffect(() => {
    window.pageConfig = 'AvatarHub'
  }, [])

  // Determine environment based on hostname
  const isDev = window.location.hostname === 'localhost' ||
                window.location.hostname.includes('dev') ||
                window.location.hostname.includes('127.0.0.1') ||
                window.location.hostname === 'd3cbg89fw3t9m6.cloudfront.net'

  const unityBaseUrl = isDev
    ? 'https://d2l90i53wjxgno.cloudfront.net'
    : 'https://dc9hmifs54gdc.cloudfront.net'

  const { unityProvider, loadingProgression, isLoaded, sendMessage, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: `${unityBaseUrl}/Build/web.loader.js`,
    dataUrl: `${unityBaseUrl}/Build/web.data${isDev ? '' : '.br'}`,
    frameworkUrl: `${unityBaseUrl}/Build/web.framework.js${isDev ? '' : '.br'}`,
    codeUrl: `${unityBaseUrl}/Build/web.wasm${isDev ? '' : '.br'}`,
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
    if (data === 'SceneLoaded') {
      if (!isLoaded) {
        return
      }

      try {
        sendMessage('System', 'LoadDefaultAvatar_ForHub')
      } catch (error) {
        // Error sending message
      }
    } else if (data === 'CloseAvatarModal') {
      // If no UUID saved, just close the modal
      if (!savedUuidRef.current) {
        onClose()
      } else {
        setShowSavePopup(true)
      }
    }
  }, [sendMessage, isLoaded])

  // Send message when Unity is fully loaded
  useEffect(() => {
    if (isLoaded && isOpen) {
      try {
        sendMessage('System', 'LoadDefaultAvatar_ForHub')
      } catch (error) {
        // Error sending message
      }
    }
  }, [isLoaded, isOpen, sendMessage])

  // Handle OnChangedAvatar event from Unity - just store UUID in memory
  const handleChangedAvatar = useCallback((uuid) => {
    savedUuidRef.current = uuid
  }, [])

  // Handle save and close - open new tab and show completion popup
  const handleSaveAndClose = useCallback(() => {
    trackButtonClick('save_and_signup')
    if (savedUuidRef.current) {
      // Build URL based on environment
      const baseUrl = isDev
        ? 'https://dev-web.fuzeapp.services/login'
        : 'https://fuze.io/login'

      const loginUrl = `${baseUrl}/?avatar_preset_uuid=${savedUuidRef.current}`

      // Open in new tab
      window.open(loginUrl, '_blank', 'noopener,noreferrer')
    }

    // Close save popup and show completion popup
    setShowSavePopup(false)
    setShowCompletePopup(true)
  }, [isDev])

  // Handle close without saving
  const handleCloseWithoutSaving = useCallback(() => {
    trackButtonClick('leave_without_saving')
    setShowSavePopup(false)
    savedUuidRef.current = null
    onClose()
  }, [onClose])

  // Handle popup cancel (just close popup, keep modal open)
  const handleCancelPopup = useCallback(() => {
    trackButtonClick('back_to_editing')
    setShowSavePopup(false)
  }, [])

  // Handle completion confirmation - go to page 1
  const handleCompleteConfirm = useCallback(() => {
    trackButtonClick('done_and_close')
    window.location.href = window.location.pathname
  }, [])

  // Handle completion cancel - go back to Unity
  const handleCompleteCancel = useCallback(() => {
    trackButtonClick('not_yet_back_to_editing')
    setShowCompletePopup(false)
  }, [])

  // Register event listeners
  useEffect(() => {
    addEventListener('OnStateChanged', handleStateChanged)
    addEventListener('OnChangedAvatar', handleChangedAvatar)

    return () => {
      removeEventListener('OnStateChanged', handleStateChanged)
      removeEventListener('OnChangedAvatar', handleChangedAvatar)
    }
  }, [addEventListener, removeEventListener, handleStateChanged, handleChangedAvatar])

  if (!isOpen) return null

  return (
    <div className="unity-modal-overlay">
      <div className="unity-modal-content">
        {!isLoaded && (
          <button className="unity-close-btn" onClick={handleCloseWhileLoading}>
            <img src="/close_button.png" alt="Close" />
          </button>
        )}
        <div className="unity-container">
          {shouldLoadUnity ? (
            <>
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
            </>
          ) : (
            <div className="unity-loading">
              <p className="loading-text">
                Getting avatar ready...
              </p>
            </div>
          )}
        </div>
      </div>

      {showSavePopup && (
        <div className="save-popup-overlay">
          <div className="save-popup">
            <div className="save-popup-logo">
              <img src="/Logo_FUZE.png" alt="FUZE" />
            </div>
            <h2>Save your avatar before leaving?</h2>
            <p>Create a free account to keep this look.</p>
            <div className="save-popup-buttons">
              <button className="btn-save" onClick={handleSaveAndClose}>
                Save & sign up
              </button>
              <button className="btn-leave" onClick={handleCloseWithoutSaving}>
                Leave without saving
              </button>
              <button className="btn-back" onClick={handleCancelPopup}>
                Back to editing
              </button>
            </div>
          </div>
        </div>
      )}

      {showCompletePopup && (
        <div className="save-popup-overlay">
          <div className="save-popup complete-popup">
            <h2>Have you completed sign-up?</h2>
            <p className="complete-message">Please finish your signup in the new tab.<br />Once it's done, your avatar will be saved.</p>
            <div className="complete-buttons">
              <button className="btn-complete" onClick={handleCompleteConfirm}>
                Done & close
              </button>
              <button className="btn-cancel-complete" onClick={handleCompleteCancel}>
                Not yet, back to editing
              </button>
            </div>
          </div>
        </div>
      )}

      {showSmallScreenPopup && (
        <div className="save-popup-overlay">
          <div className="save-popup small-screen-popup">
            <p className="small-screen-message">This screen is a bit small for creating your avatar. For the best experience, please use a desktop.</p>
            <button className="btn-complete" onClick={handleSmallScreenConfirm}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UnityAvatarModal
