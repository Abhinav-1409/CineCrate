import React from 'react'
import { Link } from "react-router-dom"
import { Star } from "lucide-react"

export default function MovieCard({ movie, className = "" }) {
  return (
    <Link to={`/movie/${movie.id}`} className={`block ${className}`}>
      <div className="relative overflow-hidden rounded-xl card-hover shadow-lg shadow-black/40 border border-gray-800/50">
        <div className="aspect-[2/3] relative">
          <img
            src={movie.poster || "/placeholder.svg"}
            alt={movie.title}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold truncate">{movie.title}</h3>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm">{movie.rating}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-300">{movie.year}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {movie.genres.slice(0, 2).map((genre, index) => (
                  <span key={index} className="text-xs bg-red-900/70 px-2 py-0.5 rounded-full border border-red-800/30">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
