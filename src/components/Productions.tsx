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
  const defaultProductions: Production[] = [
    {
      id: 1,
      title: "Event Organization",
      description: "Full-service event planning and coordination for cultural celebrations, corporate events, and private parties.",
      icon: "🎵",
      backgroundImage: gig1
    },
    {
      id: 2,
      title: "Artist Management",
      description: "Professional artist booking and management services for musicians, performers, and cultural entertainers.",
      icon: "👥",
      backgroundImage: gig2
    },
    {
      id: 3,
      title: "Cultural Productions",
      description: "Creating and producing authentic Latin cultural experiences that celebrate heritage and tradition.",
      icon: "📅",
      backgroundImage: gig3
    },
    {
      id: 4,
      title: "Partnerships",
      description: "Collaborating with venues, organizations, and artists to create memorable cultural experiences.",
      icon: "🤝",
      backgroundImage: gig4
    }
  ]

  const displayProductions = productions || defaultProductions

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayProductions.map((production) => (
        <div 
          key={production.id} 
          className="relative rounded-lg overflow-hidden h-80 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:brightness-110 cursor-pointer opacity-0 animate-fade-in"
          style={{ animationDelay: `${production.id * 100}ms` }}
        >
          {/* Background Image with Blur */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${production.backgroundImage})`,
              filter: 'blur(3px)',
              transform: 'scale(1.05)'
            }}
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          {/* Additional Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
            <div className="text-4xl mb-4 drop-shadow-2xl filter brightness-110">{production.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4 drop-shadow-2xl filter brightness-110">
              {production.title}
            </h3>
            <p className="text-white leading-relaxed drop-shadow-2xl filter brightness-110 font-medium">
              {production.description}
            </p>
          </div>
          
          {/* Subtle Border */}
          <div className="absolute inset-0 border-2 border-white border-opacity-20 rounded-lg" />
        </div>
      ))}
    </div>
  )
}

export default Productions
