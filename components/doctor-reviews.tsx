"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Review {
  id: string
  name: string
  date: string
  rating: number
  comment: string
}

interface DoctorReviewsProps {
  doctorId: string
}

export function DoctorReviews({ doctorId }: DoctorReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  // Mock reviews data
  const reviews: Review[] = [
    {
      id: "1",
      name: "John Smith",
      date: "2023-10-15",
      rating: 5,
      comment:
        "Dr. Johnson is an excellent doctor. She took the time to listen to all my concerns and provided clear explanations about my condition and treatment options. Highly recommend!",
    },
    {
      id: "2",
      name: "Emily Davis",
      date: "2023-09-22",
      rating: 4,
      comment:
        "Very professional and knowledgeable. The wait time was a bit long, but the quality of care was worth it. Would definitely see this doctor again.",
    },
    {
      id: "3",
      name: "Michael Johnson",
      date: "2023-08-05",
      rating: 5,
      comment:
        "I've been seeing this doctor for years and have always received excellent care. The staff is friendly and the office is clean and well-maintained.",
    },
  ]

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the review data to a server
    setShowReviewForm(false)
    setRating(0)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Patient Reviews</h2>
        {!showReviewForm && <Button onClick={() => setShowReviewForm(true)}>Write a Review</Button>}
      </div>

      {showReviewForm && (
        <form onSubmit={handleSubmitReview} className="mb-8 p-4 border rounded-md">
          <h3 className="text-lg font-bold mb-4">Write Your Review</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    (hoverRating || rating) >= star ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                  }`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-2">
              Your Review
            </label>
            <Textarea
              id="comment"
              placeholder="Share your experience with this doctor"
              className="min-h-[100px]"
              required
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" disabled={rating === 0}>
              Submit Review
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowReviewForm(false)
                setRating(0)
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

