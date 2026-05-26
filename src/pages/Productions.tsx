import Productions from '../components/Productions'
import SectionHeading from '../components/SectionHeading'

const ProductionsPage = () => {
  return (
    <div className="pt-16">
      <section className="section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we offer"
            title="Productions & Services"
            subtitle="Comprehensive event and artist management services"
            festTheme="white"
            headingTag="h1"
          />
          <Productions />
        </div>
      </section>
    </div>
  )
}

export default ProductionsPage
