import React from 'react'
import { Link } from "react-router-dom"

export default function GenreCard({ genre }) {
  // Generate a random gradient for each genre
  const gradients = [
    "from-red-900 to-red-600",
    "from-blue-900 to-blue-600",
    "from-green-900 to-green-600",
    "from-purple-900 to-purple-600",
    "from-yellow-900 to-yellow-600",
    "from-pink-900 to-pink-600",
    "from-indigo-900 to-indigo-600",
    "from-gray-900 to-gray-600",
  ]

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]

  return (
    <Link to={`/films?genre=${genre}`} className="block">
      <div
        className={`bg-gradient-to-br ${randomGradient} rounded-xl p-6 h-32 flex items-center justify-center card-hover shadow-lg shadow-black/40 border border-white/5`}
      >
        <h3 className="text-xl font-bold text-center text-white drop-shadow-md">{genre}</h3>
      </div>
    </Link>
  )
}
