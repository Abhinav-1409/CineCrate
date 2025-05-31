import React from 'react'

import { useState, useEffect } from "react"
// import { useSearchParams } from "next/navigation"
import MovieCard from "../components/MovieCard"
import MovieGraph from "../components/MovieGraph"; // <-- Import at the top
import { Sliders, ChevronDown, X } from "lucide-react"

export default function FilmsPage() {
    const movies = [
  {
    id: 1,
    title: "The Godfather",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 9.2,
    year: 1972,
    genres: ["Crime", "Drama"],
    runtime: 175,
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: [
      { name: "Marlon Brando", character: "Don Vito Corleone", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Al Pacino", character: "Michael Corleone", photo: "/placeholder.svg?height=100&width=100" },
      { name: "James Caan", character: "Sonny Corleone", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Robert Duvall", character: "Tom Hagen", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Pulp Fiction",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.9,
    year: 1994,
    genres: ["Crime", "Drama"],
    runtime: 154,
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: [
      { name: "John Travolta", character: "Vincent Vega", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Samuel L. Jackson", character: "Jules Winnfield", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Uma Thurman", character: "Mia Wallace", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Bruce Willis", character: "Butch Coolidge", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    isFeatured: false,
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 9.0,
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: [
      { name: "Christian Bale", character: "Bruce Wayne / Batman", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Heath Ledger", character: "Joker", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Aaron Eckhart", character: "Harvey Dent", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Michael Caine", character: "Alfred", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Inception",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.8,
    year: 2010,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 148,
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: [
      { name: "Leonardo DiCaprio", character: "Cobb", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Joseph Gordon-Levitt", character: "Arthur", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Ellen Page", character: "Ariadne", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Tom Hardy", character: "Eames", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    isFeatured: false,
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 9.3,
    year: 1994,
    genres: ["Drama"],
    runtime: 142,
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: [
      { name: "Tim Robbins", character: "Andy Dufresne", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Morgan Freeman", character: "Ellis Boyd 'Red' Redding", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Bob Gunton", character: "Warden Norton", photo: "/placeholder.svg?height=100&width=100" },
      { name: "William Sadler", character: "Heywood", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Parasite",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.6,
    year: 2019,
    genres: ["Comedy", "Drama", "Thriller"],
    runtime: 132,
    overview:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon Ho",
    cast: [
      { name: "Song Kang-ho", character: "Kim Ki-taek", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Lee Sun-kyun", character: "Park Dong-ik", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Cho Yeo-jeong", character: "Park Yeon-kyo", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Choi Woo-shik", character: "Kim Ki-woo", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
    isFeatured: false,
  },
  {
    id: 7,
    title: "Interstellar",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.6,
    year: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: [
      { name: "Matthew McConaughey", character: "Cooper", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Anne Hathaway", character: "Brand", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Jessica Chastain", character: "Murph", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Michael Caine", character: "Professor Brand", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    isFeatured: false,
  },
  {
    id: 8,
    title: "The Matrix",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.7,
    year: 1999,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    overview:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: [
      { name: "Keanu Reeves", character: "Neo", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Laurence Fishburne", character: "Morpheus", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Carrie-Anne Moss", character: "Trinity", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Hugo Weaving", character: "Agent Smith", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    isFeatured: false,
  },
  {
    id: 9,
    title: "Spirited Away",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.6,
    year: 2001,
    genres: ["Animation", "Adventure", "Family"],
    runtime: 125,
    overview:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    director: "Hayao Miyazaki",
    cast: [
      { name: "Rumi Hiiragi", character: "Chihiro Ogino", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Miyu Irino", character: "Haku", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Mari Natsuki", character: "Yubaba", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Bunta Sugawara", character: "Kamaji", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
    isFeatured: false,
  },
  {
    id: 10,
    title: "Goodfellas",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.7,
    year: 1990,
    genres: ["Biography", "Crime", "Drama"],
    runtime: 146,
    overview:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    director: "Martin Scorsese",
    cast: [
      { name: "Robert De Niro", character: "James Conway", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Ray Liotta", character: "Henry Hill", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Joe Pesci", character: "Tommy DeVito", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Lorraine Bracco", character: "Karen Hill", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/qo5jJpHtI1Y",
    isFeatured: false,
  },
  {
    id: 11,
    title: "Fight Club",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.8,
    year: 1999,
    genres: ["Drama"],
    runtime: 139,
    overview:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director: "David Fincher",
    cast: [
      { name: "Brad Pitt", character: "Tyler Durden", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Edward Norton", character: "Narrator", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Helena Bonham Carter", character: "Marla Singer", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Meat Loaf", character: "Robert 'Bob' Paulson", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/SUXWAEX2jlg",
    isFeatured: false,
  },
  {
    id: 12,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=800&width=1200",
    rating: 8.8,
    year: 2001,
    genres: ["Action", "Adventure", "Drama"],
    runtime: 178,
    overview:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    director: "Peter Jackson",
    cast: [
      { name: "Elijah Wood", character: "Frodo Baggins", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Ian McKellen", character: "Gandalf", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Viggo Mortensen", character: "Aragorn", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Sean Astin", character: "Sam", photo: "/placeholder.svg?height=100&width=100" },
    ],
    trailer: "https://www.youtube.com/embed/V75dMMIW2B4",
    isFeatured: false,
  },
]

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "War",
  "Western",
]

//   const searchParams = useSearchParams()
  const initialGenre = "Action"

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
      {/* Place MovieGraph at the bottom */}
      <div className="mt-12">
        <MovieGraph />
      </div>
    </div>
  )
}
