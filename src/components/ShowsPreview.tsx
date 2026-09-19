import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import HomeFestSection from './HomeFestSection'
import Shows from './Shows'
import { getGigs } from '../data/dataService'

const ShowsPreview = () => {
  const [hasShows, setHasShows] = useState(true)

  useEffect(() => {
    getGigs().then((gigs) => setHasShows(gigs.length > 0))
  }, [])

  return (
    <HomeFestSection theme="white">
      <SectionHeading
        festTheme="white"
        eyebrow="Live performances"
        title="Upcoming Shows"
        subtitle={hasShows ? "Don't miss our upcoming performances" : 'New dates coming soon'}
      />
      <Shows showAll={false} />
      {hasShows && (
        <div className="text-center mt-14">
          <Link to="/shows" className="home-fest-btn-primary">
            View All Shows
            <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </HomeFestSection>
  )
}

export default ShowsPreview
