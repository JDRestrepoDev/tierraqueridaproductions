import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ContactCTA = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-28 overflow-hidden bg-deep-red text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-deep-red via-deep-red to-black/80" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />

      <div
        className={`relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 reveal ${
          isVisible ? 'revealed' : ''
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/90 mb-4">
          Let's collaborate
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold tracking-tight mb-6">
          Ready to Work Together?
        </h2>
        <p className="text-lg text-white/70 mb-10 font-body max-w-2xl mx-auto leading-relaxed">
          Book the orchestra for your next event or collaborate on a cultural production.
        </p>
        <Link to="/contact" className="btn-primary text-base">
          Get In Touch
        </Link>
      </div>
    </section>
  )
}

export default ContactCTA
