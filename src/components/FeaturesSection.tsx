import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  TrendingUp, 
  DollarSign, 
  CheckCircle, 
  BarChart3,
  MessageSquare,
  Shield
} from "lucide-react";

const brandFeatures = [
  {
    icon: Target,
    title: "Create Campaigns",
    description: "Set campaign title, budget, deliverables, timeline, and target category with our intuitive campaign builder.",
    badge: "For Brands"
  },
  {
    icon: BarChart3,
    title: "Manage Applications",
    description: "Review creator applications, approve or reject submissions, and track campaign progress in real-time.",
    badge: "For Brands"
  },
  {
    icon: CheckCircle,
    title: "Review Content",
    description: "Preview submitted UGC content, request revisions, and approve final deliverables before payment.",
    badge: "For Brands"
  },
  {
    icon: DollarSign,
    title: "Secure Payments",
    description: "Process payments seamlessly in INR with built-in escrow protection and automated payout systems.",
    badge: "For Brands"
  }
];

const creatorFeatures = [
  {
    icon: Users,
    title: "Profile Setup",
    description: "Showcase your niche, follower count, and social media handles to attract the right brand partnerships.",
    badge: "For Creators"
  },
  {
    icon: TrendingUp,
    title: "Discover Campaigns",
    description: "Browse active campaigns filtered by budget, niche, and category to find perfect collaboration opportunities.",
    badge: "For Creators"
  },
  {
    icon: MessageSquare,
    title: "Apply & Track",
    description: "Submit compelling pitches and track your application status from pending to approved in your dashboard.",
    badge: "For Creators"
  },
  {
    icon: Shield,
    title: "Guaranteed Payouts",
    description: "Get paid securely and on time with our escrow system once your content is approved by brands.",
    badge: "For Creators"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a brand looking to reach new audiences or a creator seeking 
            monetization opportunities, FamFree has the tools you need.
          </p>
        </div>

        {/* Brand Features */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary-light px-4 py-2 mb-4">
              <Target className="w-4 h-4 mr-2" />
              Brand Features
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 gradient-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs mb-2 w-fit mx-auto">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-lg font-poppins">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Creator Features */}
        <div>
          <div className="text-center mb-8">
            <Badge variant="outline" className="text-success border-success/20 bg-success-light px-4 py-2 mb-4">
              <Users className="w-4 h-4 mr-2" />
              Creator Features
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creatorFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 gradient-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-success" />
                  </div>
                  <Badge variant="secondary" className="text-xs mb-2 w-fit mx-auto">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-lg font-poppins">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};