"use client"

import { useState } from "react"
import Image from "next/image"
import { movies } from "@/lib/movieData"
import MovieCard from "@/components/MovieCard"
import { Edit, MapPin, Calendar, Globe, Film, Heart, Bookmark, LogOut } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("favorites")

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
              <Image
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
                    href={`https://${user.website}`}
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
