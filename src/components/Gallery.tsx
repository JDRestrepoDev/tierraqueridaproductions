import { useState, useEffect, useRef } from 'react'
import type { GalleryItem } from '../data/types'
import { getGallery } from '../data/dataService'

interface GalleryProps {
  items?: GalleryItem[]
  showAll?: boolean
}

const Gallery = ({ items, showAll = false }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [displayItems, setDisplayItems] = useState<GalleryItem[]>(items || [])
  const [loading, setLoading] = useState(!items)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!items) {
      const loadGallery = async () => {
        try {
          const gallery = await getGallery()
          setDisplayItems(gallery)
        } catch (error) {
          console.error('Error loading gallery:', error)
        } finally {
          setLoading(false)
        }
      }
      loadGallery()
    }
  }, [items])

  const itemsToShow = showAll ? displayItems : displayItems.slice(0, 6)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0')
            setVisibleItems(prev => new Set([...prev, itemId]))
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of item is visible
        rootMargin: '0px 0px -50px 0px' // Start animation 50px before item comes into view
      }
    )

    const galleryItems = galleryRef.current?.querySelectorAll('[data-item-id]')
    galleryItems?.forEach(item => observer.observe(item))

    return () => {
      galleryItems?.forEach(item => observer.unobserve(item))
    }
  }, [itemsToShow])

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item)
    setCurrentIndex(0) // Always start with the first image of the selected event
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (!selectedImage) return
    const newIndex = currentIndex > 0 ? currentIndex - 1 : selectedImage.images.length - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    if (!selectedImage) return
    const newIndex = currentIndex < selectedImage.images.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToShow.map((item, index) => (
          <div 
            key={item.id} 
            data-item-id={item.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-1000 cursor-pointer h-80 flex flex-col ${
              visibleItems.has(item.id) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => openModal(item)}
          >
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gold to-turquoise flex items-center justify-center relative overflow-hidden h-64">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Click to view</p>
                </div>
              </div>
              {/* Fallback placeholder */}
              <div className="hidden absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Gallery Image</p>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-deep-red mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Navigation buttons - positioned relative to viewport */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white rounded-full p-3 hover:bg-opacity-90 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white rounded-full p-3 hover:bg-opacity-90 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close button - positioned relative to viewport */}
          <button
            onClick={closeModal}
            className="fixed top-8 right-8 z-20 bg-black bg-opacity-70 text-white rounded-full p-3 hover:bg-opacity-90 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img 
              src={selectedImage.images[currentIndex]} 
              alt={`${selectedImage.title} - Image ${currentIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white p-4 md:p-6">
              <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{selectedImage.title}</h3>
              <p className="text-sm md:text-lg opacity-90">{selectedImage.location}</p>
              <p className="text-xs md:text-sm opacity-75 mt-1 md:mt-2">
                {currentIndex + 1} of {selectedImage.images.length}
              </p>
              
              {/* Pagination dots */}
              <div className="flex justify-center space-x-2 mt-3 md:mt-4">
                {selectedImage.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
