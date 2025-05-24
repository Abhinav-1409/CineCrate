import React from 'react'

import { useState, useEffect } from "react"
// import { quotes } from "@/lib/movieData"

export default function QuoteCard() {

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
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    // Get a random quote on initial load
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])

    // Change quote every 10 seconds
    const interval = setInterval(() => {
      setFadeIn(false)

      setTimeout(() => {
        const newIndex = Math.floor(Math.random() * quotes.length)
        setCurrentQuote(quotes[newIndex])
        setFadeIn(true)
      }, 500)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden border-2 border-white/5 shadow-xl shadow-black/30">
      <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center text-4xl text-red-500 opacity-30">
        "
      </div>

      <div className={`transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <blockquote className="text-xl md:text-2xl font-playfair italic text-center mb-4 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
          "{currentQuote.quote}"
        </blockquote>

        <div className="text-center">
          <p className="text-gray-300">— {currentQuote.character}</p>
          <p className="text-sm text-gray-500">
            {currentQuote.movie} ({currentQuote.year})
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center text-4xl text-red-500 opacity-30">
        "
      </div>
    </div>
  )
}
