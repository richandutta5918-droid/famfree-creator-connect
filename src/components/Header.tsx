import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, DollarSign } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-card group-hover:scale-105 transition-bounce">
              <Users className="h-6 w-6" />
            </div>
            <span className="text-2xl font-poppins font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              FamFree
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="#how-it-works" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              How It Works
            </Link>
            <Link 
              to="#pricing" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Pricing
            </Link>
            <Link 
              to="#about" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};