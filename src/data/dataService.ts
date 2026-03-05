import type { Show, GalleryItem } from './types'

// Hard-coded gigs (events) data
const fallbackGigs: Show[] = [
  {
    id: 1,
    title: "Spring Latin Festival",
    date: "March 15, 2024",
    location: "Bayfront Park, Miami",
    time: "7:00 PM - 10:00 PM",
    price: "$25"
  },
  {
    id: 2,
    title: "Corporate Gala",
    date: "April 22, 2024",
    location: "Convention Center, Orlando",
    time: "6:30 PM - 11:00 PM",
    price: "$50"
  },
  {
    id: 3,
    title: "Cinco de Mayo Celebration",
    date: "May 18, 2024",
    location: "Downtown Tampa",
    time: "5:00 PM - 9:00 PM",
    price: "$20"
  }
]

const fallbackGallery: GalleryItem[] = [
  {
    id: 1,
    title: "Colombian Independence Day",
    location: "Miami, FL",
    image: "/src/assets/images/gigs/1.jpg",
    images: [
      "/src/assets/images/gigs/1.jpg",
      "/src/assets/images/gigs/2.jpg",
      "/src/assets/images/gigs/3.jpg"
    ]
  },
  {
    id: 2,
    title: "Latin Music Festival",
    location: "Orlando, FL",
    image: "/src/assets/images/gigs/2.jpg",
    images: [
      "/src/assets/images/gigs/2.jpg",
      "/src/assets/images/gigs/4.jpg",
      "/src/assets/images/gigs/1.jpg"
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
