import { useEffect, useRef, useState } from 'react'
import aboutBand from '../assets/images/aboutUs/whole-band.jpg'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation 100px before section comes into view
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-cinzel font-bold text-deep-red mb-6">About Tierra Querida</h2>
            <p className="text-lg text-gray-600 mb-6 font-inter">
              Tierra Querida is both a vibrant orchestra playing Colombian and Latin music, and a production team organizing cultural events, concerts, and artist collaborations.
            </p>
            <p className="text-lg text-gray-600 mb-8 font-inter">
              We celebrate Latin culture through music, events, and unforgettable experiences that bring communities together and showcase the rich heritage of Latin America.
            </p>
            <div className={`bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-xl font-semibold text-deep-red mb-3">Our Mission</h3>
              <p className="text-gray-700 italic">
                "We celebrate Latin culture through music, events, and unforgettable experiences."
              </p>
            </div>
          </div>
          <div className={`bg-gradient-to-br from-deep-red to-turquoise rounded-lg h-96 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-white text-center">
              {/* <div className="text-6xl mb-4">🎵</div> */}
              <img src={aboutBand} alt="Tierra Querida" className="w-full h-full object-cover rounded-lg" />
              {/* <p className="text-xl">Orchestra in Action</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
