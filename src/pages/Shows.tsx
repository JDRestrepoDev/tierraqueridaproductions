import Shows from '../components/Shows'

const ShowsPage = () => {
  return (
    <div className="pt-16">
      <section className="section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">Live performances</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold text-deep-red tracking-tight mb-4">Upcoming Shows</h1>
            <p className="text-lg text-gray-500 font-body">Join us for our upcoming performances</p>
          </div>
          <Shows showAll={true} />
        </div>
      </section>
    </div>
  )
}

export default ShowsPage
