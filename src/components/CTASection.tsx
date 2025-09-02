import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary via-primary-hover to-success relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">
            Join 52,000+ Brands & Creators
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your influencer marketing journey today. Create campaigns, 
            discover opportunities, and build meaningful partnerships that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/signup?role=brand">
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-8 py-6 text-lg font-montserrat bg-white text-primary hover:bg-white/90 shadow-button"
              >
                <Target className="w-5 h-5 mr-2" />
                Start as a Brand
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/signup?role=creator">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-montserrat border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Users className="w-5 h-5 mr-2" />
                Start as a Creator
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-white/70 mt-6">
            Free to get started • No setup fees • Secure payments
          </p>
        </div>
      </div>
    </section>
  );
};