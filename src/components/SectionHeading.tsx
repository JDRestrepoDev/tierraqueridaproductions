import { useScrollReveal } from '../hooks/useScrollReveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'center' | 'left'
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
}: SectionHeadingProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`mb-14 reveal ${isVisible ? 'revealed' : ''} ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] mb-3 ${
            light ? 'text-gold/90' : 'text-turquoise'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold tracking-tight ${
          light ? 'text-white' : 'text-deep-red'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl font-body ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-0.5 w-16 bg-gradient-to-r from-gold to-turquoise rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  )
}

export default SectionHeading
