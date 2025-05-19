import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Plus } from "lucide-react"

export default function FeaturedMovie({ movie }) {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 pulse-animation">
      {/* Backdrop Image */}
      <div className="absolute inset-0">
        <Image src={movie.backdrop || "/placeholder.svg"} alt={movie.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Poster */}
          <div className="w-48 h-72 rounded-xl overflow-hidden shadow-2xl hidden md:block transform hover:rotate-1 transition-transform duration-300 border-2 border-white/10">
            <Image
              src={movie.poster || "/placeholder.svg"}
              alt={movie.title}
              width={192}
              height={288}
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              {movie.title}
            </h1>

            <div className="flex items-center mt-3 text-gray-300">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <span className="font-medium">{movie.rating}</span>
              </div>
              <span className="mx-2">•</span>
              <span>{movie.year}</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {movie.genres.map((genre, index) => (
                <span
                  key={index}
                  className="text-sm bg-red-900/50 px-3 py-1 rounded-full border border-red-800/30 shadow-sm shadow-red-900/30"
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className="mt-4 text-gray-300 line-clamp-3 md:line-clamp-none">{movie.overview}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={`/movie/${movie.id}`} className="btn-primary">
                Watch Trailer
              </Link>
              <button className="btn-secondary flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
