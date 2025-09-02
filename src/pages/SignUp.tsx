import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Target, Users, Mail, Lock, User, Building } from "lucide-react";

type UserRole = "brand" | "creator" | "";

export default function SignUp() {
  const [searchParams] = useSearchParams();
  const initialRole = (searchParams.get("role") as UserRole) || "";
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRole);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    companyName: ""
  });

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the signup logic
    console.log("Signing up:", { ...formData, role: selectedRole });
    
    // For now, redirect to appropriate dashboard
    if (selectedRole === "brand") {
      window.location.href = "/brand-dashboard";
    } else if (selectedRole === "creator") {
      window.location.href = "/creator-dashboard";
    }
  };

  const isFormValid = () => {
    return selectedRole && 
           formData.email && 
           formData.password && 
           formData.confirmPassword === formData.password &&
           formData.fullName &&
           (selectedRole === "creator" || formData.companyName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background to-success-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-card">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-2xl font-poppins font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                FamFree
              </span>
            </div>
          </Link>
          <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">Join FamFree</h1>
          <p className="text-muted-foreground">Create your account and start collaborating</p>
        </div>

        <Card className="shadow-elegant border-0 gradient-card">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-xl font-poppins">Get Started</CardTitle>
            <CardDescription>Choose your role to continue</CardDescription>
          </CardHeader>
          
          <CardContent>
            {!selectedRole ? (
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full h-auto p-6 border-2 hover:border-primary hover:bg-primary-light transition-smooth"
                  onClick={() => handleRoleSelect("brand")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-poppins font-semibold text-foreground">I'm a Brand</div>
                      <div className="text-sm text-muted-foreground">Post campaigns and find creators</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-auto p-6 border-2 hover:border-success hover:bg-success-light transition-smooth"
                  onClick={() => handleRoleSelect("creator")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-success/10 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-success" />
                    </div>
                    <div className="text-left">
                      <div className="font-poppins font-semibold text-foreground">I'm a Creator</div>
                      <div className="text-sm text-muted-foreground">Find campaigns and monetize content</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  </div>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <Badge variant="outline" className={`px-3 py-1 ${selectedRole === 'brand' ? 'border-primary text-primary' : 'border-success text-success'}`}>
                    {selectedRole === 'brand' ? (
                      <>
                        <Target className="w-4 h-4 mr-1" />
                        Brand Account
                      </>
                    ) : (
                      <>
                        <Users className="w-4 h-4 mr-1" />
                        Creator Account
                      </>
                    )}
                  </Badge>
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedRole("")}
                    className="ml-2 text-xs"
                  >
                    Change
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>

                {selectedRole === "brand" && (
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>Company Name</span>
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>Password</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>Confirm Password</span>
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant={selectedRole === "brand" ? "brand" : "creator"}
                  className="w-full mt-6"
                  disabled={!isFormValid()}
                >
                  Create {selectedRole === "brand" ? "Brand" : "Creator"} Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}