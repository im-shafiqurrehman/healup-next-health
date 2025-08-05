export interface Product {
  id: string;
  name: string;
  category: 'tablets' | 'syrups' | 'supplements';
  image: string;
  description: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Healup Pain Relief',
    category: 'tablets',
    image: 'tablets',
    description: 'Fast-acting pain relief tablets for effective treatment',
    price: '$24.99'
  },
  {
    id: '2',
    name: 'Healup Cough Syrup',
    category: 'syrups',
    image: 'syrups',
    description: 'Natural cough relief syrup for respiratory wellness',
    price: '$18.99'
  },
  {
    id: '3',
    name: 'Healup Multivitamin',
    category: 'supplements',
    image: 'supplements',
    description: 'Complete daily multivitamin for optimal health',
    price: '$32.99'
  },
  {
    id: '4',
    name: 'Healup Anti-Inflammatory',
    category: 'tablets',
    image: 'tablets',
    description: 'Reduce inflammation and support joint health',
    price: '$28.99'
  },
  {
    id: '5',
    name: 'Healup Digestive Aid',
    category: 'syrups',
    image: 'syrups',
    description: 'Gentle digestive support for better gut health',
    price: '$22.99'
  },
  {
    id: '6',
    name: 'Healup Omega-3',
    category: 'supplements',
    image: 'supplements',
    description: 'High-quality omega-3 fatty acids for heart health',
    price: '$35.99'
  },
  {
    id: '7',
    name: 'Healup Allergy Relief',
    category: 'tablets',
    image: 'tablets',
    description: 'Non-drowsy allergy relief for daily comfort',
    price: '$26.99'
  },
  {
    id: '8',
    name: 'Healup Sleep Support',
    category: 'supplements',
    image: 'supplements',
    description: 'Natural sleep aid for restful nights',
    price: '$29.99'
  }
];

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'tablets', label: 'Tablets' },
  { value: 'syrups', label: 'Syrups' },
  { value: 'supplements', label: 'Supplements' }
];