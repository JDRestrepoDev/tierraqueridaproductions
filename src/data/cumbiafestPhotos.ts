/**
 * CumbiaFest 2026 — "Desde septiembre se siente que viene Diciembre 2026"
 * Folder slug: gigs/desde_septiembre2026/{City}/{Band}/*.jpg
 */

export type CumbiafestCity = 'Melbourne' | 'Sydney' | 'Brisbane'
export type CumbiafestBand = 'Afrosound' | 'Carrusel' | 'Tierra Querida'

export interface CumbiafestPhoto {
  src: string
  city: CumbiafestCity
  band: CumbiafestBand
}

const photoModules = import.meta.glob(
  '../assets/images/gigs/desde_septiembre2026/**/*.{jpg,jpeg,JPG,JPEG}',
  { eager: true, import: 'default' }
) as Record<string, string>

export const CITY_ORDER: CumbiafestCity[] = ['Melbourne', 'Sydney', 'Brisbane']
const BAND_ORDER: CumbiafestBand[] = ['Afrosound', 'Carrusel', 'Tierra Querida']

export function citySlug(city: CumbiafestCity): string {
  return city.toLowerCase()
}

function normalizeCity(raw: string): CumbiafestCity | null {
  const key = raw.trim().toLowerCase()
  if (key === 'melbourne') return 'Melbourne'
  if (key === 'sydney') return 'Sydney'
  if (key === 'brisbane') return 'Brisbane'
  return null
}

function normalizeBand(raw: string): CumbiafestBand | null {
  const key = raw.trim().toLowerCase()
  if (key === 'afrosound') return 'Afrosound'
  if (key === 'carrusel') return 'Carrusel'
  if (key === 'tierra querida') return 'Tierra Querida'
  return null
}

function dscNumber(path: string): number {
  const match = path.match(/DSC0*(\d+)/i)
  return match ? Number(match[1]) : 0
}

function parsePhoto(path: string, src: string): CumbiafestPhoto | null {
  const match = path.match(
    /desde_septiembre2026\/([^/]+)\/([^/]+)\/[^/]+\.(?:jpe?g)$/i
  )
  if (!match) return null
  const city = normalizeCity(match[1])
  const band = normalizeBand(match[2])
  if (!city || !band) return null
  return { src, city, band }
}

const parsed: Array<CumbiafestPhoto & { path: string }> = []
for (const [path, src] of Object.entries(photoModules)) {
  const photo = parsePhoto(path, src)
  if (photo) parsed.push({ ...photo, path })
}

parsed.sort((a, b) => {
  const cityDiff = CITY_ORDER.indexOf(a.city) - CITY_ORDER.indexOf(b.city)
  if (cityDiff !== 0) return cityDiff
  const bandDiff = BAND_ORDER.indexOf(a.band) - BAND_ORDER.indexOf(b.band)
  if (bandDiff !== 0) return bandDiff
  return dscNumber(a.path) - dscNumber(b.path)
})

export const cumbiafestPhotoEntries: CumbiafestPhoto[] = parsed.map(
  ({ src, city, band }) => ({ src, city, band })
)

export const cumbiafestPhotos: string[] = cumbiafestPhotoEntries.map((p) => p.src)

export const cumbiafestCover = cumbiafestPhotos[0] ?? ''

export function getCumbiafestPhotosByCity(city: CumbiafestCity): string[] {
  return parsed.filter((p) => p.city === city).map((p) => p.src)
}

export function getCumbiafestPhotosByBand(band: CumbiafestBand): string[] {
  return parsed.filter((p) => p.band === band).map((p) => p.src)
}

/** One gallery per city — only cities that have at least one photo */
export const cumbiafestCityGalleries: Array<{
  city: CumbiafestCity
  slug: string
  photos: string[]
}> = CITY_ORDER.map((city) => ({
  city,
  slug: citySlug(city),
  photos: getCumbiafestPhotosByCity(city),
})).filter((g) => g.photos.length > 0)
