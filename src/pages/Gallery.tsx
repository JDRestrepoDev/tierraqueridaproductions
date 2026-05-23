import Gallery from '../components/Gallery'

const GalleryPage = () => {
  return (
    <div className="pt-16">
      <section className="section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">Our work</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold text-deep-red tracking-tight mb-4">Gallery</h1>
            <p className="text-lg text-gray-500 font-body">Past performances and memorable events</p>
          </div>
          <Gallery showAll={true} />
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
