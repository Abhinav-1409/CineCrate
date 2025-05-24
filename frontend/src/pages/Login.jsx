import React from 'react'

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

        if (!email || !password) {
            setError("Please fill in all fields")
            return
        }

        setIsLoading(true)

        // Simulate login process
        setTimeout(() => {
            setIsLoading(false)

            // For demo purposes, any login works
            navigate("/")
        }, 1500)
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="hidden md:block md:w-1/2 bg-gray-900 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
                <img
                    src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/The-Godfather.jpg"
                    alt="The Godfather"
                    className="object-cover object-center w-full h-full"
                />

            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <Link to="/" className="inline-flex items-center">
                            <span className="text-red-600 text-3xl mr-2">🎬</span>
                            <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                CineCrate
                            </span>
                        </Link>
                        <h1 className="text-3xl font-bold mt-6 mb-2 font-playfair bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                            Welcome back
                        </h1>
                        <p className="text-gray-400">Sign in to continue your cinematic journey</p>
                    </div>

                    {error && (
                        <div className="bg-red-900/30 border border-red-500/50 text-white px-4 py-3 rounded-lg mb-6 shadow-md shadow-red-900/20">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-800/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700 focus:border-red-500/50 shadow-inner shadow-black/30"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </label>
                                <Link to="/forgot-password" className="text-sm text-red-500 hover:text-red-400">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-800/80 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700 focus:border-red-500/50 shadow-inner shadow-black/30"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-0.5 flex items-center justify-center"
                        >
                            {isLoading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-red-500 hover:text-red-400 font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
