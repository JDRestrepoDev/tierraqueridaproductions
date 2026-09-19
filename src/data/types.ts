export interface Show {
  id: number
  title: string
  date: string
  location: string
  time: string
  price?: string
  link?: string
}

export interface GalleryItem {
  id: number
  title: string
  location: string
  image: string
  images: string[]
  /** When set, clicking the item navigates to this event page instead of opening the lightbox */
  pagePath?: string
}

export interface Production {
  id: number
  title: string
  description: string
  icon: string
  backgroundImage: string
}
