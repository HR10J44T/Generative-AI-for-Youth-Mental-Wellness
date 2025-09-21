import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Video, FileText, Search, Filter, Clock, Star, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Wellness Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Curated articles, exercises, and videos to support your mental wellness journey, stored and organized
            through Google Drive.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-10" />
          </div>
          <Button variant="outline" className="bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Articles & Guides</CardTitle>
              <CardDescription>In-depth articles on mental wellness topics</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                24 Resources
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Exercises & Activities</CardTitle>
              <CardDescription>Practical wellness exercises and activities</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                18 Resources
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Videos & Media</CardTitle>
              <CardDescription>Guided meditations and educational videos</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                12 Resources
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Featured Resources */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Understanding Anxiety in Young Adults</CardTitle>
                      <CardDescription>A comprehensive guide to recognizing and managing anxiety</CardDescription>
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>15 min read</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Mental Health
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about the signs, symptoms, and effective coping strategies for anxiety, specifically tailored
                  for young adults navigating life transitions.
                </p>
                <Button size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-secondary/20 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">10-Minute Morning Meditation</CardTitle>
                      <CardDescription>Start your day with mindfulness and intention</CardDescription>
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>10 minutes</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Meditation
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  A guided meditation designed to help you center yourself and set positive intentions for the day
                  ahead.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resource Library */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Resource Library</h2>
          <div className="space-y-4">
            {/* Article Resource */}
            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">Building Resilience Through Daily Habits</h3>
                      <Badge variant="outline" className="text-xs">
                        Article
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Discover how small daily practices can build long-term emotional resilience and mental strength.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>12 min read</span>
                      <span>•</span>
                      <span>Stress Management</span>
                      <span>•</span>
                      <span>Google Drive Link</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Exercise Resource */}
            <Card className="border-border/50 hover:border-secondary/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">Progressive Muscle Relaxation Guide</h3>
                      <Badge variant="outline" className="text-xs">
                        Exercise
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Step-by-step instructions for a powerful relaxation technique to reduce physical tension.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>20 minutes</span>
                      <span>•</span>
                      <span>Relaxation</span>
                      <span>•</span>
                      <span>Google Drive Link</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Video Resource */}
            <Card className="border-border/50 hover:border-accent/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">Breathing Techniques for Anxiety</h3>
                      <Badge variant="outline" className="text-xs">
                        Video
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Learn effective breathing exercises to manage anxiety and promote calm in stressful situations.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>8 minutes</span>
                      <span>•</span>
                      <span>Anxiety Management</span>
                      <span>•</span>
                      <span>Google Drive Link</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Drive Integration Note */}
        <Card className="mt-8 border-border/50 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-lg">Google Drive Integration</CardTitle>
            <CardDescription>
              All resources are stored and organized in Google Drive for easy access and management.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Resources are automatically synced from your Google Drive wellness folder. You can add new resources by
              uploading them to the designated folder, and they'll appear here automatically.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
