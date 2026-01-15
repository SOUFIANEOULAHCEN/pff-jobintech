"use client"
import type React from "react"
import { Star } from "lucide-react"

interface ProductCardProps {
  title: string
  creator: string
  creatorImage?: string
  price: number
  rating: number
  reviews: number
  image?: string
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  creator, 
  creatorImage, 
  price, 
  rating, 
  reviews, 
  image 
}) => {
  return (
    <div className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full shadow-sm">
      {/* Main Product Image */}
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="text-4xl">X</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-foreground mb-3 line-clamp-1">
          {title}
        </h3>
        
        {/* Creator Identity */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-7 h-7 rounded-full border border-border overflow-hidden">
            <img 
              src={creatorImage || `https://ui-avatars.com/api/?name=${creator}`} 
              alt={creator} 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            by <span className="text-muted-foreground/80">{creator}</span>
          </p>
        </div>

        {/* Price and Rating Row */}
        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-2xl text-foreground">${price}</span>
          
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-foreground">{rating ? rating.toFixed(1) : "0.0"}</span>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard