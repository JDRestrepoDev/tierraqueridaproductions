import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import EventPhotoGallery from '../components/EventPhotoGallery'
import {
  cumbiafestCityGalleries,
  cumbiafestPhotos,
} from '../data/cumbiafestPhotos'

const paragraphs = [
  'Después de estas noches de música, cumbia, baile y mucha emoción, solo nos queda decir: ¡GRACIAS!',
  'Gracias a Melbourne, Brisbane y Sydney por recibirnos y por hacer parte de esta primera gira de Cumbia Fest 2026.',
  'Gracias a todo el equipo de producción, a los músicos, sponsors y colaboradores que estuvieron detrás de cada detalle. Gracias a Afrosound y Orquesta Tierra Querida por compartir su música y hacer posible esta gira.',
  'Pero sobre todo, GRACIAS A TODOS LOS QUE ASISTIERON. ❤️',
  'A quienes llegaron con sus familias, con sus amigos, a quienes cantaron cada canción, bailaron hasta el final y nos acompañaron en cada una de las ciudades.',
  'Ustedes hicieron que cada noche fuera diferente y especial. 🙏',
  'Por unas horas, entre cumbia, música, baile y abrazos, nos hicieron sentir en casa.',
  'Gracias por confiar, por acompañarnos y por hacer de esta primera edición algo que siempre vamos a recordar.',
]

const CumbiaFestPage = () => {
  const heroReveal = useScrollReveal<HTMLDivElement>()
  const messageReveal = useScrollReveal<HTMLDivElement>()
  const galleryReveal = useScrollReveal<HTMLDivElement>()
  const closingReveal = useScrollReveal<HTMLDivElement>()

  useEffect(() => {
    document.documentElement.lang = 'es'

    const hash = window.location.hash.replace('#', '')
    if (hash) {
      // Let the city section render, then scroll to it
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }

    return () => {
      document.documentElement.lang = 'en'
    }
  }, [])

  const scrollToGallery = () => {
    document.getElementById('cumbiafest-gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCity = (slug: string) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const hasPhotos = cumbiafestCityGalleries.length > 0

  return (
    <div className="cumbiafest-page pt-16">
      {/* Hero — fest blue (matches previous tour-card blue) */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-fest-blue">
        <div className="absolute inset-0 fest-bg-texture opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-fest-blue via-fest-blue/90 to-[#163a6b]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,208,32,0.3)_0%,_transparent_55%)]" />
        <div
          className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-fest-yellow/25 blur-3xl animate-fest-float"
          aria-hidden
        />
        <div
          className="absolute -right-16 bottom-1/4 w-72 h-72 rounded-full bg-fest-teal/20 blur-3xl animate-fest-float-delayed"
          aria-hidden
        />

        <div
          ref={heroReveal.ref}
          className={`relative z-10 w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-32 reveal ${
            heroReveal.isVisible ? 'revealed' : ''
          }`}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            <p
              className="font-fest-display text-sm sm:text-base tracking-[0.4em] text-fest-yellow uppercase mb-6 animate-hero-slide-up"
              style={{ animationDelay: '0.15s' }}
            >
              Cumbia Fest 2026 · Australia
            </p>

            <h1
              className="font-fest-script text-5xl sm:text-7xl lg:text-8xl fest-title-shadow mb-6 animate-fest-pop"
              style={{ animationDelay: '0.1s' }}
            >
              CumbiaFest
            </h1>

            <p
              className="font-fest-hand text-2xl sm:text-3xl lg:text-4xl text-white/95 animate-hero-slide-up"
              style={{ animationDelay: '0.35s' }}
            >
              🇨🇴❤️ GRACIAS, AUSTRALIA.
            </p>
          </div>
        </div>
      </section>

      {/* Thank-you message — fest teal texture (same as previous about section) */}
      <section className="py-20 lg:py-28 fest-bg-texture relative overflow-hidden">
        <div
          className="absolute top-10 right-10 w-24 h-24 rounded-full bg-fest-yellow/30 blur-2xl animate-fest-float"
          aria-hidden
        />
        <div
          className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-fest-blue/20 blur-2xl animate-fest-float-delayed"
          aria-hidden
        />

        <div
          ref={messageReveal.ref}
          className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative reveal ${
            messageReveal.isVisible ? 'revealed' : ''
          }`}
        >
          <p className="font-fest-display text-sm tracking-[0.35em] text-fest-blue mb-3 text-center uppercase">
            Gracias
          </p>
          <h2 className="font-fest-elegant text-4xl sm:text-5xl text-deep-red text-center mb-10">
            Una gira para recordar
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-xl sm:text-2xl bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-white/50 shadow-lg">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </div>

          {hasPhotos && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={scrollToGallery}
                className="inline-flex items-center justify-center gap-2 bg-fest-blue text-white px-10 py-4 rounded-full font-fest-display text-lg tracking-widest uppercase transition-all duration-300 hover:bg-[#163a6b] hover:shadow-xl hover:shadow-fest-blue/30 hover:-translate-y-1 hover:scale-105"
              >
                Ver fotos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* City galleries — one section per city */}
      {hasPhotos && (
        <section
          id="cumbiafest-gallery"
          className="py-16 sm:py-20 lg:py-24 bg-cream relative overflow-hidden"
        >
          <div
            ref={galleryReveal.ref}
            className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative reveal ${
              galleryReveal.isVisible ? 'revealed' : ''
            }`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <p className="font-fest-display text-sm tracking-[0.35em] text-fest-blue mb-3 uppercase">
                Galería
              </p>
              <h2 className="font-fest-elegant text-4xl sm:text-5xl text-deep-red mb-3">
                La gira en fotos
              </h2>
              <p className="font-body text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8">
                {cumbiafestPhotos.length} momentos · una galería por ciudad
              </p>

              <nav
                aria-label="Ciudades"
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                {cumbiafestCityGalleries.map(({ city, slug, photos }) => (
                  <button
                    key={slug}
                    type="button"
                    onClick={() => scrollToCity(slug)}
                    className="font-fest-display text-sm sm:text-base tracking-widest uppercase px-5 py-2.5 rounded-full border-2 border-fest-blue/30 text-fest-blue bg-white/60 backdrop-blur-sm transition-all duration-300 hover:border-fest-blue hover:bg-fest-blue hover:text-white"
                  >
                    {city}
                    <span className="ml-2 opacity-60 font-body normal-case tracking-normal text-xs sm:text-sm">
                      {photos.length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-16 sm:space-y-20">
              {cumbiafestCityGalleries.map(({ city, slug, photos }) => (
                <div
                  key={slug}
                  id={slug}
                  className="scroll-mt-24"
                >
                  <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-fest-blue/15 pb-4">
                    <h3 className="font-fest-elegant text-3xl sm:text-4xl text-deep-red">
                      {city}
                    </h3>
                    <p className="font-body text-gray-500 text-sm sm:text-base">
                      {photos.length} fotos
                    </p>
                  </div>

                  <EventPhotoGallery
                    images={photos}
                    alt={`CumbiaFest 2026 · ${city}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing — yellow band with blue accents (previous fest yellow card energy) */}
      <section className="relative py-24 lg:py-32 bg-fest-yellow overflow-hidden">
        <div className="absolute inset-0 fest-bg-texture opacity-20" />
        <div
          className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-fest-blue/15 blur-3xl animate-fest-float"
          aria-hidden
        />
        <div
          className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-deep-red/10 blur-3xl animate-fest-float-delayed"
          aria-hidden
        />

        <div
          ref={closingReveal.ref}
          className={`relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal ${
            closingReveal.isVisible ? 'revealed' : ''
          }`}
        >
          <p className="font-fest-elegant text-3xl sm:text-4xl text-deep-red mb-4">
            Esto apenas comienza.
          </p>
          <p className="font-fest-hand text-2xl sm:text-3xl text-fest-blue mb-10">
            Nos vemos en la próxima. 💃🕺🎶
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {hasPhotos ? (
              <button
                type="button"
                onClick={scrollToGallery}
                className="inline-flex items-center justify-center gap-2 bg-fest-blue text-white px-10 py-4 rounded-full font-fest-display text-lg tracking-widest uppercase transition-all duration-300 hover:bg-[#163a6b] hover:shadow-xl hover:shadow-fest-blue/30 hover:-translate-y-1 hover:scale-105"
              >
                Ver fotos
              </button>
            ) : null}
            <a
              href="https://www.instagram.com/tierraquerida.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/40 backdrop-blur-sm text-fest-blue border-2 border-fest-blue/40 px-10 py-4 rounded-full font-fest-display text-lg tracking-widest uppercase transition-all duration-300 hover:bg-white/60 hover:border-fest-blue"
            >
              @tierraquerida.au
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CumbiaFestPage
