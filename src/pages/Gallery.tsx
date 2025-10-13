import Gallery from '../components/Gallery'

const GalleryPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-playfair font-bold text-deep-red mb-4">Gallery</h1>
            <p className="text-xl text-gray-600">Past performances and memorable events</p>
          </div>
          <Gallery showAll={true} />
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
