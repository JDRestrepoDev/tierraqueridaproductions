import Productions from '../components/Productions'

const ProductionsPage = () => {
  return (
    <div className="pt-16">
      <section className="section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">What we offer</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold text-deep-red tracking-tight mb-4">Productions & Services</h1>
            <p className="text-lg text-gray-500 font-body">Comprehensive event and artist management services</p>
          </div>
          <Productions />
        </div>
      </section>
    </div>
  )
}

export default ProductionsPage
