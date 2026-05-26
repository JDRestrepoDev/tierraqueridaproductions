import { useScrollReveal } from '../hooks/useScrollReveal'
import HomeFestSection from './HomeFestSection'
import aboutBand from '../assets/images/aboutUs/whole-band.jpg'

const AboutSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <HomeFestSection theme="blue">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div ref={textRef} className={`text-center lg:text-left reveal-left ${textVisible ? 'revealed' : ''}`}>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
            Who we are
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white leading-[1.05] drop-shadow-lg mb-2"
            style={{ textShadow: '2px 2px 0 rgba(139,0,0,0.35)' }}
          >
            About Tierra Querida
          </h2>
          <p className="text-xl sm:text-2xl font-outfit font-semibold text-gold drop-shadow-md mb-6">
            Orchestra & Productions
          </p>

          <p className="text-base sm:text-lg text-white/90 font-body leading-relaxed max-w-lg mx-auto lg:mx-0 mb-5">
            Tierra Querida is both a vibrant orchestra playing Colombian and Latin music, and a
            production team organizing cultural events, concerts, and artist collaborations.
          </p>
          <p className="text-base sm:text-lg text-white/90 font-body leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            We celebrate Latin culture through music, events, and unforgettable experiences that
            bring communities together and showcase the rich heritage of Latin America.
          </p>

          <div
            className={`bg-white/95 backdrop-blur-sm p-8 rounded-2xl border-2 border-gold/50 shadow-xl shadow-black/15 reveal stagger-2 ${
              textVisible ? 'revealed' : ''
            }`}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-deep-red mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 font-body italic leading-relaxed text-lg">
              "We celebrate Latin culture through music, events, and unforgettable experiences."
            </p>
          </div>
        </div>

        <div ref={imageRef} className={`reveal-right flex justify-center lg:justify-end ${imageVisible ? 'revealed' : ''}`}>
          <div className="relative max-w-md w-full">
            <div
              className="absolute inset-0 bg-black/30 rounded-2xl translate-x-3 translate-y-3 blur-sm"
              aria-hidden
            />
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-black/40 ring-4 ring-gold/40 aspect-[4/3] group">
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
    </HomeFestSection>
  )
}

export default AboutSection
