"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { DoctorCard } from "@/components/doctor-card"
import { doctors } from "@/data/doctors"

export function DoctorsDirectory() {
  const [specialty, setSpecialty] = useState<string>("all")
  const [location, setLocation] = useState<string>("")

  const specialties = [
    "Cardiologist",
    "Dermatologist",
    "General Practitioner",
    "Neurologist",
    "Pediatrician",
    "Psychiatrist",
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty = specialty === "all" || doctor.specialty === specialty
    const matchesLocation = !location || doctor.location.toLowerCase().includes(location.toLowerCase())
    return matchesSpecialty && matchesLocation
  })

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter">Our Doctors</h2>
            <p className="text-muted-foreground">
              Find the perfect specialist for your health needs from our network of qualified doctors.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label htmlFor="specialty" className="text-sm font-medium">
                    Specialty
                  </label>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger id="specialty">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      {specialties.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City or zip code"
                      className="pl-8"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium">No doctors found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your filters to find more doctors.</p>
              </div>
            )}
          </div>

          {filteredDoctors.length > 0 && (
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

