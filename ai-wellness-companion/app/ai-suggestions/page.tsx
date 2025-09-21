import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Sparkles, Heart, Zap, RefreshCw, BookOpen, Clock, Star } from "lucide-react"

export default function AISuggestionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
            <Brain className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">AI Wellness Suggestions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Personalized recommendations based on your mood patterns and wellness goals, powered by Google Vertex AI.
          </p>
        </div>

        {/* AI Status Card */}
        <Card className="mb-8 border-secondary/20 bg-gradient-to-r from-secondary/5 to-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">AI Analysis Complete</CardTitle>
                  <CardDescription>Based on your recent mood entries and patterns</CardDescription>
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Main Suggestions Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Today's Personalized Suggestion */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-primary" />
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Personalized for You
                </Badge>
              </div>
              <CardTitle className="text-xl">Today's Focus: Stress Management</CardTitle>
              <CardDescription>
                Based on your recent entries showing elevated stress levels, here's a targeted approach.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Recommended Action:</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Try the 4-7-8 breathing technique for 5 minutes. This can help activate your parasympathetic nervous
                  system and reduce stress hormones.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="text-xs">
                    Start Exercise
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs bg-transparent">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Mood Booster */}
          <Card className="border-accent/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-accent" />
                <Badge variant="outline" className="border-accent/20 text-accent">
                  Quick Boost
                </Badge>
              </div>
              <CardTitle className="text-xl">Instant Mood Lift</CardTitle>
              <CardDescription>A 2-minute activity to brighten your day right now.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Gratitude Moment:</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Think of three things you're grateful for today. Research shows this simple practice can improve mood
                  within minutes.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="text-xs">
                    <Heart className="w-3 h-3 mr-1" />
                    Start Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coping Strategies Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Coping Strategies</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Cognitive Reframing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Challenge negative thought patterns with evidence-based questioning techniques.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>10-15 minutes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-secondary/20 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                <CardTitle className="text-lg">Progressive Relaxation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Systematically tense and relax muscle groups to reduce physical stress.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>15-20 minutes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/20 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-lg">Mindful Observation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Focus on your surroundings using the 5-4-3-2-1 grounding technique.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>5-10 minutes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mindfulness Exercises */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Mindfulness Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-primary" />
                  </div>
                  Body Scan Meditation
                </CardTitle>
                <CardDescription>
                  A guided journey through your body to release tension and increase awareness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">15 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <Badge variant="outline" className="text-xs">
                      Beginner
                    </Badge>
                  </div>
                  <Button className="w-full mt-4">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Start Exercise
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-secondary" />
                  </div>
                  Loving-Kindness Practice
                </CardTitle>
                <CardDescription>
                  Cultivate compassion for yourself and others through guided meditation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">12 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <Badge variant="outline" className="text-xs">
                      Intermediate
                    </Badge>
                  </div>
                  <Button variant="secondary" className="w-full mt-4">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Start Exercise
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Motivational Messages */}
        <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Daily Motivation
            </CardTitle>
            <CardDescription>Personalized encouragement based on your wellness journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <blockquote className="text-lg font-medium text-foreground italic text-center py-4">
                "Your consistent mood tracking shows real commitment to your wellness. Small daily actions create
                lasting positive change."
              </blockquote>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  New Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
