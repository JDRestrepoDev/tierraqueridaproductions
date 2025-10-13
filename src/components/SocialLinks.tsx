import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaSpotify, FaTwitter } from "react-icons/fa";

type Size = "xs" | "sm" | "md";

const SIZES: Record<Size, { btn: string; icon: string; gap: string }> = {
  xs: { btn: "h-6 w-6",  icon: "h-3.5 w-3.5", gap: "gap-2" },     // perfect for h-10 banner
  sm: { btn: "h-7 w-7",  icon: "h-4 w-4",     gap: "gap-2.5" },
  md: { btn: "h-9 w-9",  icon: "h-5 w-5",     gap: "gap-3" },
};

type Props = {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  tiktok?: string;
  spotify?: string;
  twitter?: string;
  className?: string;
  size?: Size; // 👈 new
};

export default function SocialLinks({
  instagram, facebook, youtube, tiktok, spotify, twitter,
  className = "", size = "md",
}: Props) {
  const s = SIZES[size];
  const base = `inline-flex ${s.btn} items-center justify-center rounded-full ring-1 ring-white/20 text-gold hover:text-black hover:bg-gold transition`;

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      {youtube && (
        <a href={youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={base}>
          <FaYoutube className={s.icon} />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={base}>
          <FaInstagram className={s.icon} />
        </a>
      )}
      {facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={base}>
          <FaFacebookF className={s.icon} />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={base}>
          <FaTwitter className={s.icon} />
        </a>
      )}
      {tiktok && (
        <a href={tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={base}>
          <FaTiktok className={s.icon} />
        </a>
      )}
      {spotify && (
        <a href={spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" className={base}>
          <FaSpotify className={s.icon} />
        </a>
      )}
    </div>
  );
}
