"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { movies, genres } from "@/lib/movieData"
import MovieCard from "@/components/MovieCard"
import { Sliders, ChevronDown, X } from "lucide-react"

export default function FilmsPage() {
  const searchParams = useSearchParams()
  const initialGenre = searchParams.get("genre")

  const [selectedGenres, setSelectedGenres] = useState(initialGenre ? [initialGenre] : [])
  const [selectedLanguage, setSelectedLanguage] = useState("All")
  const [yearRange, setYearRange] = useState([1970, 2023])
  const [runtimeMax, setRuntimeMax] = useState(300)
  const [sortBy, setSortBy] = useState("rating-desc")
  const [filteredMovies, setFilteredMovies] = useState([])
  const [showFilters, setShowFilters] = useState(false)

  const languages = ["All", "English", "Japanese", "Korean", "French", "Spanish"]

  const sortOptions = [
    { value: "rating-desc", label: "Rating (High to Low)" },
    { value: "rating-asc", label: "Rating (Low to High)" },
    { value: "year-desc", label: "Year (Newest First)" },
    { value: "year-asc", label: "Year (Oldest First)" },
    { value: "runtime-desc", label: "Runtime (Longest First)" },
    { value: "runtime-asc", label: "Runtime (Shortest First)" },
  ]

  useEffect(() => {
    // Apply filters
    let result = [...movies]

    // Filter by genres
    if (selectedGenres.length > 0) {
      result = result.filter((movie) => selectedGenres.some((genre) => movie.genres.includes(genre)))
    }

    // Filter by language (in a real app, movies would have language property)
    if (selectedLanguage !== "All") {
      // This is just a placeholder since our sample data doesn't have language
      result = result.filter((movie) => movie.id % languages.indexOf(selectedLanguage) === 0)
    }

    // Filter by year range
    result = result.filter((movie) => movie.year >= yearRange[0] && movie.year <= yearRange[1])

    // Filter by runtime (only max)
    if (runtimeMax < 300) {
      result = result.filter((movie) => movie.runtime <= runtimeMax)
    }

    // Apply sorting
    const [sortKey, sortDirection] = sortBy.split("-")
    result.sort((a, b) => {
      if (sortDirection === "asc") {
        return a[sortKey] - b[sortKey]
      } else {
        return b[sortKey] - a[sortKey]
      }
    })

    setFilteredMovies(result)
  }, [selectedGenres, selectedLanguage, yearRange, runtimeMax, sortBy])

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre))
    } else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  const clearFilters = () => {
    setSelectedGenres([])
    setSelectedLanguage("All")
    setYearRange([1970, 2023])
    setRuntimeMax(300)
    setSortBy("rating-desc")
  }

  const getRuntimeLabel = (value) => {
    return value >= 300 ? "300+ min" : `${value} min`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-playfair font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
          Explore Films
        </h1>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800/80 rounded-lg px-4 py-2 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 rounded-lg p-2 shadow-md shadow-red-900/20"
          >
            <Sliders className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div
          className={`
          md:w-64 md:block glass-card rounded-xl p-4 h-fit
          ${showFilters ? "fixed inset-0 z-50 bg-gray-900 overflow-auto" : "hidden"}
        `}
        >
          {showFilters && (
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
          )}

          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Genres</h3>
              {selectedGenres.length > 0 && (
                <button onClick={() => setSelectedGenres([])} className="text-xs text-red-500 hover:text-red-400">
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                    selectedGenres.includes(genre)
                      ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md shadow-red-900/30"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md hover:shadow-black/30"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-3">Language</h3>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-3">Year Range</h3>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">{yearRange[0]}</span>
              <span className="text-sm text-gray-400">{yearRange[1]}</span>
            </div>
            <div className="relative mb-4">
              <div className="slider-track absolute inset-y-1/2 w-full -translate-y-1/2"></div>
              <input
                type="range"
                min="1970"
                max="2023"
                value={yearRange[0]}
                onChange={(e) => setYearRange([Number.parseInt(e.target.value), yearRange[1]])}
                className="slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
              />
              <input
                type="range"
                min="1970"
                max="2023"
                value={yearRange[1]}
                onChange={(e) => setYearRange([yearRange[0], Number.parseInt(e.target.value)])}
                className="slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-3">Runtime</h3>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">0 min</span>
              <span className="text-sm text-gray-400">{getRuntimeLabel(runtimeMax)}</span>
            </div>
            <div className="relative">
              <div className="slider-track absolute inset-y-1/2 w-full -translate-y-1/2"></div>
              <input
                type="range"
                min="0"
                max="300"
                step="30"
                value={runtimeMax}
                onChange={(e) => setRuntimeMax(Number.parseInt(e.target.value))}
                className="slider-thumb w-full h-2 appearance-none bg-transparent"
              />
            </div>
          </div>

          <button
            onClick={clearFilters}
            className="w-full py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg transition-colors shadow-md shadow-black/20 border border-gray-700"
          >
            Reset All Filters
          </button>
        </div>

        {/* Movie Grid */}
        <div className="flex-1">
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center glass-card rounded-2xl p-8">
              <p className="text-xl text-gray-400 mb-4">No movies match your filters</p>
              <button onClick={clearFilters} className="btn-primary">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
