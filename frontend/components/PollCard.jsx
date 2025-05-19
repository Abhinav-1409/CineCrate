"use client"

import { useState } from "react"
import { PieChart } from "lucide-react"

export default function PollCard() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)

  const pollQuestion = "What's your favorite movie genre?"
  const options = [
    { id: 1, text: "Action & Adventure", votes: 42 },
    { id: 2, text: "Drama", votes: 28 },
    { id: 3, text: "Sci-Fi", votes: 35 },
    { id: 4, text: "Comedy", votes: 31 },
  ]

  const handleVote = () => {
    if (selectedOption !== null && !hasVoted) {
      setHasVoted(true)
    }
  }

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0) + (hasVoted ? 1 : 0)

  const getPercentage = (votes) => {
    return Math.round((votes / totalVotes) * 100)
  }

  return (
    <div className="glass-card rounded-2xl p-6 border-2 border-white/5 shadow-xl shadow-black/30">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {pollQuestion}
      </h3>

      <div className="space-y-3 mb-6">
        {options.map((option) => {
          const isSelected = selectedOption === option.id
          const currentVotes = option.votes + (hasVoted && isSelected ? 1 : 0)
          const percentage = getPercentage(currentVotes)

          return (
            <div key={option.id} className="relative">
              <button
                onClick={() => !hasVoted && setSelectedOption(option.id)}
                disabled={hasVoted}
                className={`relative z-10 w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-red-900/70 to-red-800/50 border border-red-500/50 shadow-md shadow-red-900/20"
                    : "bg-gray-800/80 hover:bg-gray-700/90 border border-gray-700/50"
                } ${hasVoted ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex justify-between">
                  <span>{option.text}</span>
                  {hasVoted && <span className="font-bold">{percentage}%</span>}
                </div>
              </button>

              {hasVoted && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-red-700/30 rounded-lg origin-left transition-transform duration-1000 z-0"
                  style={{ width: `${percentage}%` }}
                />
              )}
            </div>
          )
        })}
      </div>

      {!hasVoted ? (
        <button
          onClick={handleVote}
          disabled={selectedOption === null}
          className={`w-full py-2 rounded-lg transition-all duration-300 ${
            selectedOption !== null
              ? "bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 shadow-md shadow-red-900/30"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          Vote
        </button>
      ) : (
        <div className="flex items-center justify-center text-gray-400 gap-2 bg-gray-800/50 py-2 rounded-lg border border-gray-700/50">
          <PieChart className="w-4 h-4 text-red-500" />
          <span>Total votes: {totalVotes}</span>
        </div>
      )}
    </div>
  )
}
