
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

export interface Review {
  id: number;
  customerName: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

// Mock products data
export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Cotton Shirt",
    category: "Shirts",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    isFeatured: true,
    colors: ["White", "Black", "Beige"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Tailored Wool Blazer",
    category: "Outerwear",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    isFeatured: true,
    colors: ["Navy", "Black", "Grey"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "High-Waisted Trousers",
    category: "Bottoms",
    price: 129.99,
    salePrice: 99.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1000&auto=format&fit=crop",
    colors: ["Black", "Beige", "Brown"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    name: "Classic Leather Boots",
    category: "Footwear",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop",
    isFeatured: true,
    colors: ["Black", "Brown"],
    sizes: ["36", "37", "38", "39", "40", "41"]
  },
  {
    id: 5,
    name: "Cashmere Pullover",
    category: "Knitwear",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    colors: ["Cream", "Grey", "Black"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 6,
    name: "Silk Scarf",
    category: "Accessories",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1000&auto=format&fit=crop",
    colors: ["Multi"],
    sizes: ["One Size"]
  },
  {
    id: 7,
    name: "Statement Earrings",
    category: "Accessories",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    colors: ["Gold", "Silver"],
    sizes: ["One Size"]
  },
  {
    id: 8,
    name: "Structured Handbag",
    category: "Accessories",
    price: 159.99,
    salePrice: 129.99,
    image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?q=80&w=1000&auto=format&fit=crop",
    isFeatured: true,
    colors: ["Black", "Tan", "Red"],
    sizes: ["One Size"]
  }
];

// Mock categories data
export const categories: Category[] = [
  {
    id: 1,
    name: "Women's Clothing",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
    productCount: 124
  },
  {
    id: 2,
    name: "Men's Clothing",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1000&auto=format&fit=crop",
    productCount: 98
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop",
    productCount: 56
  },
  {
    id: 4,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    productCount: 42
  }
];

// Mock reviews data
export const reviews: Review[] = [
  {
    id: 1,
    customerName: "Sarah Johnson",
    rating: 5,
    text: "I'm absolutely in love with the quality of these clothes! The attention to detail is incredible and the fit is perfect.",
    date: "2025-04-12"
  },
  {
    id: 2,
    customerName: "Michael Chen",
    rating: 4,
    text: "Great selection and premium quality. Shipping was faster than expected and everything arrived in perfect condition.",
    date: "2025-04-05"
  },
  {
    id: 3,
    customerName: "Emma Williams",
    rating: 5,
    text: "The Minimalist Cotton Shirt is now a staple in my wardrobe. So versatile and the fabric is luxurious.",
    date: "2025-03-28"
  }
];

// Mock team members data
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alexander Wright",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Olivia Chen",
    position: "Head of Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    position: "Product Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  }
];

// Mock store information
export const storeInfo = {
  name: "VOGUE",
  address: "123 Fashion Avenue, New York, NY 10001",
  phone: "+1 (212) 555-7890",
  email: "contact@voguestore.com",
  hours: "Monday-Saturday: 10am-8pm, Sunday: 11am-6pm",
  socialLinks: {
    instagram: "https://instagram.com/voguestore",
    facebook: "https://facebook.com/voguestore",
    twitter: "https://twitter.com/voguestore",
    pinterest: "https://pinterest.com/voguestore"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215055883236!2d-73.9932505846361!3d40.75903647932706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x4170c937854de613!2sEmpire+State+Building!5e0!3m2!1sen!2sus!4v1565731105203!5m2!1sen!2sus"
};
