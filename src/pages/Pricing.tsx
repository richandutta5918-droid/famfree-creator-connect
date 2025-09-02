import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, Target, Users } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24 bg-gradient-to-br from-primary-light via-background to-success-light">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start for free and scale as you grow. No hidden fees, no setup costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Brands */}
            <Card className="shadow-elegant border-0 gradient-card relative">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-poppins">Brand Plan</CardTitle>
                <CardDescription>Perfect for brands and businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">10%</span>
                  <span className="text-muted-foreground"> platform fee</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Unlimited campaign creation",
                    "Creator discovery & management",
                    "Real-time application tracking",
                    "Content review & approval",
                    "Secure payment processing",
                    "Analytics & insights",
                    "Priority support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link to="/signup?role=brand">
                    <Button variant="hero" className="w-full">
                      Start as Brand
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* For Creators */}
            <Card className="shadow-elegant border-0 gradient-card relative">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <CardTitle className="text-2xl font-poppins">Creator Plan</CardTitle>
                <CardDescription>Perfect for content creators</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">Free</span>
                  <span className="text-muted-foreground"> to join</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Free profile setup",
                    "Browse unlimited campaigns",
                    "Apply to multiple campaigns",
                    "Track application status",
                    "Direct brand communication",
                    "Guaranteed secure payouts",
                    "Community support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link to="/signup?role=creator">
                    <Button variant="creator" className="w-full">
                      Start as Creator
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Questions about pricing? We're here to help.
            </p>
            <Link to="/support">
              <Button variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}