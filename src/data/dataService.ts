import type { Show, GalleryItem } from './types'
import {
  CUMBIAFEST_PAGE_PATH,
  DESDE_SEPTIEMBRE_2025_PAGE_PATH,
} from './featuredEvents'
import {
  cumbiafestCityGalleries,
  cumbiafestCover,
} from './cumbiafestPhotos'
import {
  desdeSeptiembre2025Cover,
  desdeSeptiembre2025Photos,
} from './desdeSeptiembre2025Photos'
import gig1 from '../assets/images/gigs/1.jpg'
import gig2 from '../assets/images/gigs/2.jpg'
import gig4 from '../assets/images/gigs/4.jpg'
import cumbiafestFlyer from '../assets/images/events/cumbiafest-flyer.png'
import globalTable01 from '../assets/images/gigs/the-global-table/DSC06817.jpg'
import globalTable02 from '../assets/images/gigs/the-global-table/DSC06819.jpg'
import globalTable03 from '../assets/images/gigs/the-global-table/DSC06835.jpg'
import globalTable04 from '../assets/images/gigs/the-global-table/DSC06836.jpg'
import globalTable05 from '../assets/images/gigs/the-global-table/DSC06845.jpg'
import globalTable06 from '../assets/images/gigs/the-global-table/DSC06847.jpg'
import globalTable07 from '../assets/images/gigs/the-global-table/DSC06851.jpg'
import globalTable08 from '../assets/images/gigs/the-global-table/DSC06854.jpg'
import globalTable09 from '../assets/images/gigs/the-global-table/DSC06862.jpg'
import globalTable10 from '../assets/images/gigs/the-global-table/DSC06869.jpg'
import globalTable11 from '../assets/images/gigs/the-global-table/DSC06871.jpg'
import globalTable12 from '../assets/images/gigs/the-global-table/DSC06876.jpg'
import globalTable13 from '../assets/images/gigs/the-global-table/DSC06880.jpg'
import globalTable14 from '../assets/images/gigs/the-global-table/DSC06881.jpg'
import globalTable15 from '../assets/images/gigs/the-global-table/DSC06905.jpg'
import globalTable16 from '../assets/images/gigs/the-global-table/DSC06907.jpg'
import globalTable17 from '../assets/images/gigs/the-global-table/DSC06911.jpg'
import globalTable18 from '../assets/images/gigs/the-global-table/DSC06913.jpg'

const globalTableImages = [
  globalTable01,
  globalTable02,
  globalTable03,
  globalTable04,
  globalTable05,
  globalTable06,
  globalTable07,
  globalTable08,
  globalTable09,
  globalTable10,
  globalTable11,
  globalTable12,
  globalTable13,
  globalTable14,
  globalTable15,
  globalTable16,
  globalTable17,
  globalTable18,
]

// Hard-coded gigs (events) data — empty until new dates are confirmed
const fallbackGigs: Show[] = []

const cumbiafestGalleryItems: GalleryItem[] = cumbiafestCityGalleries.map(
  ({ city, slug, photos }, index) => ({
    id: 40 + index,
    title: `CumbiaFest 2026 · ${city}`,
    location: `${city} · September 2026`,
    image: photos[0] || cumbiafestCover || cumbiafestFlyer,
    images: photos,
    pagePath: `${CUMBIAFEST_PAGE_PATH}#${slug}`,
  })
)

const fallbackGallery: GalleryItem[] = [
  ...cumbiafestGalleryItems,
  {
    id: 3,
    title: "The Global Table",
    location: "Bondi Junction, Sydney · March 21, 2026",
    image: globalTableImages[0],
    images: globalTableImages,
  },
  {
    id: 1,
    title: "Desde Septiembre se siente que viene Diciembre - 2025",
    location: "Sydney, Australia",
    image: desdeSeptiembre2025Cover,
    images: desdeSeptiembre2025Photos,
    pagePath: DESDE_SEPTIEMBRE_2025_PAGE_PATH,
  },
  {
    id: 2,
    title: "Latin Music Festival",
    location: "Orlando, FL",
    image: gig2,
    images: [
      gig2,
      gig4,
      gig1
    ]
  }
]

export async function getGigs(): Promise<Show[]> {
  // Directly return hard-coded gigs data
  return fallbackGigs
}

export async function getGallery(): Promise<GalleryItem[]> {
  // Directly return hard-coded gallery data
  return fallbackGallery
}

/**
 * Included for backwards compatibility; no caching is used now.
 */
export function clearCache(): void {
  // no-op
}
