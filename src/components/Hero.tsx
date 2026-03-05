import { Link } from 'react-router-dom'
import heroLogo from '../assets/logos/tierra-querida2.png'
import promoVideo from '../assets/videos/promo-video-trimmed.mp4'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-red via-black to-turquoise">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onError={(e) => {
          console.error('Video failed to load:', e)
          // Hide video if it fails to load and show fallback background
          const target = e.target as HTMLVideoElement
          target.style.display = 'none'
        }}
      >
        <source src={promoVideo} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-red/60 via-black/50 to-turquoise/60"></div>
      
      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6">
          Tierra Querida
        </h1> */}
        {/* <img src="/src/assets/whole-band.jpg" alt="Tierra Querida" className="w-1/2 mx-auto mb-6" /> */}
        
        <img
          src={heroLogo}
          alt="Tierra Querida Logo"
          className="block mx-auto mb-2 w-2/3 max-w-[320px] pt-20 "
        />

<h2 className="-mt-1 text-2xl sm:text-3xl lg:text-4xl font-dm-serif text-gold mb-8">
  Orchestra & Productions
</h2>

        <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-inter">
          Bringing Latin rhythms to the stage and producing unforgettable events.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
          >
            Book the Orchestra
          </Link>
          <Link
            to="/contact"
            className="border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-black transition-colors duration-300 transform hover:scale-105"
          >
            Work With Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
