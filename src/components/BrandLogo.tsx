import { Link } from 'react-router-dom'

interface BrandLogoProps {
  className?: string
}

const BrandLogo = ({ className = '' }: BrandLogoProps) => {
  return (
    <Link
      to="/"
      className={`block shrink-0 hover:opacity-95 transition-opacity ${className}`}
      aria-label="Tierra Querida — Home"
    >
      <span
        className="block bg-transparent font-brand text-1xl sm:text-2xl leading-none tracking-wide text-gold"
        style={{
          WebkitTextStroke: '1px white',
          textShadow:
            '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
        }}
      >
        Tierra Querida
      </span>
    </Link>
  )
}

export default BrandLogo
