import { Navigation } from "@/components/navigation"
import { GoogleServicesStatus, NotificationSettings } from "@/components/google-services"
import { DataFlowDiagram } from "@/components/data-flow"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Shield, Download, Trash2 } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Settings & Integration</h1>
              <p className="text-muted-foreground">Manage your Google services and privacy settings</p>
            </div>
          </div>
        </div>

        {/* Google Services Status */}
        <div className="mb-8">
          <GoogleServicesStatus />
        </div>

        {/* Data Flow Diagram */}
        <div className="mb-8">
          <DataFlowDiagram />
        </div>

        {/* Notification Settings */}
        <div className="mb-8">
          <NotificationSettings />
        </div>

        {/* Privacy & Data Management */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Privacy & Security
              </CardTitle>
              <CardDescription>Manage your data privacy and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg border border-border/50">
                <h4 className="font-medium text-foreground mb-2">Data Encryption</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  All your data is encrypted in transit and at rest using Google's security standards.
                </p>
                <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-1 inline-block">✓ Enabled</div>
              </div>

              <div className="p-3 rounded-lg border border-border/50">
                <h4 className="font-medium text-foreground mb-2">Data Anonymization</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Personal identifiers are removed from analytics and AI processing.
                </p>
                <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-1 inline-block">✓ Active</div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                <Shield className="w-4 h-4 mr-2" />
                Review Privacy Policy
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-secondary" />
                Data Management
              </CardTitle>
              <CardDescription>Export or delete your wellness data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg border border-border/50">
                <h4 className="font-medium text-foreground mb-2">Export Data</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Download all your mood tracking data, AI suggestions, and progress reports.
                </p>
                <Button size="sm" variant="outline" className="bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>

              <div className="p-3 rounded-lg border border-red-200 bg-red-50/50">
                <h4 className="font-medium text-foreground mb-2">Delete Account</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Permanently delete all your data and close your account.
                </p>
                <Button size="sm" variant="destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
