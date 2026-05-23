import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import Gallery from './Gallery'

const GalleryPreview = () => {
  return (
    <section className="section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our work"
          title="Past Gigs & Events"
          subtitle="See our recent performances and celebrations"
        />
        <Gallery showAll={false} />
        <div className="text-center mt-14">
          <Link to="/gallery" className="btn-dark">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
