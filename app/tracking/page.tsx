"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@/components/timeline"
import { MapPin, Package, Truck, CheckCircle2 } from "lucide-react"

// Mock tracking data - replace with actual tracking API integration
const mockTrackingData = {
  status: "in_transit",
  estimatedDelivery: "2024-03-25",
  currentLocation: "Frankfurt, Germany",
  carrier: "DHL Express",
  events: [
    {
      date: "2024-03-22 14:30",
      location: "Frankfurt, Germany",
      status: "In Transit",
      description: "Package is in transit to destination",
    },
    {
      date: "2024-03-21 09:15",
      location: "Hong Kong, China",
      status: "Departed Facility",
      description: "Package has left the facility",
    },
    {
      date: "2024-03-20 16:45",
      location: "Hong Kong, China",
      status: "Arrived at Facility",
      description: "Package arrived at carrier facility",
    },
    {
      date: "2024-03-20 10:00",
      location: "Shenzhen, China",
      status: "Picked Up",
      description: "Package picked up by carrier",
    },
  ],
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleTrack = () => {
    if (trackingNumber) {
      setShowResults(true)
    }
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Track Your Shipment</h1>

      {/* Tracking Form */}
      <Card className="mb-8 p-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTrack}>Track Package</Button>
        </div>
      </Card>

      {/* Tracking Results */}
      {showResults && (
        <div className="space-y-8">
          {/* Status Overview */}
          <Card className="p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <p className="mt-2 text-lg font-semibold capitalize">{mockTrackingData.status.replace("_", " ")}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Estimated Delivery</h3>
                <p className="mt-2 text-lg font-semibold">{mockTrackingData.estimatedDelivery}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Current Location</h3>
                <p className="mt-2 text-lg font-semibold">{mockTrackingData.currentLocation}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Carrier</h3>
                <p className="mt-2 text-lg font-semibold">{mockTrackingData.carrier}</p>
              </div>
            </div>
          </Card>

          {/* Shipment Timeline */}
          <Card className="p-6">
            <h2 className="mb-6 text-xl font-semibold">Shipment History</h2>
            <Timeline>
              {mockTrackingData.events.map((event, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    {event.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      {index === 0 ? (
                        <Truck className="h-4 w-4" />
                      ) : index === mockTrackingData.events.length - 1 ? (
                        <Package className="h-4 w-4" />
                      ) : (
                        <MapPin className="h-4 w-4" />
                      )}
                    </TimelineDot>
                    {index < mockTrackingData.events.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <h3 className="font-medium">{event.status}</h3>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Card>

          {/* Support Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Need Help?</h3>
                <p className="text-muted-foreground">Contact our support team for assistance</p>
              </div>
              <Button variant="outline">Contact Support</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}