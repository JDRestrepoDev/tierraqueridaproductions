import { Link } from 'react-router-dom'
import heroLogo from '../assets/logos/tierra-querida-hero-transparent.png'
import promoVideo from '../assets/videos/promo-video-trimmed.mp4'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        onError={(e) => {
          const target = e.target as HTMLVideoElement
          target.style.display = 'none'
        }}
      >
        <source src={promoVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-deep-red/20 mix-blend-multiply" />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <img
          src={heroLogo}
          alt="Tierra Querida Logo"
          className="block mx-auto mb-4 w-2/3 max-w-[300px] pt-20 opacity-0 animate-hero-slide-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        />

        <p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/90 mb-3 opacity-0 animate-hero-slide-up"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          Orchestra & Productions
        </p>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold tracking-tight text-white mb-6 opacity-0 animate-hero-slide-up"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          Latin rhythms on stage
        </h1>

        <p
          className="text-base sm:text-lg text-white/75 mb-12 max-w-xl mx-auto font-body leading-relaxed opacity-0 animate-hero-slide-up"
          style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
        >
          Bringing Colombian and Latin music to the stage and producing unforgettable cultural events.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-hero-slide-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          <Link to="/contact" className="btn-primary">
            Book the Orchestra
          </Link>
          <Link to="/contact" className="btn-outline">
            Work With Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/80 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
