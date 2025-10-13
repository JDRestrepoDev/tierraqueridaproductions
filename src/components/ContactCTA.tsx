import { Link } from 'react-router-dom'

const ContactCTA = () => {
  return (
    <section className="py-20 bg-deep-red text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-xl text-gray-200 mb-8">
          Book the orchestra for your next event or collaborate on a cultural production.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  )
}

export default ContactCTA
