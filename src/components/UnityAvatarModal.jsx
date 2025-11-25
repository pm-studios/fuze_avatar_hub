import { useEffect, useCallback } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import './UnityAvatarModal.css'

function UnityAvatarModal({ isOpen, onClose }) {
  const { unityProvider, loadingProgression, isLoaded, sendMessage, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.loader.js',
    dataUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.data',
    frameworkUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.framework.js',
    codeUrl: 'https://d2l90i53wjxgno.cloudfront.net/Build/web.wasm',
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
      console.log('[WebGL] Closing modal due to CloseAvatarModal')
      onClose()
    }
  }, [onClose, sendMessage, isLoaded])

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

  // Handle OnChangedAvatar event from Unity
  const handleChangedAvatar = useCallback((data) => {
    console.log('[WebGL] Avatar changed:', data)
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
              <div className="loading-bar">
                <div
                  className="loading-progress"
                  style={{ width: `${loadingProgression * 100}%` }}
                />
              </div>
              <p className="loading-text">
                Loading... {Math.round(loadingProgression * 100)}%
              </p>
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
    </div>
  )
}

export default UnityAvatarModal
