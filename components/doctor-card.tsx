"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Phone, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Doctor } from "@/types/doctor"

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <CardContent className="p-0">
        <div className="relative h-64 w-full">
          <Image src={doctor.profilePicture || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
          <Badge className="absolute top-4 right-4">{doctor.specialty}</Badge>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold">{doctor.name}</h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{doctor.location}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < doctor.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
              />
            ))}
            <span className="text-sm ml-1">({doctor.reviewCount})</span>
          </div>
          <p className="mt-4 text-sm line-clamp-2">{doctor.description}</p>

          <div
            className={`mt-4 space-y-2 transition-all duration-300 ${showDetails ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span>Available: {doctor.availability}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>{doctor.contactNumber}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {doctor.specializations.map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button className="w-full" size="sm" asChild>
          <Link href="/appointments">Book Appointment</Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

