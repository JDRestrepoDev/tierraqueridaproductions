import { useScrollReveal } from '../hooks/useScrollReveal'
import type { HomeFestTheme } from './HomeFestSection'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'center' | 'left'
  festTheme?: HomeFestTheme
  headingTag?: 'h1' | 'h2'
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
  festTheme,
  headingTag = 'h2',
}: SectionHeadingProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const isFest = festTheme !== undefined
  const isLightBg = festTheme === 'white'
  const HeadingTag = headingTag

  return (
    <div
      ref={ref}
      className={`mb-14 reveal ${isVisible ? 'revealed' : ''} ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {eyebrow && !isFest && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] mb-3 ${
            light ? 'text-gold/90' : 'text-turquoise'
          }`}
        >
          {eyebrow}
        </p>
      )}
      {eyebrow && isFest && (
        <span
          className={`inline-block mb-4 px-4 py-1.5 rounded-full backdrop-blur-sm text-xs font-bold uppercase tracking-[0.2em] shadow-lg ${
            isLightBg
              ? 'bg-black/15 border border-black/20 text-deep-red'
              : 'bg-black/25 border border-white/30 text-white'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className={
          isFest
            ? `text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold leading-[1.05] drop-shadow-lg ${
                isLightBg ? 'text-deep-red' : 'text-white'
              }`
            : `text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold tracking-tight ${
                light ? 'text-white' : 'text-deep-red'
              }`
        }
        style={
          isFest
            ? {
                textShadow: isLightBg
                  ? '2px 2px 0 rgba(255,255,255,0.6)'
                  : '2px 2px 0 rgba(139,0,0,0.35)',
              }
            : undefined
        }
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p
          className={`mt-2 max-w-2xl font-outfit font-semibold text-xl sm:text-2xl drop-shadow-md ${
            align === 'center' ? 'mx-auto' : ''
          } ${
            isFest
              ? isLightBg
                ? 'text-fest-blue'
                : 'text-gold'
              : `text-lg font-body ${light ? 'text-white/70' : 'text-gray-500'}`
          }`}
        >
          {subtitle}
        </p>
      )}
      {!isFest && (
        <div
          className={`mt-6 h-0.5 w-16 bg-gradient-to-r from-gold to-turquoise rounded-full ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
      )}
    </div>
  )
}

export default SectionHeading
