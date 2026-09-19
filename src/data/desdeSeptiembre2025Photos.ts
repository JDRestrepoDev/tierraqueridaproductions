/**
 * Desde Septiembre se siente que viene Diciembre — 2025 (Sydney)
 * Folder: gigs/desde_septiembre2025/image*.jpg
 */

const photoModules = import.meta.glob(
  '../assets/images/gigs/desde_septiembre2025/*.{jpg,jpeg,JPG,JPEG}',
  { eager: true, import: 'default' }
) as Record<string, string>

function imageNumber(path: string): number {
  const match = path.match(/image(\d+)\.(?:jpe?g)$/i)
  return match ? Number(match[1]) : 0
}

export const desdeSeptiembre2025Photos: string[] = Object.entries(photoModules)
  .sort(([a], [b]) => imageNumber(a) - imageNumber(b))
  .map(([, src]) => src)

export const desdeSeptiembre2025Cover = desdeSeptiembre2025Photos[0] ?? ''
