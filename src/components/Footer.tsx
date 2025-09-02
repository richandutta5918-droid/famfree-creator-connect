import { Link } from "react-router-dom";
import { Users, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-card">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-2xl font-poppins font-bold text-background">
                FamFree
              </span>
            </Link>
            <p className="text-sm text-background/80">
              Connect brands with creators through our no-code influencer marketing platform. 
              Simple, professional, and results-driven.
            </p>
          </div>

          {/* For Brands */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-background">For Brands</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/signup?role=brand" className="text-background/80 hover:text-primary transition-smooth">Post Campaigns</Link></li>
              <li><Link to="/brand-dashboard" className="text-background/80 hover:text-primary transition-smooth">Brand Dashboard</Link></li>
              <li><Link to="/pricing" className="text-background/80 hover:text-primary transition-smooth">Pricing</Link></li>
              <li><Link to="/support" className="text-background/80 hover:text-primary transition-smooth">Success Stories</Link></li>
            </ul>
          </div>

          {/* For Creators */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-background">For Creators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/signup?role=creator" className="text-background/80 hover:text-success transition-smooth">Find Campaigns</Link></li>
              <li><Link to="/creator-dashboard" className="text-background/80 hover:text-success transition-smooth">Creator Dashboard</Link></li>
              <li><Link to="/support" className="text-background/80 hover:text-success transition-smooth">Creator Resources</Link></li>
              <li><Link to="/terms" className="text-background/80 hover:text-success transition-smooth">Payment Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-background">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>hello@famfree.com</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/60">
              © 2024 FamFree. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-background/60 hover:text-background transition-smooth">Privacy Policy</Link>
              <Link to="/terms" className="text-background/60 hover:text-background transition-smooth">Terms of Service</Link>
              <Link to="/support" className="text-background/60 hover:text-background transition-smooth">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};