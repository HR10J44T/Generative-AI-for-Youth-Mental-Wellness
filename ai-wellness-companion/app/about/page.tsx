import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Users, Target, Heart, Brain, Mail, MessageSquare, Github, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <User className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">About Our Project</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Learn about the AI Youth Wellness Companion project, our mission to support youth mental health, and the
            team behind this innovative solution.
          </p>
        </div>

        {/* Project Goals Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Project Goals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Mental Wellness Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Provide accessible, personalized mental health support specifically designed for young people aged
                  13-24, addressing their unique challenges and needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leverage Google's Vertex AI to analyze mood patterns and provide personalized recommendations, coping
                  strategies, and wellness resources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Accessible Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Create an intuitive, mobile-friendly platform using Google services to ensure reliability,
                  accessibility, and ease of use for all users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <blockquote className="text-lg font-medium text-foreground italic mb-4">
              "To empower young people with AI-driven tools and resources that support their mental wellness journey,
              making professional-quality mental health support accessible, personalized, and engaging."
            </blockquote>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We believe that every young person deserves access to mental health support that understands their unique
              challenges, respects their privacy, and grows with them on their wellness journey.
            </p>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Sarah Chen</CardTitle>
                <CardDescription>Project Lead & AI Researcher</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Computer Science student specializing in AI and machine learning, passionate about mental health
                  technology.
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">Marcus Johnson</CardTitle>
                <CardDescription>UX Designer & Psychology Student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Psychology major with a focus on youth development and digital wellness, ensuring our design is
                  user-centered and accessible.
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-lg">Emma Rodriguez</CardTitle>
                <CardDescription>Data Analyst & Wellness Advocate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Data Science student with experience in mental health research, focusing on privacy-preserving
                  analytics and insights.
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Technology Stack</h2>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Powered by Google Services
              </CardTitle>
              <CardDescription>
                Built entirely using Google's ecosystem for reliability, scalability, and seamless integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Data Collection:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Google Forms</Badge>
                    <Badge variant="outline">Google Sheets</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">AI & Analytics:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Vertex AI</Badge>
                    <Badge variant="outline">Looker Studio</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Storage & Communication:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Google Drive</Badge>
                    <Badge variant="outline">Gmail</Badge>
                    <Badge variant="outline">Google Calendar</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Get in Touch
              </CardTitle>
              <CardDescription>
                Have questions, feedback, or want to learn more about our project? We'd love to hear from you!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground">team@aiwellnesscompanion.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Research Collaboration</p>
                  <p className="text-sm text-muted-foreground">Open to partnerships and research opportunities</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">User Feedback</p>
                  <p className="text-sm text-muted-foreground">Your input helps us improve and grow</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Form
              </CardTitle>
              <CardDescription>Send us a message directly through our Google Form</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Google Form Integration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact form will be embedded here using Google Forms for direct communication with our team.
                </p>
                <div className="text-xs text-muted-foreground bg-muted/50 rounded p-3 font-mono">
                  {'<iframe src="https://docs.google.com/forms/d/e/[CONTACT_FORM_ID]/viewform?embedded=true"'}
                  <br />
                  {'width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0">'}
                  <br />
                  {"Loading contact form…</iframe>"}
                </div>
                <Button className="mt-4 w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Open Contact Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Privacy & Ethics */}
        <Card className="mt-8 border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-center">Privacy & Ethics</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground max-w-4xl mx-auto">
              We are committed to protecting your privacy and maintaining the highest ethical standards in mental health
              technology. All data is encrypted, anonymized where possible, and used solely to improve your wellness
              experience. We follow HIPAA guidelines and best practices for youth data protection.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
