import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { GalleryItem } from '../data/types'
import { getGallery } from '../data/dataService'
import EventPhotoGallery from './EventPhotoGallery'

interface GalleryProps {
  items?: GalleryItem[]
  showAll?: boolean
}

const Gallery = ({ items, showAll = false }: GalleryProps) => {
  const navigate = useNavigate()
  const [activeEvent, setActiveEvent] = useState<GalleryItem | null>(null)
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
    if (activeEvent) return

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
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const galleryItems = galleryRef.current?.querySelectorAll('[data-item-id]')
    galleryItems?.forEach(item => observer.observe(item))

    return () => {
      galleryItems?.forEach(item => observer.unobserve(item))
    }
  }, [itemsToShow, activeEvent])

  const handleItemClick = (item: GalleryItem) => {
    if (item.pagePath) {
      navigate(item.pagePath)
      return
    }
    setActiveEvent(item)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  if (activeEvent) {
    return (
      <div>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <button
              type="button"
              onClick={() => setActiveEvent(null)}
              className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-deep-red hover:text-red-900 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to events
            </button>
            <h2 className="font-outfit text-2xl sm:text-3xl font-semibold text-deep-red">
              {activeEvent.title}
            </h2>
            <p className="mt-1 text-gray-500 font-body text-sm sm:text-base">
              {activeEvent.location}
            </p>
          </div>
          <p className="text-sm text-gray-400 font-body">
            {activeEvent.images.length} photos · tap to enlarge
          </p>
        </div>

        <EventPhotoGallery
          images={activeEvent.images}
          alt={activeEvent.title}
        />
      </div>
    )
  }

  return (
    <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {itemsToShow.map((item, index) => (
        <div
          key={item.id}
          data-item-id={item.id}
          className={`group card-modern cursor-pointer h-80 flex flex-col reveal ${
            visibleItems.has(item.id) ? 'revealed' : ''
          }`}
          style={{ transitionDelay: `${index * 80}ms` }}
          onClick={() => handleItemClick(item)}
        >
          <div className="relative overflow-hidden h-64 bg-gray-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
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
                <p className="text-sm">
                  {item.pagePath
                    ? 'View event'
                    : item.images.length > 1
                      ? `View ${item.images.length} photos`
                      : 'Click to view'}
                </p>
              </div>
            </div>
            <div className="hidden absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-sm">Gallery Image</p>
              </div>
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center">
            <h3 className="text-base font-outfit font-semibold text-deep-red mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm font-body">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
