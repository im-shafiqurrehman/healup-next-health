import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { products } from '@/utils/data/products';
import { ArrowRight, Award, Globe, Users, CheckCircle, Pill, Microscope, Shield, Building2, FlaskConical, UserCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import labResearch from '@/assets/lab-research.jpg';
import labManufacturing from '@/assets/lab-manufacturing.jpg';
import teamLeadership from '@/assets/team-leadership.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-accent/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Healup Pharma</span>
              <span className="block text-3xl md:text-4xl font-normal mt-2 text-white/90">
                Innovating Global Health
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Leading the future of pharmaceutical innovation with cutting-edge research and quality healthcare solutions for a healthier world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Healup Pharma?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to excellence in pharmaceutical innovation and global healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  GMP Certified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Internationally certified Good Manufacturing Practices ensuring the highest quality standards in all our pharmaceutical products.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Globe className="h-5 w-5 text-accent" />
                  Global Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Serving patients worldwide with reliable pharmaceutical solutions and maintaining international regulatory compliance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                  <Microscope className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Users className="h-5 w-5 text-success" />
                  Expert Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  World-class team of researchers, pharmacists, and healthcare professionals dedicated to advancing medical science.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most trusted pharmaceutical solutions designed for optimal health outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="animate-slide-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Labs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our State-of-the-Art Laboratories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced research and manufacturing facilities equipped with cutting-edge technology for pharmaceutical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden hover:shadow-medium transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={labResearch} 
                  alt="Research Laboratory"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  Research & Development Lab
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Our R&D facility houses advanced analytical instruments, biocontainment suites, and specialized equipment for drug discovery and development.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Advanced analytical testing equipment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Biocontainment and sterile environments</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Drug formulation and stability testing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-medium transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={labManufacturing} 
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  Manufacturing Facility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  GMP-certified manufacturing lines with automated quality control systems ensuring consistent, high-quality pharmaceutical production.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>GMP-certified production lines</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Automated quality control systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Clean room environments</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals leading innovation and excellence in pharmaceutical development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="text-center hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <UserCheck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Dr. Sarah Chen</CardTitle>
                    <CardDescription>Chief Scientific Officer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      20+ years in pharmaceutical research with expertise in drug development and regulatory affairs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-lg">Dr. Michael Rodriguez</CardTitle>
                    <CardDescription>Head of R&D</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Expert in molecular biology and pharmaceutical innovation with 50+ published research papers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <CardTitle className="text-lg">Lisa Thompson</CardTitle>
                    <CardDescription>VP Quality Assurance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      International quality standards expert ensuring GMP compliance across all operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-4">
                      <Globe className="h-8 w-8 text-warning" />
                    </div>
                    <CardTitle className="text-lg">James Park</CardTitle>
                    <CardDescription>Global Operations Director</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Leading international expansion and supply chain optimization across 50+ countries.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden">
                <div className="aspect-square lg:aspect-[4/3] overflow-hidden">
                  <img 
                    src={teamLeadership} 
                    alt="Healup Pharma Leadership Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Our Commitment to Excellence</h3>
                    <p className="text-muted-foreground">
                      Our diverse leadership team brings together decades of experience in pharmaceutical research, 
                      manufacturing, and global healthcare delivery. Together, we're committed to advancing medical 
                      science and improving patient outcomes worldwide.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-warning fill-current" />
                        <span>50+ Years Combined Experience</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Partner with Healthcare Innovation?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of healthcare providers who trust Healup Pharma for their pharmaceutical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;