"use client"
import ProductCard from "./ProductCard"

const TrendingSection = () => {
  const trendingProducts = [
    {
      id: 1,
      title: "Abstract 3D Pack Vol. 2",
      creator: "Sarah Design",
      creatorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      price: 49,
      rating: 4.9,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Minimalist Productivity Notion",
      creator: "James Work",
      creatorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      price: 29,
      rating: 4.8,
      reviews: 85,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Ultimate UI Kit for Mobile",
      creator: "Design Master",
      creatorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      price: 89,
      rating: 5.0,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-20 lg:px-36">
      <h2 className="text-3xl font-bold text-foreground mb-10">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default TrendingSection