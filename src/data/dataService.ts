import type { Show, GalleryItem } from './types'
import gig1 from '../assets/images/gigs/1.jpg'
import gig2 from '../assets/images/gigs/2.jpg'
import gig3 from '../assets/images/gigs/3.jpg'
import gig4 from '../assets/images/gigs/4.jpg'

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
