import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import HomeFestSection from './HomeFestSection'
import Gallery from './Gallery'

const GalleryPreview = () => {
  return (
    <HomeFestSection theme="red" showStringLights>
      <SectionHeading
        festTheme="red"
        eyebrow="Our work"
        title="Past Gigs & Events"
        subtitle="See our recent performances and celebrations"
      />
      <Gallery showAll={false} />
      <div className="text-center mt-14">
        <Link to="/gallery" className="home-fest-btn-primary">
          View Full Gallery
          <span aria-hidden>→</span>
        </Link>
      </div>
    </HomeFestSection>
  )
}

export default GalleryPreview
