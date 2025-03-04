"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Appointment {
  id: string
  doctorName: string
  date: string
  time: string
  patientName: string
  reason: string
}

export default function MyAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments") || "[]")
    setAppointments(storedAppointments)
  }, [])

  const cancelAppointment = (id: string) => {
    const updatedAppointments = appointments.filter((app) => app.id !== id)
    setAppointments(updatedAppointments)
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <h1 className="text-3xl font-bold mb-6">My Appointments 📅</h1>
          {appointments.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-4">You don't have any appointments scheduled. 😊</p>
              <Button asChild>
                <Link href="/appointments">Book an Appointment</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {appointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2">{appointment.doctorName} 👨‍⚕️</h2>
                    <p className="text-muted-foreground mb-1">📅 Date: {appointment.date}</p>
                    <p className="text-muted-foreground mb-1">⏰ Time: {appointment.time}</p>
                    <p className="text-muted-foreground mb-1">👤 Patient: {appointment.patientName}</p>
                    <p className="text-muted-foreground mb-4">🩺 Reason: {appointment.reason}</p>
                    <Button variant="destructive" onClick={() => cancelAppointment(appointment.id)}>
                      Cancel Appointment ❌
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

