import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface PhotoLightboxProps {
  images: string[]
  index: number
  alt?: string
  onClose: () => void
  onIndexChange: (index: number) => void
}

const SWIPE_THRESHOLD = 50

const PhotoLightbox = ({
  images,
  index,
  alt = 'Event photo',
  onClose,
  onIndexChange,
}: PhotoLightboxProps) => {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const [fade, setFade] = useState(false)
  const prevIndex = useRef(index)

  useEffect(() => {
    if (prevIndex.current === index) return
    prevIndex.current = index
    setFade(true)
    const timeout = window.setTimeout(() => setFade(false), 150)
    return () => window.clearTimeout(timeout)
  }, [index])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onIndexChange(index > 0 ? index - 1 : images.length - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        onIndexChange(index < images.length - 1 ? index + 1 : 0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [index, images.length, onClose, onIndexChange])

  const goToPrevious = () => {
    onIndexChange(index > 0 ? index - 1 : images.length - 1)
  }

  const goToNext = () => {
    onIndexChange(index < images.length - 1 ? index + 1 : 0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return

    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current
    touchStartX.current = null
    touchStartY.current = null

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
      return
    }

    if (deltaX > 0) {
      goToPrevious()
    } else {
      goToNext()
    }
  }

  if (images.length === 0 || typeof document === 'undefined') return null

  // Portal to body so fixed positioning is not trapped by ancestor
  // transforms (.reveal) or overflow-hidden (gallery section).
  return createPortal(
    <div
      className="photo-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-6 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goToPrevious()
        }}
        className="absolute left-2 sm:left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 p-2.5 sm:p-3 text-white transition-all duration-200 hover:bg-black/90"
        aria-label="Previous photo"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-2 sm:right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 p-2.5 sm:p-3 text-white transition-all duration-200 hover:bg-black/90"
        aria-label="Next photo"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 rounded-full bg-black/70 p-2.5 sm:p-3 text-white transition-all duration-200 hover:bg-black/90"
        aria-label="Close"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={index}
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          className={`max-h-[78vh] w-auto max-w-full object-contain transition-opacity duration-150 ${
            fade ? 'opacity-50' : 'opacity-100'
          }`}
          draggable={false}
        />

        <p className="mt-3 text-sm font-medium tracking-wide text-white/90 sm:text-base">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>,
    document.body
  )
}

export default PhotoLightbox
