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
}

export interface Production {
  id: number
  title: string
  description: string
  icon: string
  backgroundImage: string
}
