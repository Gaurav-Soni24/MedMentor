import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Phone, Star, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppointmentForm } from "@/components/appointment-form"
import { DoctorReviews } from "@/components/doctor-reviews"
import { doctors } from "@/data/doctors"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DoctorDetailPage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((doc) => doc.id === params.id)

  if (!doctor) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Doctors
          </Link>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={doctor.profilePicture || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h1 className="text-2xl font-bold">{doctor.name}</h1>
                      <p className="text-primary">{doctor.specialty}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < doctor.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-sm ml-1">({doctor.reviewCount} reviews)</span>
                    </div>

                    <div className="space-y-2 pt-2 border-t">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{doctor.contactNumber}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Available: {doctor.availability}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <h3 className="font-medium mb-2">Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">Book Appointment</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="appointments">Appointments</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="p-4 border rounded-md mt-2">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-bold mb-2">About {doctor.name}</h2>
                      <p className="text-muted-foreground">{doctor.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2">Education</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>MD, Harvard Medical School</li>
                        <li>Residency, Johns Hopkins Hospital</li>
                        <li>Fellowship, Mayo Clinic</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2">Experience</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>15+ years of clinical experience</li>
                        <li>Chief of {doctor.specialty} at City General Hospital</li>
                        <li>Published researcher with 20+ peer-reviewed articles</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="appointments" className="p-4 border rounded-md mt-2">
                  <AppointmentForm doctorId={doctor.id} doctorName={doctor.name} />
                </TabsContent>
                <TabsContent value="reviews" className="p-4 border rounded-md mt-2">
                  <DoctorReviews doctorId={doctor.id} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

