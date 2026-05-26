import { Link } from 'react-router-dom'
import logo from '../assets/logos/tierra-querida2.png'

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
      <img
        src={logo}
        alt="Tierra Querida"
        className="h-10 sm:h-11 w-auto object-contain"
      />
    </Link>
  )
}

export default BrandLogo
