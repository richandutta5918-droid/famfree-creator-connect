import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-light via-background to-success-light overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Content creators collaborating with brands"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-success/5" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trusted by 10,000+ Brands & Creators
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground mb-6 leading-tight">
            Connect{" "}
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Brands
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-success to-warning bg-clip-text text-transparent">
              Creators
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            FamFree is the no-code platform that enables brands to post influencer campaigns 
            and allows creators to discover and apply for active opportunities. 
            Simple, professional, and results-driven.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/signup?role=brand">
              <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
                <Target className="w-5 h-5 mr-2" />
                Post Your Campaign
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/signup?role=creator">
              <Button variant="creator" size="lg" className="px-8 py-6 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Find Campaigns
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-poppins font-bold text-success mb-1">2K+</div>
              <div className="text-sm text-muted-foreground">Brand Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-poppins font-bold text-warning mb-1">₹10Cr+</div>
              <div className="text-sm text-muted-foreground">Payouts Made</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-1">15K+</div>
              <div className="text-sm text-muted-foreground">Campaigns Completed</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-success/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-warning/5 rounded-full blur-3xl -z-1" />
    </section>
  );
};