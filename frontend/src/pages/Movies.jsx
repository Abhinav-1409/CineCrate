import React from 'react'

import { useState } from "react"
// import { useParams } from "next/navigation"
import { Link } from "react-router-dom"
import MovieCarousel from "../components/MovieCarousel"
import { Star, Clock, Heart, Plus, Play } from "lucide-react"

export default function MoviePage() {
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

    //   const { id } = useParams()
    const movie = movies.find((m) => m.id === movies[0])

    const [activeTab, setActiveTab] = useState("cast")

    // Get similar movies (in a real app, this would use a recommendation algorithm)
    const similarMovies = movies
        .filter((m) => m.id !== movie.id && m.genres.some((g) => movie.genres.includes(g)))
        .slice(0, 8)

    return (
        <div>
            {/* Hero Backdrop Section */}
            <section className="relative w-full h-[500px]">
                <div className="absolute inset-0">
                    <img
                        src={movie.backdrop || "/placeholder.svg"}
                        alt={movie.title}
                        className="object-cover w-full h-auto"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />
                </div>

                <div className="relative h-full container mx-auto px-4 flex flex-col md:flex-row items-end pb-8 gap-6">
                    {/* Poster */}
                    <div className="w-40 h-60 md:w-64 md:h-96 rounded-xl overflow-hidden shadow-2xl -mb-20 md:-mb-32 border-4 border-gray-900">
                        <img
                            src={movie.poster || "/placeholder.svg"}
                            alt={movie.title}
                            width={256}
                            height={384}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-5xl font-playfair font-bold">{movie.title}</h1>

                        <div className="flex items-center mt-3 text-gray-300">
                            <div className="flex items-center">
                                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                                <span className="font-medium">{movie.rating}</span>
                            </div>
                            <span className="mx-2">•</span>
                            <span>{movie.year}</span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>
                                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {movie.genres.map((genre, index) => (
                                <Link
                                    key={index}
                                    to={`/films?genre=${genre}`}
                                    className="text-sm bg-red-900/50 px-3 py-1 rounded-full hover:bg-red-800/50 transition-colors"
                                >
                                    {genre}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <button className="btn-primary flex items-center gap-2">
                                <Play className="w-4 h-4" />
                                Watch Trailer
                            </button>
                            <button className="btn-secondary flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add to Watchlist
                            </button>
                            <button className="btn-secondary flex items-center gap-2">
                                <Heart className="w-4 h-4" />
                                Like
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 mt-12 md:mt-24">
                {/* Overview Section */}
                <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-gray-500 text-sm">Director</h3>
                                <p className="text-white">{movie.director}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-sm">Release Date</h3>
                                <p className="text-white">{movie.year}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trailer Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Trailer</h2>
                    <div className="aspect-video rounded-xl overflow-hidden">
                        <iframe
                            src={movie.trailer}
                            title={`${movie.title} Trailer`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </section>

                {/* Cast & Crew Toggle Section */}
                <section className="mb-12">
                    <div className="flex border-b border-gray-800 mb-6">
                        <button
                            onClick={() => setActiveTab("cast")}
                            className={`px-6 py-3 font-medium ${activeTab === "cast" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Cast
                        </button>
                        <button
                            onClick={() => setActiveTab("crew")}
                            className={`px-6 py-3 font-medium ${activeTab === "crew" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Crew
                        </button>
                    </div>

                    {activeTab === "cast" ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {movie.cast.map((person, index) => (
                                <div key={index} className="text-center">
                                    <div className="aspect-square rounded-full overflow-hidden mb-2 mx-auto w-24 h-24">
                                        <img
                                            src={person.photo || "/placeholder.svg"}
                                            alt={person.name}
                                            width={96}
                                            height={96}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <h3 className="font-medium">{person.name}</h3>
                                    <p className="text-sm text-gray-400">{person.character}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            <div className="glass-effect rounded-xl p-4 text-center">
                                <h3 className="font-medium mb-1">{movie.director}</h3>
                                <p className="text-sm text-gray-400">Director</p>
                            </div>
                            <div className="glass-effect rounded-xl p-4 text-center">
                                <h3 className="font-medium mb-1">Jane Smith</h3>
                                <p className="text-sm text-gray-400">Writer</p>
                            </div>
                            <div className="glass-effect rounded-xl p-4 text-center">
                                <h3 className="font-medium mb-1">John Johnson</h3>
                                <p className="text-sm text-gray-400">Producer</p>
                            </div>
                            <div className="glass-effect rounded-xl p-4 text-center">
                                <h3 className="font-medium mb-1">Sarah Williams</h3>
                                <p className="text-sm text-gray-400">Cinematographer</p>
                            </div>
                        </div>
                    )}
                </section>

                {/* Movie DNA Section (Placeholder) */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Movie DNA</h2>
                    <div className="glass-effect rounded-xl p-6 h-64 flex items-center justify-center">
                        <p className="text-gray-400">
                            Interactive graph visualization would be implemented here using D3.js or vis.js
                        </p>
                    </div>
                </section>

                {/* Similar Movies Section */}
                <section className="mb-12">
                    <MovieCarousel title="Similar Movies" movies={similarMovies} />
                </section>
            </div>
        </div>
    )
}
