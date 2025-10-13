import { useState, useEffect } from 'react'
import type { Show } from '../data/types'
import { getGigs } from '../data/dataService'

interface ShowsProps {
  shows?: Show[]
  showAll?: boolean
}

const Shows = ({ shows, showAll = false }: ShowsProps) => {
  const [displayShows, setDisplayShows] = useState<Show[]>(shows || [])
  const [loading, setLoading] = useState(!shows)

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

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gray-300 p-3 rounded-lg text-center min-w-[80px] h-16"></div>
              <div className="flex-1 ml-4">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showsToShow.map((show) => (
        <div key={show.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:bg-gray-50 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-deep-red text-white p-3 rounded-lg text-center min-w-[80px]">
              <div className="text-sm font-semibold">
                {new Date(show.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
              </div>
              <div className="text-2xl font-bold">
                {new Date(show.date).getDate()}
              </div>
            </div>
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold text-deep-red mb-2">{show.title}</h3>
              <p className="text-gray-600 mb-1">{show.location}</p>
              <p className="text-gray-500 text-sm">{show.time}</p>
              {show.price && (
                <p className="text-yellow-000 font-semibold mt-2">{show.price}</p>
              )}
            </div>
          </div>
          
          {show.link ? ( 
            <a 
              href={show.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-transparent border-2 border-deep-red text-deep-red py-2 px-4 rounded-lg font-semibold hover:bg-deep-red hover:text-white transition-colors duration-300 text-center block"
            >
              Get Tickets
            </a>
          ) : (
            <button className="w-full bg-transparent border-2 border-deep-red text-deep-red py-2 px-4 rounded-lg font-semibold hover:bg-deep-red hover:text-white transition-colors duration-300">
              Comming soon
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Shows
