import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Plus, 
  Target, 
  Users, 
  DollarSign, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  XCircle,
  Eye,
  LogOut
} from "lucide-react";

// Sample data
const campaigns = [
  {
    id: "C001",
    title: "Festive Skincare Push",
    budget: 50000,
    status: "active",
    deliverables: "1 Reel + 2 Stories",
    timeline: "15 Days",
    category: "Beauty",
    applications: 12,
    approved: 3
  },
  {
    id: "C002",
    title: "Cricket Season Promo",
    budget: 120000,
    status: "active", 
    deliverables: "1 Reel + 1 Static Post",
    timeline: "10 Days",
    category: "Food",
    applications: 25,
    approved: 5
  },
  {
    id: "C003",
    title: "JEE Prep Campaign",
    budget: 75000,
    status: "draft",
    deliverables: "2 Reels + 3 Tweets",
    timeline: "20 Days", 
    category: "Edtech",
    applications: 0,
    approved: 0
  }
];

const applications = [
  {
    id: "A001",
    campaignId: "C001",
    campaignTitle: "Festive Skincare Push",
    creatorName: "Riya Sharma",
    followers: "50K",
    niche: "Fashion/Beauty",
    status: "pending",
    appliedDate: "2 days ago"
  },
  {
    id: "A002", 
    campaignId: "C002",
    campaignTitle: "Cricket Season Promo",
    creatorName: "Karan Verma",
    followers: "120K",
    niche: "Food & Travel",
    status: "approved",
    appliedDate: "5 days ago"
  }
];

export default function BrandDashboard() {
  const [activeTab, setActiveTab] = useState("campaigns");
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "draft": return "bg-warning text-warning-foreground";  
      case "completed": return "bg-muted text-muted-foreground";
      case "approved": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "rejected": return "bg-destructive text-destructive-foreground";
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
              <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">Brand Dashboard</h1>
              <p className="text-muted-foreground">Manage your campaigns and track creator applications</p>
            </div>
            <Link to="/create-campaign">
              <Button variant="hero" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Create Campaign
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
                  <p className="text-sm font-medium text-muted-foreground mb-1">Active Campaigns</p>
                  <p className="text-2xl font-poppins font-bold text-primary">2</p>
                </div>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Applications</p>
                  <p className="text-2xl font-poppins font-bold text-success">37</p>
                </div>
                <Users className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Budget</p>
                  <p className="text-2xl font-poppins font-bold text-warning">₹2.45L</p>
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
              <span>Campaigns</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Applications</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>Payments</span>
            </TabsTrigger>
          </TabsList>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="shadow-card gradient-card border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-poppins text-lg mb-2">{campaign.title}</CardTitle>
                        <CardDescription>
                          {campaign.deliverables} • {campaign.timeline} • {campaign.category}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold">{formatCurrency(campaign.budget)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Applications</p>
                        <p className="font-semibold">{campaign.applications}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Approved</p>
                        <p className="font-semibold">{campaign.approved}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Campaign ID</p>
                        <p className="font-semibold text-xs">{campaign.id}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <div className="grid gap-6">
              {applications.map((application) => (
                <Card key={application.id} className="shadow-card gradient-card border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-poppins text-lg mb-1">{application.creatorName}</CardTitle>
                        <CardDescription>
                          Applied for: {application.campaignTitle}
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
                        <p className="text-sm text-muted-foreground">Followers</p>
                        <p className="font-semibold">{application.followers}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Niche</p>
                        <p className="font-semibold">{application.niche}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Applied</p>
                        <p className="font-semibold">{application.appliedDate}</p>
                      </div>
                    </div>
                    {application.status === "pending" && (
                      <div className="flex space-x-2">
                        <Button variant="creator" size="sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm">
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle className="font-poppins">Payment Overview</CardTitle>
                <CardDescription>Track your campaign payments and payouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <DollarSign className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">No payments yet</h3>
                  <p className="text-muted-foreground mb-4">Payments will appear here once creators complete approved campaigns</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}