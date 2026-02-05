export interface InitialDataProps {
  title?: string;
  category?: string;
  tags?: string[];
  description?: string;
  coverImage?: string;
  imgs?: { url: string; name: string }[];
  pricingModel?: string;
  discount?: number;
  finalPrice?: number;
  basePrice?: number;
}


export interface ProductCart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}


export interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export interface CheckoutFormData {
  email: string;
  fullName: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  promoCode: string;
}
