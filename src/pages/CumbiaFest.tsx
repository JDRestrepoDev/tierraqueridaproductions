import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { featuredEvents } from '../data/featuredEvents'
import type { EventDate, TicketTier } from '../data/featuredEvents'
import { useScrollReveal } from '../hooks/useScrollReveal'

const event = featuredEvents.find((e) => e.id === 'cumbiafest-2026-afrosound')

const highlights = [
  { icon: '🎶', text: 'AFROSOUND EN VIVO desde Colombia' },
  { icon: '🥁', text: 'Banda invitada: Tierra Querida Live Band' },
  { icon: '🎧', text: 'DJs tocando lo mejor de la cumbia, salsa y música latina' },
  { icon: '💃', text: 'Pista de baile toda la noche' },
  { icon: '🌴', text: 'Ambiente colombiano y latinoamericano auténtico' },
  { icon: '✨', text: 'Visuales, luces y una producción especial para una noche inolvidable' },
]

const sponsors = ['Mac Tax', 'Cumbia', 'Morcilla Don Mateo', 'Gold Talent']

const tourCardStyles = [
  {
    bg: 'bg-fest-yellow',
    text: 'text-fest-blue',
    accent: 'text-deep-red',
    rotate: '-rotate-1',
    slide: 'animate-fest-slide-left',
  },
  {
    bg: 'bg-fest-blue',
    text: 'text-white',
    accent: 'text-fest-yellow',
    rotate: 'rotate-1',
    slide: 'animate-fest-slide-right',
  },
]

function HighlightItem({ icon, text }: { icon: string; text: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>()

  return (
    <li
      ref={ref}
      className={`flex items-start gap-3 p-5 rounded-2xl bg-white/80 border-2 border-fest-teal-dark/20 shadow-sm reveal ${
        isVisible ? 'revealed' : ''
      } hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
    >
      <span className="text-2xl shrink-0 animate-fest-float" aria-hidden>
        {icon}
      </span>
      <span className="text-lg text-gray-700 leading-snug">{text}</span>
    </li>
  )
}

function TourDateCard({
  dateInfo,
  index,
}: {
  dateInfo: EventDate
  index: number
}) {
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>()
  const style = tourCardStyles[index % tourCardStyles.length]

  return (
    <a
      ref={ref}
      href={dateInfo.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Comprar tickets para ${dateInfo.city}`}
      className={`relative block no-underline ${style.rotate} ${
        isVisible ? style.slide : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div
        className={`${style.bg} ${style.text} p-8 sm:p-10 rounded-2xl shadow-xl border-4 border-black/10 transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1`}
      >
        <p className={`font-fest-display text-5xl sm:text-6xl tracking-wider mb-2 ${style.accent}`}>
          {dateInfo.city}
        </p>
        <p className="font-fest-hand text-2xl sm:text-3xl opacity-90 mb-1">Australia</p>
        <div className="mt-4 inline-block bg-black/10 rounded-full px-5 py-2">
          <p className={`font-fest-display text-2xl sm:text-3xl tracking-wide ${style.accent}`}>
            {dateInfo.date}
          </p>
        </div>
      </div>
    </a>
  )
}

function TicketTierCard({
  tier,
  index,
}: {
  tier: TicketTier
  index: number
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const isAvailable = tier.status === 'available'

  return (
    <div
      ref={ref}
      className={`reveal stagger-${Math.min(index + 1, 5)} ${isVisible ? 'revealed' : ''}`}
    >
      <div
        className={`p-6 sm:p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
          isAvailable
            ? 'bg-white border-fest-teal-dark/30 shadow-md'
            : 'bg-white/60 border-gray-200 opacity-75'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2">
              <h3
                className={`text-xl sm:text-2xl tracking-wide ${
                  isAvailable ? 'text-deep-red' : 'text-gray-400'
                }`}
              >
                {tier.name}
              </h3>
              {isAvailable && (
                <span className="shrink-0 rounded-full bg-fest-teal/40 text-fest-blue text-xs font-fest-display tracking-widest px-3 py-1 uppercase">
                  Disponible
                </span>
              )}
            </div>
            {tier.note && (
              <p className="mt-2 text-base text-gray-500 flex items-start gap-1.5">
                <span className="text-fest-blue shrink-0" aria-hidden>
                  ℹ
                </span>
                {tier.note}
              </p>
            )}
          </div>
          <div className="sm:text-right shrink-0">
            <p
              className={`text-3xl tracking-wide ${
                isAvailable ? 'text-deep-red' : 'text-gray-400'
              }`}
            >
              ${tier.price.toFixed(2)}
            </p>
            <p className={`text-base ${isAvailable ? 'text-gray-500' : 'text-gray-400'}`}>
              + ${tier.fee.toFixed(2)} cargo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const CumbiaFestPage = () => {
  const heroReveal = useScrollReveal<HTMLDivElement>()
  const aboutReveal = useScrollReveal<HTMLDivElement>()
  const datesReveal = useScrollReveal<HTMLDivElement>()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.lang = 'es'
    return () => {
      document.documentElement.lang = 'en'
    }
  }, [])

  if (!event) return <Navigate to="/" replace />

  return (
    <div className="cumbiafest-page pt-16">
      {/* Hero with flyer */}
      <section className="relative bg-fest-teal-dark overflow-hidden min-h-[75vh] flex items-end">
        <div className="absolute inset-0 fest-bg-texture opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

        <img
          src={event.image}
          alt={event.imageAlt}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90 animate-hero-fade"
        />

        <div
          ref={heroReveal.ref}
          className={`relative z-20 w-full px-4 sm:px-6 lg:px-8 pb-12 pt-32 sm:pt-40 reveal ${
            heroReveal.isVisible ? 'revealed' : ''
          }`}
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <p
              className="font-fest-elegant text-3xl sm:text-4xl text-fest-yellow mb-2 animate-hero-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Afrosound
            </p>
            <p
              className="font-fest-display text-sm sm:text-base tracking-[0.4em] text-white/70 uppercase mb-4 animate-hero-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              World Tour 2026
            </p>

            <h1
              className="font-fest-script text-5xl sm:text-7xl lg:text-8xl text-white fest-title-shadow mb-4 animate-fest-pop"
              style={{ animationDelay: '0.1s' }}
            >
              CumbiaFest
            </h1>

            <p
              className="font-fest-hand text-2xl sm:text-3xl lg:text-4xl text-white mb-8 animate-hero-slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              Una Noche de clásicos y cañonazos
            </p>

            <div
              className="flex flex-wrap justify-center gap-3 animate-hero-slide-up"
              style={{ animationDelay: '0.7s' }}
            >
              {event.dates.map((d, i) => (
                <span
                  key={d.city}
                  className={`inline-flex items-center gap-2 font-fest-display text-sm sm:text-base tracking-wider bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20 ${
                    i === 0 ? 'animate-fest-float' : 'animate-fest-float-delayed'
                  }`}
                >
                  {d.city} · {d.date}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 fest-bg-texture relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-fest-yellow/30 blur-2xl animate-fest-float" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-fest-blue/20 blur-2xl animate-fest-float-delayed" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={aboutReveal.ref}
            className={`reveal ${aboutReveal.isVisible ? 'revealed' : ''}`}
          >
            <p className="font-fest-display text-sm tracking-[0.35em] text-fest-blue mb-3 text-center uppercase">
              El evento
            </p>
            <h2 className="font-fest-elegant text-4xl sm:text-5xl text-deep-red text-center mb-2">
              Afrosound Live in Sydney
            </h2>
            <p className="font-fest-display text-xl sm:text-2xl tracking-wide text-fest-blue text-center mb-10 fest-retro-text">
              🎺 La gran noche de cumbia 🎺
            </p>

            <div className="space-y-5 text-gray-700 leading-relaxed text-xl bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border-2 border-white/50 shadow-lg">
              <p>
                Australia se prepara para vivir una noche histórica junto a una de las
                agrupaciones más icónicas de la música tropical colombiana:{' '}
                <strong className="font-fest-elegant text-2xl text-deep-red">Afrosound</strong> ✨
              </p>
              <p>
                Prepárate para cantar, bailar y sentir toda la energía de clásicos inolvidables
                como <em>La Danza de los Mirlos</em>, <em>Caliventura</em>,{' '}
                <em>Cumbia en Do Menor</em> y muchos más, en un show EN VIVO que traerá el
                verdadero sabor de la cumbia colombiana hasta Sydney.
              </p>
              <p className="text-deep-red text-2xl">
                Esta no es solo una fiesta… es un reencuentro con nuestra cultura, nuestros
                recuerdos y nuestra música. ❤️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo video */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video w-full rounded-2xl overflow-hidden border-4 border-black/10 shadow-xl bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ElE8qSFWIxY"
              title="CumbiaFest — Afrosound"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-fest-display text-sm tracking-[0.35em] text-fest-blue mb-3 text-center uppercase">
            Experiencia
          </p>
          <h2 className="font-fest-hand text-3xl sm:text-4xl text-deep-red text-center mb-10">
            🌴 Una experiencia única con:
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <HighlightItem key={item.text} icon={item.icon} text={item.text} />
            ))}
          </ul>
        </div>
      </section>

      {/* Dates & urgency — redesigned */}
      <section className="relative py-24 lg:py-32 fest-bg-texture overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-fest-yellow/20 blur-3xl animate-fest-float" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-fest-blue/15 blur-3xl animate-fest-float-delayed" />

        <div
          ref={datesReveal.ref}
          className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative reveal ${
            datesReveal.isVisible ? 'revealed' : ''
          }`}
        >
          <div className="text-center mb-14">
            <p className="font-fest-display text-sm tracking-[0.4em] text-fest-blue uppercase mb-3">
              Fechas del tour
            </p>
            <h2 className="font-fest-script text-4xl sm:text-5xl lg:text-6xl text-deep-red fest-title-shadow mb-3">
              ¿Dónde nos vemos?
            </h2>
            <p className="font-fest-hand text-xl sm:text-2xl text-gray-600">
              Dos ciudades, una sola fiesta inolvidable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {event.dates.map((d, i) => (
              <TourDateCard key={d.city} dateInfo={d} index={i} />
            ))}
          </div>

          <div
            className={`text-center reveal stagger-3 ${datesReveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="inline-block bg-deep-red text-white rounded-2xl px-8 py-5 mb-8 shadow-xl animate-fest-pulse">
              <p className="font-fest-hand text-xl sm:text-2xl">
                🚨 Cupos limitados – asegura tu entrada antes de que se agoten
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={event.dates[0].ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-fest-yellow text-fest-blue px-10 py-4 rounded-full font-fest-display text-lg tracking-widest uppercase transition-all duration-300 hover:bg-yellow-300 hover:shadow-xl hover:shadow-fest-yellow/30 hover:-translate-y-1 hover:scale-105"
              >
                Tickets Sydney
              </a>
              <a
                href={event.dates[1].ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-fest-yellow text-fest-blue px-10 py-4 rounded-full font-fest-display text-lg tracking-widest uppercase transition-all duration-300 hover:bg-yellow-300 hover:shadow-xl hover:shadow-fest-yellow/30 hover:-translate-y-1 hover:scale-105"
              >
                Tickets Melbourne
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section className="py-20 lg:py-28 bg-cream" id="entradas">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-fest-display text-sm tracking-[0.35em] text-fest-blue mb-3 text-center uppercase">
            Entradas
          </p>
          <h2 className="font-fest-script text-3xl sm:text-4xl text-deep-red text-center mb-3">
            Elige tu entrada
          </h2>
          <p className="text-center text-gray-500 text-lg mb-10">
            Las entradas se liberan por etapas. Compra para{' '}
            <a
              href={event.dates[0].ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fest-blue hover:underline font-fest-display tracking-wide"
            >
              Sydney
            </a>{' '}
            o{' '}
            <a
              href={event.dates[1].ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fest-blue hover:underline font-fest-display tracking-wide"
            >
              Melbourne
            </a>
            .
          </p>

          <div className="space-y-4">
            {event.ticketTiers.map((tier, i) => (
              <TicketTierCard key={tier.name} tier={tier} index={i} />
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={event.dates[0].ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-deep-red text-white px-10 py-4 rounded-full font-fest-display text-base tracking-widest uppercase transition-all duration-300 hover:bg-red-900 hover:shadow-lg hover:-translate-y-0.5"
            >
              Tickets Sydney →
            </a>
            <a
              href={event.dates[1].ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-deep-red text-white px-10 py-4 rounded-full font-fest-display text-base tracking-widest uppercase transition-all duration-300 hover:bg-red-900 hover:shadow-lg hover:-translate-y-0.5"
            >
              Tickets Melbourne →
            </a>
          </div>
        </div>
      </section>

      {/* Organizers & sponsors */}
      <section className="py-20 pb-28 fest-bg-texture">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-700 text-lg">
          <p className="mb-2">
            <span className="font-fest-display text-deep-red tracking-wide">🎟️ Organiza:</span>{' '}
            Tierra Querida Productions
          </p>
          <p className="mb-6">
            <span className="font-fest-display text-deep-red tracking-wide">Patrocina:</span>{' '}
            {sponsors.join(' · ')}
          </p>
          <a
            href="https://www.instagram.com/tierraquerida.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-fest-blue font-fest-display tracking-wide text-base hover:underline"
          >
            📲 Instagram: @tierraquerida.au
          </a>
        </div>
      </section>
    </div>
  )
}

export default CumbiaFestPage
