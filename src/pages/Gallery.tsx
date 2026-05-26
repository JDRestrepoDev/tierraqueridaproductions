import Gallery from '../components/Gallery'
import SectionHeading from '../components/SectionHeading'

const GalleryPage = () => {
  return (
    <div className="pt-16">
      <section className="section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our work"
            title="Gallery"
            subtitle="Past performances and memorable events"
            festTheme="white"
            headingTag="h1"
          />
          <Gallery showAll={true} />
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
