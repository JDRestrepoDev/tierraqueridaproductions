import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Tierra Querida</h3>
            <p className="text-gray-300 mb-4">
              Bringing Latin rhythms to the stage and producing unforgettable events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/shows" className="text-gray-300 hover:text-gold transition-colors">
                  Shows
                </Link>
              </li>
              <li>
                <Link to="/productions" className="text-gray-300 hover:text-gold transition-colors">
                  Productions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@tierraquerida.com</p>
              <p>(305) 555-0123</p>
              <p>Miami, Florida</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Tierra Querida Orchestra & Productions. All rights reserved.</p>
        </div>
      </div>
      <SocialLinks
  className="justify-center pt-4"
  instagram="https://instagram.com/yourpage"
  tiktok="https://tiktok.com/@yourpage"
  spotify="https://open.spotify.com/artist/yourid"
/>

    </footer>
  )
}

export default Footer
