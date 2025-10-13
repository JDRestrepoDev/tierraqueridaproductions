import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BannerHeader from './BannerHeader'
import SocialLinks from './SocialLinks'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/shows', label: 'Shows' },
    { path: '/productions', label: 'Productions' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50">
      <BannerHeader
        title="Tierra Querida – Live in Sydney"
        date="Oct 12, 2025"
        ticketUrl="https://tickets.example.com"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-cinzel font-bold text-gold">
            Tierra Querida
          </Link>
          
          {/* Desktop: right-aligned social icons then menu */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <SocialLinks
              size="sm"
              className="gap-2"
              instagram="https://www.instagram.com/tierraquerida.au/"
              tiktok="https://tiktok.com/@yourpage"
              spotify="https://open.spotify.com/artist/yourid"
              youtube="https://youtube.com/@yourchannel"
              twitter="https://twitter.com/yourhandle"
            />
            <nav className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-gold border-b-2 border-gold'
                      : 'text-white hover:text-gold'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold focus:outline-none focus:text-gold"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              <div className="px-1 pb-2">
                <SocialLinks
                  size="md"
                  instagram="https://www.instagram.com/tierraquerida.au/"
                  tiktok="https://tiktok.com/@yourpage"
                  spotify="https://open.spotify.com/artist/yourid"
                  youtube="https://youtube.com/@yourchannel"
                  twitter="https://twitter.com/yourhandle"
                />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-gold bg-gray-800'
                      : 'text-white hover:text-gold hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
