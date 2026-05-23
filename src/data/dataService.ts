import type { Show, GalleryItem } from './types'
import gig1 from '../assets/images/gigs/1.jpg'
import gig2 from '../assets/images/gigs/2.jpg'
import gig3 from '../assets/images/gigs/3.jpg'
import gig4 from '../assets/images/gigs/4.jpg'
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

// Hard-coded gigs (events) data
const fallbackGigs: Show[] = [
  {
    id: 1,
    title: "Private Gig",
    date: "2026-03-07", // 7 marzo
    location: "Private event",
    time: "",
  },
  {
    id: 2,
    title: "Oxford Street Mall, Bondi Junction",
    date: "2026-03-21", // 21 marzo
    location: "Bondi Junction",
    time: "",
  },
  {
    id: 3,
    title: "Lands Down Hotel",
    date: "2026-05-16", // 16 mayo
    location: "Lansdowne Hotel",
    time: "",
  }
]

const fallbackGallery: GalleryItem[] = [
  {
    id: 3,
    title: "The Global Table",
    location: "Bondi Junction, Sydney · March 21, 2026",
    image: globalTableImages[0],
    images: globalTableImages,
  },
  {
    id: 1,
    title: "Colombian Independence Day",
    location: "Miami, FL",
    image: gig1,
    images: [
      gig1,
      gig2,
      gig3
    ]
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
