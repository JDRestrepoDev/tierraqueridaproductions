import { fetchGigsFromSheets, fetchGalleryFromSheets } from './sheets'
import type { Show, GalleryItem } from './types'

// Fallback data in case Google Sheets is unavailable
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

// Cache for data to avoid repeated API calls
let gigsCache: Show[] | null = null
let galleryCache: GalleryItem[] | null = null
let lastFetchTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

/**
 * Gets gigs data, fetching from Google Sheets if cache is stale
 */
export async function getGigs(): Promise<Show[]> {
  const now = Date.now()
  
  // Return cached data if it's still fresh
  if (gigsCache && (now - lastFetchTime) < CACHE_DURATION) {
    return gigsCache
  }

  try {
    const gigs = await fetchGigsFromSheets()
    if (gigs.length > 0) {
      gigsCache = gigs
      lastFetchTime = now
      return gigs
    }
  } catch (error) {
    console.warn('Failed to fetch gigs from Google Sheets, using fallback data:', error)
  }

  // Use fallback data if Google Sheets fails
  return fallbackGigs
}

/**
 * Gets gallery data, fetching from Google Sheets if cache is stale
 */
export async function getGallery(): Promise<GalleryItem[]> {
  const now = Date.now()
  
  // Return cached data if it's still fresh
  if (galleryCache && (now - lastFetchTime) < CACHE_DURATION) {
    return galleryCache
  }

  try {
    const gallery = await fetchGalleryFromSheets()
    if (gallery.length > 0) {
      galleryCache = gallery
      lastFetchTime = now
      return gallery
    }
  } catch (error) {
    console.warn('Failed to fetch gallery from Google Sheets, using fallback data:', error)
  }

  // Use fallback data if Google Sheets fails
  return fallbackGallery
}

/**
 * Clears the cache to force fresh data on next request
 */
export function clearCache(): void {
  gigsCache = null
  galleryCache = null
  lastFetchTime = 0
}
