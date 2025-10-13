import { Link } from 'react-router-dom'
import Shows from './Shows'

const ShowsPreview = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-deep-red mb-4">Upcoming Shows</h2>
          <p className="text-lg text-gray-600">Don't miss our upcoming performances</p>
        </div>
        <Shows showAll={false} />
        <div className="text-center mt-12">
          <Link
            to="/shows"
            className="inline-block bg-deep-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            View All Shows
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ShowsPreview
