import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Save, 
  Send, 
  DollarSign, 
  Calendar, 
  Target, 
  FileText,
  Users,
  Plus,
  X
} from "lucide-react";

interface CampaignForm {
  title: string;
  description: string;
  budget: string;
  timeline: string;
  category: string;
  deliverables: string[];
  requirements: string[];
  targetAudience: string;
}

const categories = [
  "Beauty & Skincare",
  "Fashion & Style", 
  "Food & Beverages",
  "Technology",
  "Travel & Lifestyle",
  "Fitness & Health",
  "Education",
  "Finance",
  "Entertainment",
  "Home & Garden"
];

const deliverableOptions = [
  "Instagram Reel",
  "Instagram Story", 
  "Instagram Post",
  "YouTube Video",
  "YouTube Short",
  "TikTok Video",
  "Twitter Thread",
  "Blog Post",
  "Product Review"
];

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CampaignForm>({
    title: "",
    description: "",
    budget: "",
    timeline: "",
    category: "",
    deliverables: [],
    requirements: [],
    targetAudience: ""
  });

  const [newRequirement, setNewRequirement] = useState("");

  const handleInputChange = (field: keyof CampaignForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addDeliverable = (deliverable: string) => {
    if (!formData.deliverables.includes(deliverable)) {
      setFormData(prev => ({
        ...prev,
        deliverables: [...prev.deliverables, deliverable]
      }));
    }
  };

  const removeDeliverable = (deliverable: string) => {
    setFormData(prev => ({
      ...prev,
      deliverables: prev.deliverables.filter(d => d !== deliverable)
    }));
  };

  const addRequirement = () => {
    if (newRequirement.trim() && !formData.requirements.includes(newRequirement.trim())) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement("");
    }
  };

  const removeRequirement = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter(r => r !== requirement)
    }));
  };

  const handleSaveDraft = () => {
    console.log("Saving as draft:", formData);
    navigate("/brand-dashboard");
  };

  const handlePublish = () => {
    console.log("Publishing campaign:", formData);
    navigate("/brand-dashboard");
  };

  const isFormValid = () => {
    return formData.title && 
           formData.description && 
           formData.budget && 
           formData.timeline && 
           formData.category &&
           formData.deliverables.length > 0;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/brand-dashboard" className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-card">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-2xl font-poppins font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                FamFree
              </span>
            </Link>

            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={handleSaveDraft}>
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button 
                variant="hero" 
                onClick={handlePublish}
                disabled={!isFormValid()}
              >
                <Send className="w-4 h-4 mr-2" />
                Publish Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">Create New Campaign</h1>
            <p className="text-muted-foreground">Fill in the details below to create your influencer marketing campaign</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle className="font-poppins flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Campaign Details
                  </CardTitle>
                  <CardDescription>Provide basic information about your campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Campaign Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Summer Fashion Collection Launch"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your campaign objectives, key messages, and what you expect from creators..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget (₹) *</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="budget"
                          type="number"
                          placeholder="50000"
                          className="pl-10"
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="timeline"
                          placeholder="e.g., 15 Days"
                          className="pl-10"
                          value={formData.timeline}
                          onChange={(e) => handleInputChange("timeline", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle className="font-poppins flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-success" />
                    Deliverables
                  </CardTitle>
                  <CardDescription>Select the content types you need from creators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                    {deliverableOptions.map((option) => (
                      <Button
                        key={option}
                        variant={formData.deliverables.includes(option) ? "default" : "outline"}
                        size="sm"
                        className="text-xs"
                        onClick={() => 
                          formData.deliverables.includes(option) 
                            ? removeDeliverable(option)
                            : addDeliverable(option)
                        }
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                  
                  {formData.deliverables.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Selected deliverables:</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.deliverables.map((deliverable) => (
                          <Badge key={deliverable} variant="secondary" className="flex items-center gap-1">
                            {deliverable}
                            <X 
                              className="w-3 h-3 cursor-pointer hover:text-destructive"
                              onClick={() => removeDeliverable(deliverable)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle className="font-poppins">Requirements & Preferences</CardTitle>
                  <CardDescription>Specify your criteria for creator selection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Creator Requirements</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="requirements"
                        placeholder="e.g., Min 25K followers, Beauty niche"
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addRequirement()}
                      />
                      <Button type="button" variant="outline" onClick={addRequirement}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {formData.requirements.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.requirements.map((requirement, index) => (
                          <Badge key={index} variant="outline" className="flex items-center gap-1">
                            {requirement}
                            <X 
                              className="w-3 h-3 cursor-pointer hover:text-destructive"
                              onClick={() => removeRequirement(requirement)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="targetAudience">Target Audience</Label>
                    <Input
                      id="targetAudience"
                      placeholder="e.g., Women aged 18-35 interested in beauty"
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle className="font-poppins text-lg">Campaign Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Title</p>
                    <p className="font-medium">{formData.title || "Campaign Title"}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Budget</p>
                    <p className="font-medium text-success">
                      {formData.budget ? `₹${parseInt(formData.budget).toLocaleString('en-IN')}` : "₹0"}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Timeline</p>
                    <p className="font-medium">{formData.timeline || "Not specified"}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Category</p>
                    <p className="font-medium">{formData.category || "Not selected"}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Deliverables</p>
                    <p className="font-medium text-xs">
                      {formData.deliverables.length > 0 
                        ? formData.deliverables.join(", ") 
                        : "None selected"
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle className="font-poppins text-lg">Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Be specific about your brand voice and campaign objectives</p>
                  <p>• Include clear guidelines for content creation</p>
                  <p>• Set realistic timelines for creators to deliver quality work</p>
                  <p>• Consider offering bonus incentives for exceptional performance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}