import React from 'react'

import { useState } from "react"
// import { moods } from "@/lib/movieData"
import MovieCard from "./MovieCard"

export default function MoodSection({ movies }) {


 const moods = [
  { name: "Chill", color: "bg-blue-500" },
  { name: "Intense", color: "bg-red-500" },
  { name: "Tearjerkers", color: "bg-purple-500" },
  { name: "Laugh Out Loud", color: "bg-yellow-500" },
  { name: "Mind-bending", color: "bg-green-500" },
  { name: "Nostalgic", color: "bg-pink-500" },
]

  const [activeMood, setActiveMood] = useState(moods[0].name)

  // Filter movies based on mood (this would be more sophisticated in a real app)
  const getMoodMovies = (mood) => {
    switch (mood) {
      case "Chill":
        return movies.filter((m) => m.genres.includes("Drama") || m.genres.includes("Animation"))
      case "Intense":
        return movies.filter((m) => m.genres.includes("Action") || m.genres.includes("Thriller"))
      case "Tearjerkers":
        return movies.filter((m) => m.genres.includes("Drama"))
      case "Laugh Out Loud":
        return movies.filter((m) => m.genres.includes("Comedy"))
      case "Mind-bending":
        return movies.filter((m) => m.genres.includes("Sci-Fi"))
      case "Nostalgic":
        return movies.filter((m) => m.year < 2000)
      default:
        return movies.slice(0, 4)
    }
  }

  const filteredMovies = getMoodMovies(activeMood).slice(0, 4)

  return (
    <div className="glass-card rounded-2xl p-6">
      <h2 className="section-title">What's Your Mood Today?</h2>

      {/* Mood Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setActiveMood(mood.name)}
            className={`px-4 py-2 rounded-full transition-all duration-300 shadow-md ${
              activeMood === mood.name
                ? `${mood.color} text-white shadow-${mood.color.replace("bg-", "")}/30 border border-white/10`
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-black/20 border border-gray-700"
            }`}
          >
            {mood.name}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
