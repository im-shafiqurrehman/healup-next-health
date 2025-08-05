import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products, categories, Product } from '@/utils/data/products';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product: Product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-white/20 text-white border-white/30">Our Products</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Quality Pharmaceutical Solutions
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality medicines and healthcare products, 
              developed with cutting-edge research and manufactured to international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search and Filter Controls */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value ? "bg-primary" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
              {selectedCategory !== 'all' && (
                <span> in <span className="font-semibold text-foreground capitalize">{selectedCategory}</span></span>
              )}
              {searchTerm && (
                <span> matching "<span className="font-semibold text-foreground">{searchTerm}</span>"</span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in developing high-quality pharmaceutical products across multiple therapeutic areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg bg-background hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold">Tablets</h3>
              <p className="text-muted-foreground">
                Comprehensive range of oral solid dosage forms including immediate and extended-release formulations.
              </p>
              <Badge variant="secondary">{products.filter(p => p.category === 'tablets').length} Products</Badge>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg bg-background hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-12 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">Syrups</h3>
              <p className="text-muted-foreground">
                Liquid formulations designed for easy administration and optimal bioavailability across all age groups.
              </p>
              <Badge variant="secondary">{products.filter(p => p.category === 'syrups').length} Products</Badge>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg bg-background hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-10 bg-success rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold">Supplements</h3>
              <p className="text-muted-foreground">
                Nutritional supplements and vitamins to support overall health and wellness with scientifically-backed formulations.
              </p>
              <Badge variant="secondary">{products.filter(p => p.category === 'supplements').length} Products</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;