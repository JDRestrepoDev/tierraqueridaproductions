import Shows from '../components/Shows'
import SectionHeading from '../components/SectionHeading'

const ShowsPage = () => {
  return (
    <div className="pt-16">
      <section className="section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Live performances"
            title="Upcoming Shows"
            subtitle="Join us for our upcoming performances"
            festTheme="white"
            headingTag="h1"
          />
          <Shows showAll={true} />
        </div>
      </section>
    </div>
  )
}

export default ShowsPage
