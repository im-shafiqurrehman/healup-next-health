import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { products } from '@/utils/data/products';
import { ArrowRight, Award, Globe, Users, CheckCircle, Pill, Microscope, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

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
          <div className="absolute inset-0 bg-primary/20" />
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