import { useState } from 'react'
import PhotoLightbox from './PhotoLightbox'

interface EventPhotoGalleryProps {
  images: string[]
  alt?: string
  className?: string
}

const EventPhotoGallery = ({
  images,
  alt = 'Event photo',
  className = '',
}: EventPhotoGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  return (
    <>
      <div className={`event-photo-gallery ${className}`}>
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            className="event-photo-gallery__item group"
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open photo ${index + 1} of ${images.length}`}
          >
            <img
              src={src}
              alt={`${alt} ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="event-photo-gallery__image"
            />
            <span className="event-photo-gallery__overlay" aria-hidden />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <PhotoLightbox
          images={images}
          index={lightboxIndex}
          alt={alt}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  )
}

export default EventPhotoGallery
