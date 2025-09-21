"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Calendar,
  Mail,
  Database,
  Brain,
  BarChart3,
  Drill as Drive,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export function GoogleServicesStatus() {
  const services = [
    {
      name: "Google Forms",
      description: "Mood tracking and contact forms",
      status: "connected",
      icon: Database,
      color: "primary",
    },
    {
      name: "Google Sheets",
      description: "Data storage and processing",
      status: "connected",
      icon: Database,
      color: "primary",
    },
    {
      name: "Vertex AI",
      description: "AI suggestions and analysis",
      status: "connected",
      icon: Brain,
      color: "secondary",
    },
    {
      name: "Looker Studio",
      description: "Dashboard visualizations",
      status: "connected",
      icon: BarChart3,
      color: "accent",
    },
    {
      name: "Google Drive",
      description: "Resource library storage",
      status: "connected",
      icon: Drive,
      color: "primary",
    },
    {
      name: "Gmail",
      description: "Notification system",
      status: "pending",
      icon: Mail,
      color: "secondary",
    },
    {
      name: "Google Calendar",
      description: "Wellness reminders",
      status: "pending",
      icon: Calendar,
      color: "accent",
    },
  ]

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          Google Services Integration
        </CardTitle>
        <CardDescription>Status of all Google services powering the AI Wellness Companion</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            const isConnected = service.status === "connected"

            return (
              <div key={service.name} className="flex items-center gap-3 p-3 rounded-lg border border-border/50">
                <div className={`w-10 h-10 bg-${service.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 text-${service.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground">{service.name}</span>
                    <Badge
                      variant={isConnected ? "secondary" : "outline"}
                      className={isConnected ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                    >
                      {isConnected ? "Connected" : "Pending"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{service.description}</p>
                </div>
                {isConnected ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export function NotificationSettings() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          Notification & Reminder Settings
        </CardTitle>
        <CardDescription>
          Configure Gmail notifications and Google Calendar reminders for wellness check-ins
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Daily Mood Reminders</p>
              <p className="text-xs text-muted-foreground">Gmail notifications at 9:00 AM</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Active
          </Badge>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Weekly Wellness Check-ins</p>
              <p className="text-xs text-muted-foreground">Google Calendar events every Sunday</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Active
          </Badge>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="font-medium text-foreground">AI Suggestion Updates</p>
              <p className="text-xs text-muted-foreground">New personalized recommendations</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-yellow-100 text-yellow-700">
            Pending
          </Badge>
        </div>

        <Button className="w-full mt-4">
          <Bell className="w-4 h-4 mr-2" />
          Configure Notifications
        </Button>
      </CardContent>
    </Card>
  )
}
