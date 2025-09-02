import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Search, 
  Users, 
  DollarSign, 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle,
  Eye,
  LogOut,
  Filter,
  Target,
  Calendar,
  MapPin
} from "lucide-react";

// Sample data
const availableCampaigns = [
  {
    id: "C001",
    brandName: "Nykaa",
    title: "Festive Skincare Push",
    budget: 50000,
    status: "active",
    deliverables: "1 Reel + 2 Stories",
    timeline: "15 Days",
    category: "Beauty",
    description: "Create engaging content showcasing our festive skincare collection with authentic reviews and tutorials.",
    requirements: ["Beauty/Skincare niche", "Min 25K followers", "Instagram + Stories"]
  },
  {
    id: "C002",
    brandName: "Swiggy",
    title: "Cricket Season Promo",
    budget: 120000,
    status: "active", 
    deliverables: "1 Reel + 1 Static Post",
    timeline: "10 Days",
    category: "Food",
    description: "Showcase your favorite match-day snacks and delivery experience during cricket season.",
    requirements: ["Food/Lifestyle niche", "Min 50K followers", "Location: Major cities"]
  }
];

const myApplications = [
  {
    id: "A001",
    campaignId: "C003",
    brandName: "Unacademy",
    campaignTitle: "JEE Prep Campaign",
    status: "pending",
    appliedDate: "2024-01-15",
    budget: 75000
  },
  {
    id: "A002", 
    campaignId: "C001",
    brandName: "Nykaa",
    campaignTitle: "Festive Skincare Push",
    status: "approved",
    appliedDate: "2024-01-10",
    budget: 50000
  }
];

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState("campaigns");
  const [searchTerm, setSearchTerm] = useState("");
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "approved": return "bg-success text-success-foreground";
      case "rejected": return "bg-destructive text-destructive-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const filteredCampaigns = availableCampaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-card">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-2xl font-poppins font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                FamFree
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">Creator Dashboard</h1>
              <p className="text-muted-foreground">Discover campaigns and manage your collaborations</p>
            </div>
            <Link to="/profile-setup">
              <Button variant="creator" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Complete Profile
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Applications Sent</p>
                  <p className="text-2xl font-poppins font-bold text-primary">2</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Approved Campaigns</p>
                  <p className="text-2xl font-poppins font-bold text-success">1</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Earnings</p>
                  <p className="text-2xl font-poppins font-bold text-warning">₹50K</p>
                </div>
                <DollarSign className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit">
            <TabsTrigger value="campaigns" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Available Campaigns</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>My Applications</span>
            </TabsTrigger>
            <TabsTrigger value="submissions" className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Work Submissions</span>
            </TabsTrigger>
          </TabsList>

          {/* Available Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search campaigns by brand, title, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid gap-6">
              {filteredCampaigns.map((campaign) => (
                <Card key={campaign.id} className="shadow-card gradient-card border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="font-poppins text-lg">{campaign.title}</CardTitle>
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <CardDescription className="mb-2">
                          By <span className="font-semibold">{campaign.brandName}</span> • {campaign.category}
                        </CardDescription>
                        <p className="text-sm text-foreground">{campaign.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold text-success">{formatCurrency(campaign.budget)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Deliverables</p>
                        <p className="font-semibold">{campaign.deliverables}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-semibold">{campaign.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-semibold">{campaign.category}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {campaign.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="creator">
                        <Users className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <div className="grid gap-6">
              {myApplications.map((application) => (
                <Card key={application.id} className="shadow-card gradient-card border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-poppins text-lg mb-1">{application.campaignTitle}</CardTitle>
                        <CardDescription>
                          Campaign by: {application.brandName}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(application.status)}>
                        {application.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold">{formatCurrency(application.budget)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Applied Date</p>
                        <p className="font-semibold">{new Date(application.appliedDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Campaign ID</p>
                        <p className="font-semibold text-xs">{application.campaignId}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Application
                      </Button>
                      {application.status === "approved" && (
                        <Button variant="creator" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          Submit Work
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Work Submissions Tab */}
          <TabsContent value="submissions" className="space-y-6">
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle className="font-poppins">Work Submissions</CardTitle>
                <CardDescription>Upload and manage your campaign deliverables</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">No submissions yet</h3>
                  <p className="text-muted-foreground mb-4">Your approved campaign submissions will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}