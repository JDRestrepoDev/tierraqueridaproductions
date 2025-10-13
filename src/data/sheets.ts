import type { Show, GalleryItem } from './types'

// Google Sheets configuration
const SPREADSHEET_ID = '161oa5xpYHLhAi2vkZ95FivNsFirMWwuSUaXVjOpnthg'
const GIGS_SHEET_NAME = 'Gigs' // First tab
const GALLERY_SHEET_NAME = 'Gallery' // Second tab

// Using CSV export URL for public sheets (no API key required)

/**
 * Parses a CSV row properly handling commas within quoted fields
 */
const parseCSVRow = (row: string): string[] => {
  const result: string[] = []
  let current = ''
  let inQuotes = false
  
  for (let i = 0; i < row.length; i++) {
    const char = row[i]
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  result.push(current.trim())
  return result
}

export interface SheetsGigRow {
  id: string
  title: string
  date: string
  location: string
  time: string
  price: string
  link: string
}

export interface SheetsGalleryRow {
  id: string
  title: string
  location: string
  cover_image: string
  image_1: string
  image_2: string
  image_3: string
}

/**
 * Fetches gigs data from Google Sheets
 */
export async function fetchGigsFromSheets(): Promise<Show[]> {
  try {
    // For public sheets, we can use the CSV export URL
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${GIGS_SHEET_NAME}`
    
    const response = await fetch(csvUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const csvText = await response.text()
    const rows = csvText.split('\n').map(row => parseCSVRow(row))
    
    if (rows.length <= 1) {
      console.warn('No gigs data found in Google Sheets')
      return []
    }

    // Skip header row and transform data
    const gigsData = rows.slice(1).map((row, index): Show => {
      const show: Show = {
        id: parseInt(row[0]) || index + 1,
        title: row[1] || '',
        date: row[2] || '',
        location: row[3] || '',
        time: row[4] || '',
        price: row[5] && row[5].trim() ? row[5].trim() : undefined,
        link: row[6] && row[6].trim() ? row[6].trim().replace(/^@/, '') : undefined,
      }
      
      
      return show
    }).filter(gig => gig.title) // Filter out empty rows

    return gigsData
  } catch (error) {
    console.error('Error fetching gigs from Google Sheets:', error)
    return []
  }
}

/**
 * Fetches gallery data from Google Sheets
 */
export async function fetchGalleryFromSheets(): Promise<GalleryItem[]> {
  try {
    // For public sheets, we can use the CSV export URL
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${GALLERY_SHEET_NAME}`
    
    const response = await fetch(csvUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const csvText = await response.text()
    const rows = csvText.split('\n').map(row => parseCSVRow(row))
    
    if (rows.length <= 1) {
      console.warn('No gallery data found in Google Sheets')
      return []
    }

    // Skip header row and transform data
    const galleryData = rows.slice(1).map((row, index): GalleryItem => {
      // Get all images from column E (index 4) to the end of the row
      const images = row.slice(4).filter(img => img && img.trim())
      
      return {
        id: parseInt(row[0]) || index + 1,
        title: row[1] || '',
        location: row[2] || '',
        image: row[3] || '', // cover_image (column D)
        images: images.length > 0 ? images : [row[3] || ''], // fallback to cover_image if no additional images
      }
    }).filter(item => item.title) // Filter out empty rows

    return galleryData
  } catch (error) {
    console.error('Error fetching gallery from Google Sheets:', error)
    return []
  }
}

/**
 * Fetches all data from Google Sheets
 */
export async function fetchAllDataFromSheets() {
  try {
    const [gigs, gallery] = await Promise.all([
      fetchGigsFromSheets(),
      fetchGalleryFromSheets()
    ])

    return { gigs, gallery }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error)
    return { gigs: [], gallery: [] }
  }
}
