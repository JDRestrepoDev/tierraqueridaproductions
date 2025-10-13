import { Link } from 'react-router-dom'
import Gallery from './Gallery'

const GalleryPreview = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-deep-red mb-4">Past Gigs & Events</h2>
          <p className="text-lg text-gray-600">See our recent performances and celebrations</p>
        </div>
        <Gallery showAll={false} />
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block bg-deep-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
