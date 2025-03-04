"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { doctors } from "@/data/doctors"
import { useToast } from "@/components/ui/use-toast"

export function AppointmentScheduler() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | null>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | "all">("all")
  const [step, setStep] = useState(1)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [reason, setReason] = useState("")
  const { toast } = useToast()

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

  let filteredDoctors = selectedSpecialty === "all" ? doctors : doctors.filter((d) => d.specialty === selectedSpecialty)

  useEffect(() => {
    filteredDoctors = selectedSpecialty === "all" ? doctors : doctors.filter((d) => d.specialty === selectedSpecialty)
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    if (user.firstName) setFirstName(user.firstName)
    if (user.lastName) setLastName(user.lastName)
    if (user.email) setEmail(user.email)
    if (user.phone) setPhone(user.phone)
  }, [selectedSpecialty])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const appointment = {
      id: Date.now().toString(),
      doctorId: selectedDoctor,
      doctorName: doctors.find((d) => d.id === selectedDoctor)?.name,
      date: date ? format(date, "yyyy-MM-dd") : "",
      time: timeSlot,
      patientName: `${firstName} ${lastName}`,
      email,
      phone,
      reason,
    }
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]")
    appointments.push(appointment)
    localStorage.setItem("appointments", JSON.stringify(appointments))
    toast({
      title: "Appointment Booked! 🎉",
      description: "Your appointment has been successfully scheduled.",
    })
    alert( "Appointment Booked! 🎉 Your appointment has been successfully scheduled")
    resetForm()
  }

  const resetForm = () => {
    setStep(1)
    setDate(undefined)
    setTimeSlot(null)
    setSelectedDoctor(null)
    setReason("")
  }

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`flex-1 border-b-2 pb-2 ${step >= s ? "border-primary" : "border-muted"}`}>
                <div className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    {s}
                  </div>
                  <span className="ml-2 font-medium">
                    {s === 1 ? "Select Doctor " : s === 2 ? "Choose Date & Time " : "Your Information "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="specialty" className="text-sm font-medium">
                  Specialty
                </label>
                <Select onValueChange={setSelectedSpecialty}>
                  <SelectTrigger id="specialty">
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="Cardiologist">Cardiologist</SelectItem>
                    <SelectItem value="Dermatologist">Dermatologist</SelectItem>
                    <SelectItem value="General Practitioner">General Practitioner</SelectItem>
                    <SelectItem value="Neurologist">Neurologist</SelectItem>
                    <SelectItem value="Pediatrician">Pediatrician</SelectItem>
                    <SelectItem value="Psychiatrist">Psychiatrist</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Doctor</label>
                <div className="grid gap-4 sm:grid-cols-2">
                  {filteredDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className={`p-4 border rounded-md cursor-pointer transition-colors ${selectedDoctor === doctor.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
                        }`}
                      onClick={() => setSelectedDoctor(doctor.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 rounded-full bg-muted overflow-hidden relative">
                          <img
                            src={doctor.profilePicture || "/placeholder.svg"}
                            alt={doctor.name}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{doctor.name}</h3>
                          <p className="text-sm text-primary">{doctor.specialty}</p>
                          <p className="text-xs text-muted-foreground mt-1">Available: {doctor.availability}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button onClick={handleNext} disabled={!selectedDoctor}>
                  Next: Choose Date & Time
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Date 📅</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Time </label>
                  <div className="grid grid-cols-3 gap-2">
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
              </div>

              <div className="flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext} disabled={!date || !timeSlot}>
                  Next: Your Information
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium">
                  Reason for Visit
                </label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Briefly describe your symptoms or reason for appointment"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button type="submit">Confirm Appointment 🎉</Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

