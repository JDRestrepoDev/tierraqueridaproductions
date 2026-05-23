import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import Shows from './Shows'

const ShowsPreview = () => {
  return (
    <section className="section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live performances"
          title="Upcoming Shows"
          subtitle="Don't miss our upcoming performances"
        />
        <Shows showAll={false} />
        <div className="text-center mt-14">
          <Link to="/shows" className="btn-dark">
            View All Shows
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ShowsPreview
