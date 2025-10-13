import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import GalleryPreview from '../components/GalleryPreview'
import ShowsPreview from '../components/ShowsPreview'
import ProductionsPreview from '../components/ProductionsPreview'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <>
      <Hero />
      <ShowsPreview />
      <AboutSection />
      <GalleryPreview />
      <ProductionsPreview />
      <ContactCTA />
    </>
  )
}

export default Home
