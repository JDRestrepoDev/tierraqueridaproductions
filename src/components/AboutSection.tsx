import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutBand from '../assets/images/aboutUs/whole-band.jpg'

const AboutSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={textRef}
            className={`reveal-left ${textVisible ? 'revealed' : ''}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
              Who we are
            </p>
            <h2 className="text-3xl sm:text-4xl font-outfit font-semibold text-deep-red tracking-tight mb-6">
              About Tierra Querida
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-body leading-relaxed">
              Tierra Querida is both a vibrant orchestra playing Colombian and Latin music, and a production team organizing cultural events, concerts, and artist collaborations.
            </p>
            <p className="text-lg text-gray-600 mb-8 font-body leading-relaxed">
              We celebrate Latin culture through music, events, and unforgettable experiences that bring communities together and showcase the rich heritage of Latin America.
            </p>
            <div
              className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 shadow-sm reveal stagger-2 ${
                textVisible ? 'revealed' : ''
              }`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-deep-red mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 font-body italic leading-relaxed">
                "We celebrate Latin culture through music, events, and unforgettable experiences."
              </p>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`reveal-right ${imageVisible ? 'revealed' : ''}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-deep-red/10 aspect-[4/3] group">
              <img
                src={aboutBand}
                alt="Tierra Querida orchestra"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
