import Hero from '../components/Hero'
import FeaturedEvent from '../components/FeaturedEvent'
import AboutSection from '../components/AboutSection'
import GalleryPreview from '../components/GalleryPreview'
import ShowsPreview from '../components/ShowsPreview'
import ProductionsPreview from '../components/ProductionsPreview'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedEvent />
      <ShowsPreview />
      <AboutSection />
      <GalleryPreview />
      <ProductionsPreview />
      <ContactCTA />
    </>
  )
}

export default Home
