import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Product } from '@/utils/data/products';
import tabletsImg from '@/assets/tablets.jpg';
import syrupsImg from '@/assets/syrups.jpg';
import supplementsImg from '@/assets/supplements.jpg';

interface ProductCardProps {
  product: Product;
}

const imageMap = {
  tablets: tabletsImg,
  syrups: syrupsImg,
  supplements: supplementsImg
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageMap[product.image as keyof typeof imageMap]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="capitalize">
            {product.category}
          </Badge>
          {product.price && (
            <span className="text-lg font-semibold text-primary">{product.price}</span>
          )}
        </div>
        <CardTitle className="text-lg">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {product.description}
        </CardDescription>
        <Button className="w-full bg-gradient-primary hover:opacity-90">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;