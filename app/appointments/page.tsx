import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppointmentScheduler } from "@/components/appointment-scheduler"

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Appointment</h1>
              <p className="mt-4 text-muted-foreground">
                Schedule a visit with one of our healthcare professionals. Choose a convenient time and date.
              </p>
            </div>

            <AppointmentScheduler />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

