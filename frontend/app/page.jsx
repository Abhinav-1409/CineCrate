import { movies } from "@/lib/movieData"
import { genres } from "@/lib/movieData"
import FeaturedMovie from "@/components/FeaturedMovie"
import MovieCarousel from "@/components/MovieCarousel"
import QuoteCard from "@/components/QuoteCard"
import GenreCard from "@/components/GenreCard"
import MoodSection from "@/components/MoodSection"
import PollCard from "@/components/PollCard"
import AiPromptSection from "@/components/AiPromptSection"
import MovieCard from "@/components/MovieCard" // Declared the MovieCard variable

export default function HomePage() {
  // Get featured movie
  const featuredMovie = movies.find((movie) => movie.isFeatured) || movies[0]

  // Get personalized recommendations (in a real app, this would be based on user data)
  const personalizedRecommendations = movies.slice(1, 5)

  // Get trending and latest movies
  const trendingMovies = [...movies].sort(() => 0.5 - Math.random()).slice(0, 8)
  const latestMovies = [...movies].sort((a, b) => b.year - a.year).slice(0, 8)

  // Get a subset of genres for the genre section
  const featuredGenres = genres.slice(0, 8)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Movie */}
      <section className="mb-12">
        <FeaturedMovie movie={featuredMovie} />
      </section>

      {/* Personalized Recommendations */}
      <section className="mb-12">
        <h2 className="section-title">Today's Personalized Recommendations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalizedRecommendations.map((movie) => (
            <div key={movie.id} className="col-span-1">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </section>

      {/* Quote of the Day and Poll */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuoteCard />
        <PollCard />
      </section>

      {/* Genre-Based Recommendations */}
      <section className="mb-12">
        <h2 className="section-title">Browse by Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredGenres.map((genre) => (
            <GenreCard key={genre} genre={genre} />
          ))}
        </div>
      </section>

      {/* Trending This Week */}
      <section className="mb-12">
        <MovieCarousel title="Trending This Week" movies={trendingMovies} />
      </section>

      {/* Latest Releases */}
      <section className="mb-12">
        <MovieCarousel title="Latest Releases" movies={latestMovies} />
      </section>

      {/* Mood-Based Recommendations */}
      <section className="mb-12">
        <MoodSection movies={movies} />
      </section>

      {/* AI-Prompt Recommendation Section */}
      <section className="mb-12">
        <AiPromptSection />
      </section>
    </div>
  )
}
