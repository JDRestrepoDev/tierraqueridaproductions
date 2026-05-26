import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import HomeFestSection from './HomeFestSection'
import Productions from './Productions'

const ProductionsPreview = () => {
  return (
    <HomeFestSection theme="white">
      <SectionHeading
        festTheme="white"
        eyebrow="What we offer"
        title="Productions & Services"
        subtitle="Comprehensive event and artist management services"
      />
      <Productions />
      <div className="text-center mt-14">
        <Link to="/productions" className="home-fest-btn-primary">
          Learn More
          <span aria-hidden>→</span>
        </Link>
      </div>
    </HomeFestSection>
  )
}

export default ProductionsPreview
