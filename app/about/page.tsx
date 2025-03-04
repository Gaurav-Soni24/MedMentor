import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Jennifer Wilson",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Michael Chen",
      role: "Medical Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Patient Services",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Davis",
      role: "Technology Director",
      image: "/placeholder.svg?height=300&width=300",
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
                  About Health Plus
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to provide accessible, high-quality healthcare to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  Health Plus was founded in 2010 with a simple yet powerful vision: to make quality healthcare
                  accessible to everyone. What started as a small clinic with just three doctors has grown into a
                  comprehensive healthcare network with hundreds of specialists across multiple locations.
                </p>
                <p className="text-muted-foreground">
                  Our journey has been driven by a commitment to patient-centered care, technological innovation, and
                  community health. We believe that healthcare should be not just about treating illness, but about
                  promoting wellness and empowering individuals to take control of their health.
                </p>
                <p className="text-muted-foreground">
                  Today, Health Plus serves thousands of patients annually, offering a wide range of services from
                  primary care to specialized treatments. Despite our growth, our core values remain unchanged:
                  compassion, excellence, and accessibility.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Health Plus building"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
                These core principles guide everything we do at Health Plus.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-muted-foreground">
                  We treat every patient with empathy, respect, and understanding, recognizing the human aspect of
                  healthcare.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest standards in medical care, continuously improving our services and
                  expertise.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe quality healthcare should be available to everyone, regardless of background or
                  circumstances.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and approaches to enhance patient care and improve health outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Leadership Team</h2>
              <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
                Meet the dedicated professionals guiding Health Plus toward excellence in healthcare.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-64 w-64 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

