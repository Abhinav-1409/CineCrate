"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { movies } from "@/lib/movieData"
import MovieCarousel from "@/components/MovieCarousel"
import { Star, Clock, Heart, Plus, Play } from "lucide-react"

export default function MoviePage() {
  const { id } = useParams()
  const movie = movies.find((m) => m.id === Number.parseInt(id)) || movies[0]

  const [activeTab, setActiveTab] = useState("cast")

  // Get similar movies (in a real app, this would use a recommendation algorithm)
  const similarMovies = movies
    .filter((m) => m.id !== movie.id && m.genres.some((g) => movie.genres.includes(g)))
    .slice(0, 8)

  return (
    <div>
      {/* Hero Backdrop Section */}
      <section className="relative w-full h-[500px]">
        <div className="absolute inset-0">
          <Image src={movie.backdrop || "/placeholder.svg"} alt={movie.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col md:flex-row items-end pb-8 gap-6">
          {/* Poster */}
          <div className="w-40 h-60 md:w-64 md:h-96 rounded-xl overflow-hidden shadow-2xl -mb-20 md:-mb-32 border-4 border-gray-900">
            <Image
              src={movie.poster || "/placeholder.svg"}
              alt={movie.title}
              width={256}
              height={384}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold">{movie.title}</h1>

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
                <Link
                  key={index}
                  href={`/films?genre=${genre}`}
                  className="text-sm bg-red-900/50 px-3 py-1 rounded-full hover:bg-red-800/50 transition-colors"
                >
                  {genre}
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Trailer
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add to Watchlist
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Like
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 mt-12 md:mt-24">
        {/* Overview Section */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-500 text-sm">Director</h3>
                <p className="text-white">{movie.director}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Release Date</h3>
                <p className="text-white">{movie.year}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trailer Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Trailer</h2>
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src={movie.trailer}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Cast & Crew Toggle Section */}
        <section className="mb-12">
          <div className="flex border-b border-gray-800 mb-6">
            <button
              onClick={() => setActiveTab("cast")}
              className={`px-6 py-3 font-medium ${
                activeTab === "cast" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
              }`}
            >
              Cast
            </button>
            <button
              onClick={() => setActiveTab("crew")}
              className={`px-6 py-3 font-medium ${
                activeTab === "crew" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
              }`}
            >
              Crew
            </button>
          </div>

          {activeTab === "cast" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {movie.cast.map((person, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square rounded-full overflow-hidden mb-2 mx-auto w-24 h-24">
                    <Image
                      src={person.photo || "/placeholder.svg"}
                      alt={person.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-medium">{person.name}</h3>
                  <p className="text-sm text-gray-400">{person.character}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="glass-effect rounded-xl p-4 text-center">
                <h3 className="font-medium mb-1">{movie.director}</h3>
                <p className="text-sm text-gray-400">Director</p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <h3 className="font-medium mb-1">Jane Smith</h3>
                <p className="text-sm text-gray-400">Writer</p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <h3 className="font-medium mb-1">John Johnson</h3>
                <p className="text-sm text-gray-400">Producer</p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <h3 className="font-medium mb-1">Sarah Williams</h3>
                <p className="text-sm text-gray-400">Cinematographer</p>
              </div>
            </div>
          )}
        </section>

        {/* Movie DNA Section (Placeholder) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Movie DNA</h2>
          <div className="glass-effect rounded-xl p-6 h-64 flex items-center justify-center">
            <p className="text-gray-400">
              Interactive graph visualization would be implemented here using D3.js or vis.js
            </p>
          </div>
        </section>

        {/* Similar Movies Section */}
        <section className="mb-12">
          <MovieCarousel title="Similar Movies" movies={similarMovies} />
        </section>
      </div>
    </div>
  )
}
