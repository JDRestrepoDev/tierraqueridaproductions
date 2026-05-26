import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import HomeFestSection from './HomeFestSection'

const ContactCTA = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <HomeFestSection theme="red">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center reveal ${isVisible ? 'revealed' : ''}`}
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-sm border border-gray-300 text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
          Let's collaborate
        </span>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white leading-[1.05] drop-shadow-lg mb-2"
          style={{ textShadow: '2px 2px 0 rgba(139,0,0,0.35)' }}
        >
          Ready to Work Together?
        </h2>
        <p className="text-xl sm:text-2xl font-outfit font-semibold text-gold drop-shadow-md mb-8">
          Book the orchestra or collaborate on a production
        </p>

        <p className="text-base sm:text-lg text-white/90 font-body leading-relaxed max-w-2xl mx-auto mb-10">
          Book the orchestra for your next event or collaborate on a cultural production.
        </p>

        <Link to="/contact" className="home-fest-btn-primary">
          Get In Touch
          <span aria-hidden>→</span>
        </Link>
      </div>
    </HomeFestSection>
  )
}

export default ContactCTA
