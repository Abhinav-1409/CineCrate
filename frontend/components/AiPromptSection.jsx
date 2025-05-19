"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import MovieCard from "./MovieCard"
import { movies } from "@/lib/movieData"

export default function AiPromptSection() {
  const [prompt, setPrompt] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()

    if (!prompt.trim()) return

    setIsLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      // Simple keyword matching for demo purposes
      // In a real app, this would use a real AI model
      const keywords = prompt.toLowerCase().split(" ")

      const filteredMovies = movies.filter((movie) => {
        const movieText = `${movie.title} ${movie.overview} ${movie.genres.join(" ")}`.toLowerCase()
        return keywords.some((keyword) => movieText.includes(keyword))
      })

      setResults(filteredMovies.slice(0, 4))
      setIsLoading(false)
      setHasSearched(true)
    }, 1500)
  }

  return (
    <div className="glass-card rounded-2xl p-6 border-2 border-red-900/20 shadow-xl shadow-black/30">
      <h2 className="section-title">AI Movie Finder</h2>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to watch..."
            className="w-full bg-gray-800/80 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700 focus:border-red-500/50 shadow-inner shadow-black/30"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 rounded-lg p-2 transition-colors shadow-md shadow-red-900/30"
            disabled={isLoading}
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Try: "I want a thriller with psychological tension" or "Show me sci-fi movies about time travel"
        </p>
      </form>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : hasSearched ? (
        results.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Here's what we found for you:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8 glass-effect rounded-xl p-6">
            <p className="text-gray-400">No movies found matching your criteria. Try a different prompt!</p>
          </div>
        )
      ) : null}
    </div>
  )
}
