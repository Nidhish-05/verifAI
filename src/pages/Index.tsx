import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Brain,
  ScanSearch,
  Shield,
  LayoutDashboard,
  Bell,
  Lock,
  Database,
  FileCheck,
  Award,
  Zap,
  Users,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-secondary" />
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">VERIFAI</span>
          </div>
        </div>
      </nav>

      <Tabs defaultValue="user" className="w-full">
        <div className="container mx-auto px-4 pt-20">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>
        </div>

        <TabsContent value="user">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
                  Ensure Academic Integrity with AI-Powered Certificate Verification
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in">
                  Detect fake degrees and verify academic documents instantly with VERIFAI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    Request Demo
                  </Button>
                  <Button variant="secondary" size="lg" className="text-lg px-8">
                    Start Verification
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm">
                  Validate. Trust. Verify — with VERIFAI.
                </p>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  The Growing Threat of Fake Degrees
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Manual verification is slow, inconsistent, and unreliable. Institutions and employers need a secure, scalable, and automated solution.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">$7B Annual Loss</h3>
                  <p className="text-muted-foreground">Due to fake credentials globally</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">32% of CVs</h3>
                  <p className="text-muted-foreground">Contain falsified qualifications</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Weeks of Delay</h3>
                  <p className="text-muted-foreground">For manual verification processes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="features" className="py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Meet VERIFAI – The Authenticity Validator for Academia
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Powered by advanced AI, OCR, and blockchain technology to deliver instant, reliable verification
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={Brain}
                  title="AI-Based Document Analysis"
                  description="Advanced machine learning algorithms detect forgeries and anomalies with 99.7% accuracy"
                />
                <FeatureCard
                  icon={ScanSearch}
                  title="OCR Extraction & Cross Verification"
                  description="Automatically extract and verify data against institutional databases in real-time"
                />
                <FeatureCard
                  icon={Shield}
                  title="Blockchain-Backed Validation"
                  description="Immutable verification records ensure tamper-proof authenticity certification"
                />
                <FeatureCard
                  icon={LayoutDashboard}
                  title="Institutional Integration Dashboard"
                  description="Comprehensive admin portal with analytics, bulk verification, and reporting tools"
                />
                <FeatureCard
                  icon={Bell}
                  title="Forgery Alerts & Analytics"
                  description="Real-time notifications and detailed fraud pattern analysis for proactive security"
                />
                <FeatureCard
                  icon={Lock}
                  title="Secure Data Privacy Controls"
                  description="Enterprise-grade encryption with GDPR compliance and role-based access control"
                />
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  How It Works
                </h2>
                <p className="text-xl text-muted-foreground">
                  Verify authenticity in four simple steps
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                <StepCard
                  number="1"
                  title="Upload Certificate"
                  description="Upload digital or scanned certificate documents to our secure platform"
                />
                <StepCard
                  number="2"
                  title="AI & OCR Extract Data"
                  description="Our AI analyzes document structure while OCR extracts key information"
                />
                <StepCard
                  number="3"
                  title="Database Verification"
                  description="Cross-reference data against institutional records and blockchain ledgers"
                />
                <StepCard
                  number="4"
                  title="Instant Report"
                  description="Receive comprehensive authenticity report with confidence score"
                />
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Fast, Reliable, Tamper-Proof Verification
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Lightning Fast</h3>
                        <p className="text-muted-foreground">Verify documents in seconds, not weeks. Process hundreds of certificates simultaneously.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Legacy Compatible</h3>
                        <p className="text-muted-foreground">Works with both modern digital certificates and scanned legacy documents from any era.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                        <Database className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Trusted Globally</h3>
                        <p className="text-muted-foreground">Integrated with 500+ institutions worldwide. Trusted by leading universities and Fortune 500 companies.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={dashboardPreview}
                    alt="VERIFAI Dashboard Preview"
                    className="rounded-2xl shadow-glow border border-border"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Trusted by Leading Institutions
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <TestimonialCard
                  quote="VERIFAI helped us prevent over 20 fake admissions in our first semester. The ROI is incredible."
                  author="Dr. Sarah Mitchell"
                  role="Dean of Admissions"
                  organization="Stanford University"
                />
                <TestimonialCard
                  quote="Integration was seamless. We've reduced verification time from 2 weeks to under 2 minutes."
                  author="James Chen"
                  role="HR Director"
                  organization="Microsoft"
                />
                <TestimonialCard
                  quote="The blockchain verification gives us complete peace of mind. No more manual checks."
                  author="Prof. Rajesh Kumar"
                  role="Vice Chancellor"
                  organization="IIT Delhi"
                />
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-muted-foreground">
                  Choose the plan that fits your needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <PricingCard
                  title="Basic"
                  price="Free"
                  period="trial"
                  features={[
                    "50 verifications per month",
                    "Basic AI document analysis",
                    "Email support",
                    "Standard reports",
                    "7-day data retention"
                  ]}
                />
                <PricingCard
                  title="Institutional"
                  price="₹4,999"
                  period="/month"
                  highlighted={true}
                  features={[
                    "Unlimited verifications",
                    "Advanced AI & OCR",
                    "Priority support",
                    "Custom integrations",
                    "Analytics dashboard",
                    "Bulk verification",
                    "Blockchain validation"
                  ]}
                />
                <PricingCard
                  title="Enterprise"
                  price="Custom"
                  features={[
                    "Everything in Institutional",
                    "Dedicated account manager",
                    "API access",
                    "Government compliance",
                    "Custom SLAs",
                    "White-label options",
                    "On-premise deployment"
                  ]}
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Frequently Asked Questions
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-secondary">
                      How accurate is VERIFAI's AI detection?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      VERIFAI achieves 99.7% accuracy in detecting fake certificates through advanced machine learning algorithms trained on millions of authentic and fraudulent documents. Our system continuously learns and improves with each verification.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-secondary">
                      Can it verify old certificates?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! VERIFAI works with both modern digital certificates and legacy scanned documents. Our OCR technology can extract data from certificates dating back decades, cross-referencing with institutional archives and historical records.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-secondary">
                      Is data secure?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Absolutely. We use enterprise-grade AES-256 encryption, comply with GDPR and SOC 2 standards, and offer role-based access control. All data is stored in secure, geo-redundant data centers with regular third-party security audits.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-secondary">
                      What formats are supported?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      VERIFAI supports PDF, JPG, PNG, and TIFF formats. We can process both digital certificates and high-quality scans of physical documents. For best results, we recommend 300 DPI resolution for scanned documents.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-secondary">
                      How long does verification take?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Most verifications are completed in under 60 seconds. Bulk verifications can process hundreds of certificates simultaneously. Complex cases requiring manual review may take up to 24 hours.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-card border-t border-border py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-8 h-8" />
                    <span className="text-2xl font-bold">VERIFAI</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Building Trust in Education.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-foreground">Product</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#features" className="hover:text-foreground transition-smooth">Features</a></li>
                    <li><a href="#how-it-works" className="hover:text-foreground transition-smooth">How It Works</a></li>
                    <li><a href="#pricing" className="hover:text-foreground transition-smooth">Pricing</a></li>
                    <li><a href="#" className="hover:text-foreground transition-smooth">API Docs</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground transition-smooth">About Us</a></li>
                    <li><a href="#" className="hover:text-foreground transition-smooth">Careers</a></li>
                    <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
                    <li><a href="#" className="hover:text-foreground transition-smooth">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-foreground transition-smooth">Cookie Policy</a></li>
                    <li><a href="#" className="hover:text-foreground transition-smooth">Compliance</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                <p>© 2025 VERIFAI Technologies Pvt. Ltd. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </TabsContent>

        <TabsContent value="admin">
           <div className="container mx-auto px-4 py-24">
             <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="admin@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <Button type="submit" className="w-full" variant="hero">
                                Login
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
