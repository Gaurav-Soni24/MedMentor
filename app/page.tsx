import { DoctorsDirectory } from "@/components/doctors-directory"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DoctorsDirectory />
      </main>
      <Footer />
    </div>
  )
}

