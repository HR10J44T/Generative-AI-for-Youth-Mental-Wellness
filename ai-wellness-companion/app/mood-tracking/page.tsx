import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, TrendingUp, Calendar, Clock } from "lucide-react"

export default function MoodTrackingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Daily Mood Tracking</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Track your daily emotions, activities, and stress levels to help our AI provide personalized wellness
            recommendations.
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">7 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
                <Calendar className="w-4 h-4 text-secondary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5/7 days</div>
              <p className="text-xs text-muted-foreground">Logged moods</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Last Entry</CardTitle>
                <Clock className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Today</div>
              <p className="text-xs text-muted-foreground">9:30 AM</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Mood Tracking Form */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Log Your Mood
            </CardTitle>
            <CardDescription>
              Complete this quick form to track your daily wellness. Your responses are stored securely and used to
              provide personalized AI recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Google Form Embed */}
            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <div className="text-center text-muted-foreground mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Google Form Integration</h3>
                <p className="text-sm">
                  The mood tracking form will be embedded here using Google Forms. This form will collect:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Mood Tracking:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Current mood (1-10 scale)</li>
                    <li>• Energy level</li>
                    <li>• Sleep quality</li>
                    <li>• Overall wellness feeling</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Daily Activities:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Physical activity</li>
                    <li>• Social interactions</li>
                    <li>• Stress levels</li>
                    <li>• Notable events</li>
                  </ul>
                </div>
              </div>

              {/* Placeholder for actual Google Form */}
              <div className="mt-6 p-8 bg-background rounded-lg border-2 border-dashed border-border text-center">
                <p className="text-muted-foreground mb-4">
                  <strong>Google Form will be embedded here</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  To integrate: Replace this section with the Google Form embed code
                </p>
                <div className="text-xs text-muted-foreground bg-muted/50 rounded p-3 font-mono">
                  {'<iframe src="https://docs.google.com/forms/d/e/[FORM_ID]/viewform?embedded=true"'}
                  <br />
                  {'width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">'}
                  <br />
                  {"Loading…</iframe>"}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">
                <Heart className="w-4 h-4 mr-2" />
                Submit Mood Entry
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                View Previous Entries
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mt-6 border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-lg">Daily Tracking Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">Best Practices:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Track at the same time each day</li>
                  <li>• Be honest about your feelings</li>
                  <li>• Note any significant events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Remember:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Your data is private and secure</li>
                  <li>• Patterns help improve AI suggestions</li>
                  <li>• Consistency leads to better insights</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
