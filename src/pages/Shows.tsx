import Shows from '../components/Shows'

const ShowsPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-playfair font-bold text-deep-red mb-4">Upcoming Shows</h1>
            <p className="text-xl text-gray-600">Join us for our upcoming performances</p>
          </div>
          <Shows showAll={true} />
        </div>
      </section>
    </div>
  )
}

export default ShowsPage
