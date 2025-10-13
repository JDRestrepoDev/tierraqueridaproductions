import { useEffect, useRef, useState } from "react"
import song from "../assets/music/Colombia-Tierra-Querida.mp3"

export default function MusicBanner() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true) // start playing immediately

  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false
        audioRef.current.play()
      }
      window.removeEventListener("click", enableAudio)
    }
    window.addEventListener("click", enableAudio)
    return () => window.removeEventListener("click", enableAudio)
  }, [])
  

  const toggleMusic = () => {
    if (!audioRef.current) return
    audioRef.current.muted = false // unmute on first click
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }
  

  return (
    <div className="w-full bg-black text-white flex items-center justify-between px-4 h-10 overflow-hidden">
      {/* Scrolling song name */}
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute whitespace-nowrap animate-marquee">
          🎶 Colombia Tierra Querida – Orchestra Version 🎶 Colombia Tierra Querida – Orchestra Version 🎶
        </div>
      </div>

      {/* Play/Pause button */}
      <button
        onClick={toggleMusic}
        className="ml-4 rounded bg-white px-3 py-1 text-black text-sm font-medium hover:bg-gray-200"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Audio element */}
      <audio ref={audioRef} src={song} autoPlay loop />
    </div>
  )
}
