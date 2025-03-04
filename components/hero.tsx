import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Find the Right Doctor for Your Health Needs
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Connect with top specialists in your area. Book appointments with ease and take control of your health
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

