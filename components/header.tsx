"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("currentUser")
    setIsLoggedIn(!!user)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    setIsLoggedIn(false)
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-bold">
            Health<span className="text-primary">Plus</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Find Doctors
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="/appointments" className="text-sm font-medium hover:text-primary">
            Book Appointment
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          {isLoggedIn && (
            <Link href="/my-appointments" className="text-sm font-medium hover:text-primary">
              My Appointments
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="outline" className="hidden md:flex" asChild>
                <Link href="/my-profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </Button>
              <Button className="hidden md:flex" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="hidden md:flex" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="hidden md:flex" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

