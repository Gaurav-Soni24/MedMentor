"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

interface AppointmentFormProps {
  doctorId: string
  doctorName: string
}

export function AppointmentForm({ doctorId, doctorName }: AppointmentFormProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the appointment data to a server
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-bold text-primary mb-2">Appointment Requested!</h3>
        <p className="mb-4">
          Thank you for scheduling an appointment with {doctorName}. We will confirm your appointment shortly.
        </p>
        <Button onClick={() => setSubmitted(false)}>Schedule Another Appointment</Button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Schedule an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input id="name" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Preferred Time</label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                type="button"
                variant={timeSlot === slot ? "default" : "outline"}
                className="text-sm"
                onClick={() => setTimeSlot(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-medium">
            Reason for Visit
          </label>
          <Textarea
            id="reason"
            placeholder="Briefly describe your symptoms or reason for appointment"
            className="min-h-[100px]"
          />
        </div>

        <Button type="submit" className="w-full" disabled={!date || !timeSlot}>
          Request Appointment
        </Button>
      </form>
    </div>
  )
}

