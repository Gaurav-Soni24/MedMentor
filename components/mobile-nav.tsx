"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("currentUser")
    setIsLoggedIn(!!user)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    setIsLoggedIn(false)
    setOpen(false)
    router.push("/login")
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold" onClick={() => setOpen(false)}>
            Health<span className="text-primary">Plus</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Home 🏠
          </Link>
          <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Find Doctors 👨‍⚕️
          </Link>
          <Link href="/appointments" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Book Appointment 📅
          </Link>
          <Link
            href="/my-appointments"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            My Appointments 📋
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-2">
          {isLoggedIn ? (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setOpen(false)
                  router.push("/my-profile")
                }}
              >
                <User className="mr-2 h-4 w-4" />
                Profile 👤
              </Button>
              <Button onClick={handleLogout}>Logout 🚪</Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setOpen(false)
                  router.push("/login")
                }}
              >
                Sign In 🔐
              </Button>
              <Button
                onClick={() => {
                  setOpen(false)
                  router.push("/signup")
                }}
              >
                Sign Up 📝
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

