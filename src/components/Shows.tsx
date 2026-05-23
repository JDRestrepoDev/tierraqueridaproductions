import { useState, useEffect, useRef } from 'react'
import type { Show } from '../data/types'
import { getGigs } from '../data/dataService'

interface ShowsProps {
  shows?: Show[]
  showAll?: boolean
}

const Shows = ({ shows, showAll = false }: ShowsProps) => {
  const [displayShows, setDisplayShows] = useState<Show[]>(shows || [])
  const [loading, setLoading] = useState(!shows)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shows) {
      const loadGigs = async () => {
        try {
          const gigs = await getGigs()
          setDisplayShows(gigs)
        } catch (error) {
          console.error('Error loading gigs:', error)
        } finally {
          setLoading(false)
        }
      }
      loadGigs()
    }
  }, [shows])

  const showsToShow = showAll ? displayShows : displayShows.slice(0, 3)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-show-id') || '0')
            setVisibleCards((prev) => new Set([...prev, id]))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    const cards = gridRef.current?.querySelectorAll('[data-show-id]')
    cards?.forEach((card) => observer.observe(card))
    return () => cards?.forEach((card) => observer.unobserve(card))
  }, [showsToShow])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="card-modern p-6 animate-pulse">
            <div className="h-16 bg-gray-200 rounded-xl mb-4" />
            <div className="h-6 bg-gray-200 rounded mb-2" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {showsToShow.map((show, index) => (
        <div
          key={show.id}
          data-show-id={show.id}
          className={`card-modern p-6 flex flex-col reveal ${
            visibleCards.has(show.id) ? 'revealed' : ''
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-deep-red text-white px-4 py-3 rounded-xl text-center min-w-[72px] shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider">
                {new Date(show.date).toLocaleDateString('en-US', { month: 'short' })}
              </div>
              <div className="text-2xl font-outfit font-bold leading-none mt-0.5">
                {new Date(show.date).getDate()}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-outfit font-semibold text-deep-red mb-1 leading-snug">
                {show.title}
              </h3>
              <p className="text-gray-500 text-sm font-body">{show.location}</p>
              <p className="text-gray-400 text-sm font-body mt-0.5">{show.time}</p>
              {show.price && (
                <p className="text-gold font-semibold text-sm mt-2">{show.price}</p>
              )}
            </div>
          </div>

          {show.link ? (
            <a
              href={show.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full text-center border border-deep-red/30 text-deep-red py-2.5 px-4 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-deep-red hover:text-white hover:border-deep-red"
            >
              Get Tickets
            </a>
          ) : (
            <button className="mt-auto w-full border border-gray-200 text-gray-400 py-2.5 px-4 rounded-full font-semibold text-sm cursor-default">
              Coming soon
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Shows
