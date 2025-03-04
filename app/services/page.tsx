import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      title: "Primary Care",
      description:
        "Comprehensive healthcare services for patients of all ages, focusing on preventive care and managing chronic conditions.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Specialized Consultations",
      description:
        "Expert consultations with specialists in cardiology, dermatology, neurology, and more for specific health concerns.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Diagnostic Services",
      description:
        "Advanced diagnostic testing including laboratory tests, imaging services, and specialized screenings.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Preventive Health Screenings",
      description:
        "Regular health check-ups and screenings to detect potential health issues before they become serious.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Telemedicine",
      description:
        "Virtual consultations with healthcare providers from the comfort of your home for non-emergency medical concerns.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mental Health Services",
      description: "Comprehensive mental health care including therapy, counseling, and psychiatric services.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Healthcare Services
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive medical services designed to meet all your healthcare needs with excellence and
                  compassion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <Button className="mt-4 w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Why Choose Health Plus?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Expert Doctors</h3>
                      <p className="text-muted-foreground">
                        Our network includes top specialists in various medical fields.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Comprehensive Care</h3>
                      <p className="text-muted-foreground">
                        From preventive care to specialized treatments, we cover all your health needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Patient-Centered Approach</h3>
                      <p className="text-muted-foreground">
                        We prioritize your comfort, convenience, and overall well-being.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold">Advanced Technology</h3>
                      <p className="text-muted-foreground">
                        We utilize the latest medical technologies for accurate diagnosis and treatment.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare professionals"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

