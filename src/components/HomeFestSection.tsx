import type { ReactNode } from 'react'

export type HomeFestTheme = 'white' | 'blue' | 'red'

interface HomeFestSectionProps {
  theme: HomeFestTheme
  children: ReactNode
  className?: string
  showStringLights?: boolean
}

const themeStyles: Record<
  HomeFestTheme,
  {
    gradient: string
    radialTop: string
    radialBottom: string
    blurLeft: string
    blurRight: string
  }
> = {
  white: {
    gradient: 'bg-gradient-to-br from-slate-400 via-gray-100 to-sky-300',
    radialTop: 'bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.55)_0%,_transparent_55%)]',
    radialBottom: 'bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,77,140,0.18)_0%,_transparent_50%)]',
    blurLeft: 'bg-fest-blue/15',
    blurRight: 'bg-white/40',
  },
  blue: {
    gradient: 'bg-gradient-to-br from-sky-400 via-fest-blue to-blue-950',
    radialTop: 'bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.25)_0%,_transparent_55%)]',
    radialBottom: 'bg-[radial-gradient(ellipse_at_bottom_left,_rgba(45,212,191,0.2)_0%,_transparent_50%)]',
    blurLeft: 'bg-gold/20',
    blurRight: 'bg-turquoise/25',
  },
  red: {
    gradient: 'bg-gradient-to-br from-red-400 via-deep-red to-red-950',
    radialTop: 'bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.22)_0%,_transparent_55%)]',
    radialBottom: 'bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,185,35,0.2)_0%,_transparent_50%)]',
    blurLeft: 'bg-gold/20',
    blurRight: 'bg-orange-400/20',
  },
}

const HomeFestSection = ({
  theme,
  children,
  className = '',
  showStringLights = false,
}: HomeFestSectionProps) => {
  const styles = themeStyles[theme]

  return (
    <section
      className={`home-fest-section home-fest-section--${theme} relative overflow-hidden py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className={`absolute inset-0 ${styles.gradient}`} />
      <div className={`absolute inset-0 ${styles.radialTop}`} />
      <div className={`absolute inset-0 ${styles.radialBottom}`} />

      {showStringLights && (
        <div
          className="absolute top-6 left-0 right-0 flex justify-center gap-3 sm:gap-5 px-4 pointer-events-none z-10"
          aria-hidden
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shadow-sm"
              style={{
                backgroundColor: i % 3 === 0 ? '#E8B923' : i % 3 === 1 ? '#fff' : '#2DD4BF',
                boxShadow: `0 0 12px ${i % 3 === 0 ? '#E8B923' : i % 3 === 1 ? '#fff' : '#2DD4BF'}`,
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`absolute -left-16 top-1/3 w-48 h-48 rounded-full ${styles.blurLeft} blur-2xl pointer-events-none`}
        aria-hidden
      />
      <div
        className={`absolute -right-10 bottom-1/4 w-56 h-56 rounded-full ${styles.blurRight} blur-3xl pointer-events-none`}
        aria-hidden
      />
      <div
        className="absolute top-20 right-[8%] w-20 h-20 border-4 border-white/20 rounded-2xl rotate-12 pointer-events-none hidden lg:block"
        aria-hidden
      />
      <div
        className="absolute bottom-16 left-[6%] w-14 h-14 bg-white/10 rounded-full pointer-events-none hidden md:block"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">{children}</div>
    </section>
  )
}

export default HomeFestSection
