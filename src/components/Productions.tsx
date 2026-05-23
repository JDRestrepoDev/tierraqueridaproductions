import { useEffect, useRef, useState } from 'react'
import gig1 from '../assets/images/gigs/1.jpg'
import gig2 from '../assets/images/gigs/2.jpg'
import gig3 from '../assets/images/gigs/3.jpg'
import gig4 from '../assets/images/gigs/4.jpg'

interface Production {
  id: number
  title: string
  description: string
  icon: string
  backgroundImage: string
}

interface ProductionsProps {
  productions?: Production[]
}

const Productions = ({ productions }: ProductionsProps) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const gridRef = useRef<HTMLDivElement>(null)

  const defaultProductions: Production[] = [
    {
      id: 1,
      title: 'Event Organization',
      description: 'Full-service event planning and coordination for cultural celebrations, corporate events, and private parties.',
      icon: '🎵',
      backgroundImage: gig1,
    },
    {
      id: 2,
      title: 'Artist Management',
      description: 'Professional artist booking and management services for musicians, performers, and cultural entertainers.',
      icon: '👥',
      backgroundImage: gig2,
    },
    {
      id: 3,
      title: 'Cultural Productions',
      description: 'Creating and producing authentic Latin cultural experiences that celebrate heritage and tradition.',
      icon: '📅',
      backgroundImage: gig3,
    },
    {
      id: 4,
      title: 'Partnerships',
      description: 'Collaborating with venues, organizations, and artists to create memorable cultural experiences.',
      icon: '🤝',
      backgroundImage: gig4,
    },
  ]

  const displayProductions = productions || defaultProductions

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-production-id') || '0')
            setVisibleCards((prev) => new Set([...prev, id]))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    const cards = gridRef.current?.querySelectorAll('[data-production-id]')
    cards?.forEach((card) => observer.observe(card))
    return () => cards?.forEach((card) => observer.unobserve(card))
  }, [displayProductions])

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayProductions.map((production, index) => (
        <div
          key={production.id}
          data-production-id={production.id}
          className={`relative rounded-2xl overflow-hidden h-80 cursor-pointer group reveal ${
            visibleCards.has(production.id) ? 'revealed' : ''
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${production.backgroundImage})` }}
          />

          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-6 text-left">
            <span className="text-3xl mb-3">{production.icon}</span>
            <h3 className="text-lg font-outfit font-semibold text-white mb-2">
              {production.title}
            </h3>
            <p className="text-white/75 text-sm font-body leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {production.description}
            </p>
          </div>

          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
        </div>
      ))}
    </div>
  )
}

export default Productions
