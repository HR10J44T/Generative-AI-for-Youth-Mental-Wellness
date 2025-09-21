import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Database, Brain, BarChart3, Mail, Calendar } from "lucide-react"

export function DataFlowDiagram() {
  return (
    <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
      <CardHeader>
        <CardTitle className="text-center">Google Services Data Flow</CardTitle>
        <CardDescription className="text-center">
          How your data flows through Google services to provide personalized wellness support
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Step 1: Data Collection */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Data Collection</h3>
            <p className="text-xs text-muted-foreground max-w-32">Google Forms → Google Sheets</p>
          </div>

          <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
          <div className="w-6 h-6 rotate-90 md:hidden">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Step 2: AI Processing */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
              <Brain className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">AI Analysis</h3>
            <p className="text-xs text-muted-foreground max-w-32">Google Vertex AI Processing</p>
          </div>

          <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
          <div className="w-6 h-6 rotate-90 md:hidden">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Step 3: Visualization */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-3">
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Visualization</h3>
            <p className="text-xs text-muted-foreground max-w-32">Looker Studio Dashboards</p>
          </div>

          <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
          <div className="w-6 h-6 rotate-90 md:hidden">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Step 4: Notifications */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <div className="flex gap-1">
                <Mail className="w-4 h-4 text-primary" />
                <Calendar className="w-4 h-4 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Notifications</h3>
            <p className="text-xs text-muted-foreground max-w-32">Gmail & Calendar Reminders</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
