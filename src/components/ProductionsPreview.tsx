import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import Productions from './Productions'

const ProductionsPreview = () => {
  return (
    <section className="section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we offer"
          title="Productions & Services"
          subtitle="Comprehensive event and artist management services"
        />
        <Productions />
        <div className="text-center mt-14">
          <Link to="/productions" className="btn-dark">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductionsPreview
