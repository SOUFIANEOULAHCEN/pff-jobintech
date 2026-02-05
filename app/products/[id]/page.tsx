"use client"
import Navbar from "@/components/Home/Navbar";
import { Breadcrumb } from "@/components/products/product/Breadcrumb";
import { MobileStickyBar } from "@/components/products/product/MobileStickyBar";
import { ProductDetails } from "@/components/products/product/ProductDetails";
import { ProductGallery } from "@/components/products/product/ProductGallery";
import { PurchasePanel } from "@/components/products/product/PurchasePanel";
import { RelatedProducts } from "@/components/products/product/RelatedProducts";
import { ReviewsSection } from "@/components/products/product/ReviewsSection";
import { getProductById, getRelatedProducts, reviews } from "@/data/product-data";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const reviewsRef = useRef<HTMLDivElement>(null);
  const navigate = useRouter();
  const productId = Number(id);
  const product = getProductById(productId);

  if (!product) {
    return navigate.push("/1");
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Combine cover image with other images for gallery
  const galleryImages = [product.coverImage, ...product.images];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 flex flex-col items-center">
        <Navbar />
        <div className="w-full h-20" />
      <div className="container max-w-6xl py-6 px-4 md:py-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            category={product.category}
            productTitle={product.title}
          />
        </div>

        {/* Hero Section */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Column - Gallery */}
          <div>
            <ProductGallery
              images={galleryImages}
              productTitle={product.title}
            />
          </div>

          {/* Right Column - Purchase Panel */}
          <div>
            <PurchasePanel
              product={product}
              onScrollToReviews={scrollToReviews}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-12 md:mt-16">
          <ProductDetails product={product} />
        </div>

        {/* Reviews */}
        <div className="mt-12 md:mt-16">
          <ReviewsSection
            ref={reviewsRef}
            reviews={reviews}
            averageRating={4.5}
            totalReviews={reviews.length}
          />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 md:mt-16">
            <RelatedProducts
              products={relatedProducts}
              currentCategory={product.category}
            />
          </div>
        )}
      </div>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar product={product} />
    </div>
  );
};

export default ProductPage;
