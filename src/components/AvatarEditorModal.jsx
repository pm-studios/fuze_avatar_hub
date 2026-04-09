import { useEffect, useCallback, useRef, useState } from 'react'
import { track, trackButtonClick } from '../utils/mixpanel'
import './UnityAvatarModal.css'

// 환경 판별 (AvatarGrid.jsx와 동일 패턴)
const isDev = window.location.hostname === 'localhost' ||
              window.location.hostname.includes('dev') ||
              window.location.hostname.includes('127.0.0.1') ||
              window.location.hostname === 'd3cbg89fw3t9m6.cloudfront.net'

// AvatarWeb CDN — 에셋(GLB, partsdata.json, masks, fonts, images) 모두 여기서 로드
const AVATAR_CDN_BASE = isDev
  ? 'https://d1yc3s10n1140s.cloudfront.net/'
  : 'https://d1ifixnjky3kx.cloudfront.net/'

// localhost 개발 시: oz-avatar-editor.js를 fuze public/ symlink로 로컬 로드 (빠른 iteration).
// 그 외: dev/prod CDN에서 fetch.
const isLocalhost = window.location.hostname === 'localhost' ||
                    window.location.hostname === '127.0.0.1'
const OZ_AVATAR_EDITOR_SCRIPT_URL = isLocalhost
  ? '/oz-avatar-editor.js'
  : `${AVATAR_CDN_BASE}oz-avatar-editor.js`

// 모듈 스크립트 1회만 로드
let ozEditorScriptLoaded = false
function ensureOzEditorScript() {
  if (ozEditorScriptLoaded) return
  ozEditorScriptLoaded = true
  const script = document.createElement('script')
  script.type = 'module'
  script.src = OZ_AVATAR_EDITOR_SCRIPT_URL
  document.head.appendChild(script)
}

function AvatarEditorModal({ isOpen, onClose }) {
  const [showSavePopup, setShowSavePopup] = useState(false)
  const [showCompletePopup, setShowCompletePopup] = useState(false)
  const editorRef = useRef(null)
  const savedUuidRef = useRef(null)

  // 모달 열릴 때 트래킹 + 스크립트 로드
  useEffect(() => {
    if (isOpen) {
      track('Modal Opened', { modal_name: 'avatar_editor_modal' })
      ensureOzEditorScript()
    }
  }, [isOpen])

  // body scroll lock
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

  // 닫기 (사용자가 web editor의 X 클릭)
  const handleStateChanged = useCallback((e) => {
    const detail = e.detail
    if (detail === 'CloseAvatarModal' || detail === 'CloseAvatarModalChanged') {
      const hasChanges = detail === 'CloseAvatarModalChanged'
      if (savedUuidRef.current || hasChanges) {
        setShowSavePopup(true)
      } else {
        onClose()
      }
    }
    // detail === 'AvatarLoaded' → 로드 완료 (현재는 별도 처리 없음)
  }, [onClose])

  // 저장 완료 (web editor가 POST /avatar-preset/ 에 업로드 후 발사)
  // hub-mode에선 detail = { uuid, thumbnailUrl } object
  const handleChangedAvatar = useCallback((e) => {
    const detail = e.detail
    if (detail && typeof detail === 'object' && detail.uuid) {
      savedUuidRef.current = detail.uuid
    } else if (typeof detail === 'string') {
      // 혹시 hub-mode가 아닌 빌드면 string으로 옴 — 일단 그것도 UUID로 취급 (fallback)
      savedUuidRef.current = detail
    }
  }, [])

  // 에러 이벤트
  const handleError = useCallback((e) => {
    console.error('[oz-avatar-editor] error:', e.detail)
  }, [])

  // web component에 이벤트 리스너 연결 (마운트 후)
  useEffect(() => {
    if (!isOpen) return

    let cancelled = false
    let editor = null

    customElements.whenDefined('oz-avatar-editor').then(() => {
      if (cancelled) return
      editor = editorRef.current
      if (!editor) return
      editor.addEventListener('state-changed', handleStateChanged)
      editor.addEventListener('changed-avatar', handleChangedAvatar)
      editor.addEventListener('editor-error', handleError)
    })

    return () => {
      cancelled = true
      if (editor) {
        editor.removeEventListener('state-changed', handleStateChanged)
        editor.removeEventListener('changed-avatar', handleChangedAvatar)
        editor.removeEventListener('editor-error', handleError)
      }
    }
  }, [isOpen, handleStateChanged, handleChangedAvatar, handleError])

  // Save & sign up — 새 탭으로 가입 페이지 열기
  const handleSaveAndClose = useCallback(() => {
    trackButtonClick('save_and_signup')
    if (savedUuidRef.current) {
      const baseUrl = isDev
        ? 'https://dev-web.fuzeapp.services/login'
        : 'https://panaxgames.com/login'
      const loginUrl = `${baseUrl}/?avatar_preset_uuid=${savedUuidRef.current}`
      window.open(loginUrl, '_blank', 'noopener,noreferrer')
    }
    setShowSavePopup(false)
    setShowCompletePopup(true)
  }, [])

  const handleCloseWithoutSaving = useCallback(() => {
    trackButtonClick('leave_without_saving')
    setShowSavePopup(false)
    savedUuidRef.current = null
    onClose()
  }, [onClose])

  const handleCancelPopup = useCallback(() => {
    trackButtonClick('back_to_editing')
    setShowSavePopup(false)
  }, [])

  const handleCompleteConfirm = useCallback(() => {
    trackButtonClick('done_and_close')
    window.location.href = window.location.pathname
  }, [])

  const handleCompleteCancel = useCallback(() => {
    trackButtonClick('not_yet_back_to_editing')
    setShowCompletePopup(false)
  }, [])

  if (!isOpen) return null

  return (
    <div className="unity-modal-overlay">
      <div className="unity-modal-content">
        <div className="unity-container">
          <oz-avatar-editor
            ref={editorRef}
            hub-mode=""
            auto-load-default=""
            base-url={AVATAR_CDN_BASE}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        </div>
      </div>

      {showSavePopup && (
        <div className="save-popup-overlay">
          <div className="save-popup">
            <div className="save-popup-logo">
              <img src="/Logo_Panax_Only.png" alt="Panax Avatar Hub" />
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
    </div>
  )
}

export default AvatarEditorModal
