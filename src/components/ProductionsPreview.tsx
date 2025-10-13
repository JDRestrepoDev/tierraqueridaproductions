import { Link } from 'react-router-dom'
import Productions from './Productions'

const ProductionsPreview = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-deep-red mb-4">Productions & Services</h2>
          <p className="text-lg text-gray-600">Comprehensive event and artist management services</p>
        </div>
        <Productions />
        <div className="text-center mt-12">
          <Link
            to="/productions"
            className="inline-block bg-deep-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductionsPreview
