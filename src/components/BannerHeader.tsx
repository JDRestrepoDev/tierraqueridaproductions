import SocialLinks from "./SocialLinks";

interface BannerHeaderProps {
  title: string;
  date: string;
  ticketUrl: string;
}

export default function BannerHeader({ title, date, ticketUrl }: BannerHeaderProps) {
  return (
    <div className="hidden md:grid grid-cols-3 items-center w-full h-10 bg-gray-800 text-white px-4 text-sm">
      {/* left spacer */}
      <div />

      {/* centered content */}
      <div className="min-w-0 flex items-center justify-center gap-3">
        <span className="truncate">
          🎶 <strong>{title}</strong> – {date}
        </span>
        <a
          href={ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-gold px-3 py-1 text-xs font-medium text-black hover:bg-yellow-400 whitespace-nowrap"
        >
          Get Tickets
        </a>
      </div>

      {/* right-aligned social icons (banner-only small size) */}
      {/* <div className="flex justify-end">
        <SocialLinks
          size="xs"              // 👈 fits inside h-10
          className=""           // no padding; keep them vertically centered
          instagram="https://www.instagram.com/tierraquerida.au/"
          tiktok="https://tiktok.com/@yourpage"
          spotify="https://open.spotify.com/artist/yourid"
        />
      </div> */}
    </div>
  );
}
