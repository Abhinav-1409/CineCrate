import React from 'react'

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MovieCard from "./MovieCard"

export default function MovieCarousel({ title, movies }) {
  const carouselRef = useRef(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current
      const scrollAmount = clientWidth * 0.8

      const newScrollLeft = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      // Update button visibility after scroll
      setTimeout(() => {
        if (carouselRef.current) {
          setShowLeftButton(carouselRef.current.scrollLeft > 0)
          setShowRightButton(
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth - 10,
          )
        }
      }, 300)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      setShowLeftButton(carouselRef.current.scrollLeft > 0)
      setShowRightButton(
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth - 10,
      )
    }
  }

  return (
    <div className="relative">
      <h2 className="section-title">{title}</h2>

      <div className="relative">
        {/* Left scroll button */}
        {showLeftButton && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 rounded-full p-2 -ml-4 shadow-lg shadow-black/30 border border-white/10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right scroll button */}
        {showRightButton && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 rounded-full p-2 -mr-4 shadow-lg shadow-black/30 border border-white/10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 pb-4"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[180px]">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
