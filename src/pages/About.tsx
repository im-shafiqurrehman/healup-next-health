import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Eye, Award, Calendar, Users, Globe2, Microscope, Heart, FlaskConical, Building2, UserCheck, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import labResearch from '@/assets/lab-research.jpg';
import labManufacturing from '@/assets/lab-manufacturing.jpg';
import teamLeadership from '@/assets/team-leadership.jpg';

const About = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Healup Pharma was established with a vision to innovate global healthcare.'
    },
    {
      year: '2012',
      title: 'First GMP Certification',
      description: 'Achieved international Good Manufacturing Practice certification.'
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded operations to serve healthcare markets across 15 countries.'
    },
    {
      year: '2018',
      title: 'Research & Development',
      description: 'Established state-of-the-art R&D facility with advanced laboratories.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched digital health initiatives and telemedicine partnerships.'
    },
    {
      year: '2024',
      title: 'Sustainable Pharma',
      description: 'Leading green pharmaceutical manufacturing with zero-waste initiatives.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient First',
      description: 'Every decision we make prioritizes patient safety and well-being above all else.'
    },
    {
      icon: Microscope,
      title: 'Scientific Excellence',
      description: 'Rigorous research and evidence-based development drive our pharmaceutical innovations.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Uncompromising commitment to quality in every aspect of our operations.'
    },
    {
      icon: Globe2,
      title: 'Global Impact',
      description: 'Making healthcare accessible and affordable for communities worldwide.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-white/20 text-white border-white/30">About Healup Pharma</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Pioneering the Future of Global Healthcare
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              For over a decade, we've been at the forefront of pharmaceutical innovation, 
              developing life-changing medications that improve health outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Founded in 2010, Healup Pharma began as a vision to bridge the gap between 
                  cutting-edge pharmaceutical research and accessible healthcare solutions. 
                  What started as a small research initiative has grown into a globally 
                  recognized pharmaceutical company.
                </p>
                <p className="text-lg">
                  Today, we operate state-of-the-art manufacturing facilities across multiple 
                  continents, employ over 5,000 dedicated professionals, and serve healthcare 
                  providers in more than 50 countries worldwide.
                </p>
                <p className="text-lg">
                  Our commitment to innovation, quality, and patient care drives everything 
                  we do, from initial research and development to final product delivery 
                  to healthcare facilities around the globe.
                </p>
              </div>
              <Button asChild size="lg" className="bg-gradient-primary">
                <Link to="/contact">Partner with Us</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">5,000+</CardTitle>
                  <CardDescription>Global Employees</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                    <Globe2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">50+</CardTitle>
                  <CardDescription>Countries Served</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-success" />
                  </div>
                  <CardTitle className="text-2xl">100+</CardTitle>
                  <CardDescription>Products Developed</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-2">
                    <Microscope className="h-6 w-6 text-warning" />
                  </div>
                  <CardTitle className="text-2xl">15+</CardTitle>
                  <CardDescription>Research Centers</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the world's most trusted pharmaceutical company, setting new standards 
                  for innovation, quality, and patient care while making essential medicines 
                  accessible to everyone, everywhere.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To discover, develop, and deliver innovative pharmaceutical solutions that 
                  improve patient outcomes, enhance quality of life, and contribute to 
                  healthier communities worldwide through scientific excellence and ethical practices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and shape our culture every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our commitment to advancing global healthcare.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  <Card className="flex-1 hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Research Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our state-of-the-art laboratories and manufacturing facilities enable breakthrough pharmaceutical innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden hover:shadow-medium transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={labResearch} 
                  alt="Advanced Research Laboratory"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  Advanced Research Centers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Our 15 research centers worldwide are equipped with cutting-edge technology for drug discovery, 
                  development, and testing, supporting our commitment to pharmaceutical excellence.
                </CardDescription>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>15 Global Research Centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>500+ Research Scientists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Advanced AI Drug Discovery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Biosafety Level 3 Labs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-medium transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={labManufacturing} 
                  alt="GMP Manufacturing Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  Manufacturing Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Our GMP-certified manufacturing facilities across multiple continents ensure consistent quality 
                  and global supply chain reliability for all our pharmaceutical products.
                </CardDescription>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>8 Manufacturing Sites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>ISO 13485 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>24/7 Quality Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Zero Waste Initiative</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$2.5B</div>
                    <p className="text-sm text-muted-foreground">Annual R&D Investment</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">200+</div>
                    <p className="text-sm text-muted-foreground">Patents Registered</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">98%</div>
                    <p className="text-sm text-muted-foreground">Quality Compliance Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warning mb-2">15</div>
                    <p className="text-sm text-muted-foreground">Awards This Year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving our mission to transform global healthcare through pharmaceutical innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <UserCheck className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Dr. Sarah Chen</CardTitle>
                        <CardDescription>Chief Scientific Officer</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Leading our global research initiatives with over 20 years of experience in pharmaceutical development and regulatory sciences.
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>• PhD in Molecular Biology, Harvard</div>
                      <div>• Former FDA Advisory Committee Member</div>
                      <div>• 50+ Peer-reviewed Publications</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <Microscope className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Dr. Michael Rodriguez</CardTitle>
                        <CardDescription>Head of Research & Development</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Spearheading breakthrough research in molecular therapeutics and personalized medicine approaches.
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>• PhD in Biochemistry, MIT</div>
                      <div>• 15 Patents in Drug Discovery</div>
                      <div>• Expert in AI-driven Drug Design</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                        <Award className="h-8 w-8 text-success" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Lisa Thompson</CardTitle>
                        <CardDescription>VP Quality Assurance</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ensuring world-class quality standards across all operations and maintaining regulatory compliance globally.
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>• MS in Quality Management</div>
                      <div>• 18 Years in Pharmaceutical QA</div>
                      <div>• Six Sigma Black Belt</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center">
                        <Globe2 className="h-8 w-8 text-warning" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">James Park</CardTitle>
                        <CardDescription>Global Operations Director</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Managing international operations and supply chain optimization across our global network of facilities.
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>• MBA in International Business</div>
                      <div>• 22 Years in Global Operations</div>
                      <div>• Expert in Supply Chain Strategy</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="overflow-hidden sticky top-8">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={teamLeadership} 
                    alt="Healup Pharma Leadership Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Leadership Excellence</h3>
                    <p className="text-muted-foreground text-sm">
                      Our executive team combines over 75 years of pharmaceutical industry experience, 
                      driving innovation and maintaining the highest standards of excellence in everything we do.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-warning fill-current" />
                        <span className="text-muted-foreground">75+ Years Combined Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">Industry Leadership Awards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe2 className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Global Healthcare Impact</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;