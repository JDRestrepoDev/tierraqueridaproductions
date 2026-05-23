import { Link } from 'react-router-dom'
import { getPrimaryFeaturedEvent } from '../data/featuredEvents'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FeaturedEvent = () => {
  const event = getPrimaryFeaturedEvent()
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.08 })

  if (!event) return null

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 reveal ${
        isVisible ? 'revealed' : ''
      }`}
      aria-labelledby="featured-event-title"
    >
      {/* Sunset gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-deep-red" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.25)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(45,212,191,0.2)_0%,_transparent_50%)]" />

      {/* String lights */}
      <div
        className="absolute top-6 left-0 right-0 flex justify-center gap-3 sm:gap-5 px-4 pointer-events-none"
        aria-hidden
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shadow-sm"
            style={{
              backgroundColor: i % 3 === 0 ? '#E8B923' : i % 3 === 1 ? '#fff' : '#2DD4BF',
              boxShadow: `0 0 12px ${i % 3 === 0 ? '#E8B923' : i % 3 === 1 ? '#fff' : '#2DD4BF'}`,
            }}
          />
        ))}
      </div>

      {/* Decorative shapes */}
      <div
        className="absolute -left-16 top-1/3 w-48 h-48 rounded-full bg-gold/20 blur-2xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -right-10 bottom-1/4 w-56 h-56 rounded-full bg-turquoise/25 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-20 right-[8%] w-20 h-20 border-4 border-white/20 rounded-2xl rotate-12 pointer-events-none hidden lg:block"
        aria-hidden
      />
      <div
        className="absolute bottom-16 left-[6%] w-14 h-14 bg-white/10 rounded-full pointer-events-none hidden md:block"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
              {event.homeEyebrow}
            </span>

            <h2
              id="featured-event-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white leading-[1.05] drop-shadow-lg"
              style={{ textShadow: '2px 2px 0 rgba(139,0,0,0.35)' }}
            >
              {event.homeTitle}
            </h2>
            <p className="mt-2 text-xl sm:text-2xl font-outfit font-semibold text-gold drop-shadow-md">
              {event.homeSubtitle}
            </p>

            <p className="mt-6 text-base sm:text-lg text-white/90 font-body leading-relaxed max-w-lg mx-auto lg:mx-0">
              {event.homeDescription}
            </p>

            {/* Date chips */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {event.dates.map((d) => (
                <div
                  key={d.city}
                  className="flex items-center gap-2 bg-white/95 text-deep-red rounded-2xl px-4 py-3 shadow-xl shadow-black/15 border-2 border-gold/50"
                >
                  <span className="text-lg" aria-hidden>
                    📍
                  </span>
                  <div className="text-left">
                    <p className="font-outfit font-bold text-sm leading-tight">{d.city}</p>
                    <p className="text-xs font-semibold text-gray-600">{d.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-white/90 uppercase tracking-wider">
              {event.homeTagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to={event.pagePath}
                className="inline-flex items-center justify-center gap-2 bg-gold text-black px-10 py-4 rounded-full font-bold text-base tracking-wide shadow-xl shadow-black/25 transition-all duration-300 hover:bg-yellow-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                Get Tickets
                <span aria-hidden>→</span>
              </Link>
              <Link
                to={event.pagePath}
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:bg-white/25 hover:border-white"
              >
                Ver detalles
              </Link>
            </div>

            <p className="mt-5 text-sm text-white/75 font-body">
              Desde{' '}
              <span className="font-bold text-gold text-lg">${event.startingPrice}</span> · Early
              bird disponible
            </p>
          </div>

          {/* Flyer poster */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="absolute -top-4 -right-2 sm:right-4 z-20 rotate-6 bg-deep-red text-white px-4 py-2 rounded-lg shadow-xl border-2 border-gold font-bold text-xs sm:text-sm uppercase tracking-wider"
              aria-hidden
            >
              🔥 Live 2026
            </div>
            <div
              className="absolute -bottom-3 -left-2 sm:left-4 z-20 -rotate-3 bg-gold text-black px-4 py-2 rounded-full shadow-xl font-bold text-sm"
              aria-hidden
            >
              Early bird ${event.startingPrice}
            </div>

            <Link
              to={event.pagePath}
              className="group relative block max-w-md w-full transition-transform duration-500 hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 bg-black/30 rounded-2xl translate-x-3 translate-y-3 blur-sm"
                aria-hidden
              />
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-black/40 ring-4 ring-gold/40 transition-shadow duration-500 group-hover:shadow-black/50 group-hover:ring-gold/60">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold text-sm bg-black/50 backdrop-blur px-4 py-2 rounded-full">
                    Ver evento completo
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 bg-cream"
        style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
        aria-hidden
      />
    </section>
  )
}

export default FeaturedEvent
