import React from 'react'

import { useState } from "react"
import { Search } from "lucide-react"
import MovieCard from "./MovieCard"
// import { movies } from "@/lib/movieData"

export default function AiPromptSection() {
  // Sample movie data for the application
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

 const moods = [
  { name: "Chill", color: "bg-blue-500" },
  { name: "Intense", color: "bg-red-500" },
  { name: "Tearjerkers", color: "bg-purple-500" },
  { name: "Laugh Out Loud", color: "bg-yellow-500" },
  { name: "Mind-bending", color: "bg-green-500" },
  { name: "Nostalgic", color: "bg-pink-500" },
]

 const quotes = [
  {
    quote: "I'm gonna make him an offer he can't refuse.",
    character: "Don Vito Corleone",
    movie: "The Godfather",
    year: 1972,
  },
  {
    quote: "May the Force be with you.",
    character: "Han Solo",
    movie: "Star Wars",
    year: 1977,
  },
  {
    quote: "You talking to me?",
    character: "Travis Bickle",
    movie: "Taxi Driver",
    year: 1976,
  },
  {
    quote: "Here's looking at you, kid.",
    character: "Rick Blaine",
    movie: "Casablanca",
    year: 1942,
  },
  {
    quote: "I'll be back.",
    character: "The Terminator",
    movie: "The Terminator",
    year: 1984,
  },
]

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
