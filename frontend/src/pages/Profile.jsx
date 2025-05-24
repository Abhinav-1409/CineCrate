import React from 'react'

import { useState } from "react"
import MovieCard from "../components/MovieCard"
import { Edit, MapPin, Calendar, Globe, Film, Heart, Bookmark, LogOut } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("favorites")
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

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    joinedDate: "January 2023",
    description:
      "Film enthusiast and critic. I love exploring cinema from around the world, especially thrillers and sci-fi.",
    website: "johndoe.com",
    avatar: "/placeholder.svg?height=200&width=200",
    favorites: movies.slice(0, 4),
    watchlist: movies.slice(4, 12),
    liked: movies.slice(2, 10),
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header Card */}
      <section className="glass-effect rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-red-600 hover:bg-red-700 rounded-full p-2 transition-colors">
              <Edit className="w-4 h-4" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-400 mt-1">{user.email}</p>

            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                <span>Joined {user.joinedDate}</span>
              </div>
              {user.website && (
                <div className="flex items-center text-gray-300">
                  <Globe className="w-4 h-4 mr-1 text-gray-500" />
                  <a
                    to={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    {user.website}
                  </a>
                </div>
              )}
            </div>

            <p className="mt-4 text-gray-300">{user.description}</p>

            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="btn-primary">Edit Profile</button>
              <button className="btn-secondary flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Watchlist & Liked Movies Summary Card */}
      <section className="glass-effect rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-xl p-4 flex items-center gap-4">
            <div className="bg-red-900/50 rounded-full p-3">
              <Film className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{user.favorites.length}</h3>
              <p className="text-gray-400">Favorites</p>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-4 flex items-center gap-4">
            <div className="bg-red-900/50 rounded-full p-3">
              <Bookmark className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{user.watchlist.length}</h3>
              <p className="text-gray-400">Watchlist</p>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-4 flex items-center gap-4">
            <div className="bg-red-900/50 rounded-full p-3">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{user.liked.length}</h3>
              <p className="text-gray-400">Liked Movies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="mb-8">
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setActiveTab("favorites")}
            className={`px-6 py-3 font-medium ${
              activeTab === "favorites" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
            }`}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab("watchlist")}
            className={`px-6 py-3 font-medium ${
              activeTab === "watchlist" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
            }`}
          >
            Watchlist
          </button>
          <button
            onClick={() => setActiveTab("liked")}
            className={`px-6 py-3 font-medium ${
              activeTab === "liked" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
            }`}
          >
            Liked Movies
          </button>
        </div>
      </section>

      {/* Movie Grid */}
      <section>
        {activeTab === "favorites" && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {user.favorites.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "watchlist" && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {user.watchlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "liked" && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {user.liked.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
