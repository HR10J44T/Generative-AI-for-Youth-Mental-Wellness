import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, TrendingDown, Calendar, Heart, Brain, Target, Award } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Wellness Dashboard</h1>
              <p className="text-muted-foreground">Track your progress and visualize your wellness journey</p>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Average Mood</CardTitle>
                <Heart className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">7.2</div>
              <div className="flex items-center gap-1 text-xs">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500">+0.3 from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Stress Level</CardTitle>
                <Brain className="w-4 h-4 text-secondary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">4.1</div>
              <div className="flex items-center gap-1 text-xs">
                <TrendingDown className="w-3 h-3 text-green-500" />
                <span className="text-green-500">-0.8 from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Check-in Streak</CardTitle>
                <Target className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12 days</div>
              <div className="flex items-center gap-1 text-xs">
                <Award className="w-3 h-3 text-yellow-500" />
                <span className="text-muted-foreground">Personal best!</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Activities</CardTitle>
                <Calendar className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">28</div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-muted-foreground">This month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Mood Trends Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Mood Trends
              </CardTitle>
              <CardDescription>Your mood patterns over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Looker Studio Chart</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interactive mood trend visualization will be embedded here from Google Looker Studio (Data Studio).
                </p>
                <div className="text-xs text-muted-foreground bg-muted/50 rounded p-3 font-mono">
                  {'<iframe src="https://lookerstudio.google.com/embed/reporting/[REPORT_ID]"'}
                  <br />
                  {'width="100%" height="300" frameborder="0" allowfullscreen>'}
                  <br />
                  {"</iframe>"}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Analysis Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-secondary" />
                Activity Analysis
              </CardTitle>
              <CardDescription>Correlation between activities and mood</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Activity Impact Chart</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Shows how different activities affect your mood and stress levels, powered by Looker Studio.
                </p>
                <div className="text-xs text-muted-foreground bg-muted/50 rounded p-3 font-mono">
                  {'<iframe src="https://lookerstudio.google.com/embed/reporting/[REPORT_ID]"'}
                  <br />
                  {'width="100%" height="300" frameborder="0" allowfullscreen>'}
                  <br />
                  {"</iframe>"}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Tracking */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Weekly Goals</CardTitle>
              <CardDescription>Your wellness objectives for this week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Daily mood check-ins</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  7/7
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Mindfulness exercises</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                  4/5
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Physical activity</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  3/3
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Achievements</CardTitle>
              <CardDescription>Milestones you've reached</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">7-Day Streak</p>
                  <p className="text-xs text-muted-foreground">Consistent daily check-ins</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Mood Improver</p>
                  <p className="text-xs text-muted-foreground">Average mood increased</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Stress Reducer</p>
                  <p className="text-xs text-muted-foreground">Lowered stress levels</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Insights</CardTitle>
              <CardDescription>AI-generated observations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-sm font-medium text-primary mb-1">Positive Trend</p>
                <p className="text-xs text-muted-foreground">
                  Your mood has been consistently improving over the past two weeks.
                </p>
              </div>
              <div className="p-3 bg-secondary/5 rounded-lg">
                <p className="text-sm font-medium text-secondary mb-1">Activity Impact</p>
                <p className="text-xs text-muted-foreground">Exercise days show 23% higher mood ratings on average.</p>
              </div>
              <div className="p-3 bg-accent/5 rounded-lg">
                <p className="text-sm font-medium text-accent mb-1">Recommendation</p>
                <p className="text-xs text-muted-foreground">
                  Consider morning meditation to further reduce stress levels.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Integration Info */}
        <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Data Integration
            </CardTitle>
            <CardDescription>How your dashboard is powered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">Data Source:</h4>
                <p className="text-muted-foreground">Google Forms → Google Sheets</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">AI Analysis:</h4>
                <p className="text-muted-foreground">Google Vertex AI processing</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Visualization:</h4>
                <p className="text-muted-foreground">Looker Studio dashboards</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
