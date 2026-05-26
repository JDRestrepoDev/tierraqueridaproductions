import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import HomeFestSection from './HomeFestSection'
import Shows from './Shows'

const ShowsPreview = () => {
  return (
    <HomeFestSection theme="white">
      <SectionHeading
        festTheme="white"
        eyebrow="Live performances"
        title="Upcoming Shows"
        subtitle="Don't miss our upcoming performances"
      />
      <Shows showAll={false} />
      <div className="text-center mt-14">
        <Link to="/shows" className="home-fest-btn-primary">
          View All Shows
          <span aria-hidden>→</span>
        </Link>
      </div>
    </HomeFestSection>
  )
}

export default ShowsPreview
