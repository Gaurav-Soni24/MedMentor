"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
}

export default function MyProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null")
    if (!currentUser) {
      router.push("/login")
    } else {
      setUser(currentUser)
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (user) {
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const updatedUsers = users.map((u: User) => (u.id === user.id ? user : u))
      localStorage.setItem("users", JSON.stringify(updatedUsers))
      localStorage.setItem("currentUser", JSON.stringify(user))
      setIsEditing(false)
      toast({
        title: "Profile Updated! 🎉",
        description: "Your profile information has been successfully updated.",
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    router.push("/login")
  }

  if (!user) return null

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container px-4 md:px-6 py-8 md:py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">My Profile 👤</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name 👤
                  </label>
                  <Input
                    id="firstName"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name 👤
                  </label>
                  <Input
                    id="lastName"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  value={user.phone || ""}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              {isEditing ? (
                <div className="flex justify-end space-x-2">
                  <Button type="submit">Save Changes 💾</Button>
                  <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className="flex justify-end space-x-2">
                  <Button type="button" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                  <Button type="button" variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

