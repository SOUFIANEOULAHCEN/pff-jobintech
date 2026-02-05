"use client";
import { useRef } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import gsap from "gsap/all";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { addToCart } from "@/lib/cart";
import { products } from "@/data/product-data";
import { ProductCard } from "../products/ProductCard";

// const products = [
//   {
//     id: 1,
//     image:
//       "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66d3be9f90c223e4e51f6503_63a11b2b0c5c8e19f470a54f_dashboard-mockup-01.webp",
//     title: "UI Design System",
//     creator: "Sarah Chen",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
//     price: 49.99,
//     reviews: 4.8,
//   },
//   {
//     id: 2,
//     image:
//       "https://s3-alpha.figma.com/hub/file/2340595704/edf6edcb-83e6-4b32-b6da-0fb71839e9bc-cover.png",
//     title: "Figma Icon Pack",
//     creator: "Mike Johnson",
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     price: 29.99,
//     reviews: 4.9,
//   },
//   {
//     id: 3,
//     image:
//       "https://www.spaceotechnologies.com/wp-content/uploads/2021/11/types-of-web-development.png",
//     title: "Web Development Guide",
//     creator: "Emma Rodriguez",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//     price: 39.99,
//     reviews: 4.7,
//   },
//   {
//     id: 4,
//     image: "https://darvideo.tv/wp-content/uploads/Template-animation.jpg",
//     title: "Animation Templates",
//     creator: "Alex Park",
//     avatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
//     price: 59.99,
//     reviews: 4.6,
//   },
//   {
//     id: 5,
//     image:
//       "https://s3-alpha.figma.com/hub/file/3421683430/df4689b5-d590-49f6-9a7e-37462f655262-cover.png",
//     title: "Mobile App Kit",
//     creator: "Jessica Lee",
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     price: 44.99,
//     reviews: 4.8,
//   },
//   {
//     id: 6,
//     image:
//       "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/07f44456-d44f-4cfa-9e25-f97ed0a369b6/typography-251.jpg",
//     title: "Typography Guide",
//     creator: "David Brown",
//     avatar:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
//     price: 34.99,
//     reviews: 4.9,
//   },
//   {
//     id: 7,
//     image:
//       "https://cdn.dribbble.com/userupload/41945667/file/original-7ed4471a180bfcf426167f2dead1eeb4.jpg?format=webp&resize=400x300&vertical=center",
//     title: "Brand Identity Bundle",
//     creator: "Lisa Wang",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//     price: 79.99,
//     reviews: 4.7,
//   },
//   {
//     id: 8,
//     image:
//       "https://www.creative-tim.com/blog/content/images/wordpress/2020/08/css-tricks-snippets-1024x557.jpg",
//     title: "Code Snippets Collection",
//     creator: "Tom Martinez",
//     avatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
//     price: 24.99,
//     reviews: 4.5,
//   },
// ];

function TopPics() {
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="w-full h-[200vh] lg:h-auto flex items-center justify-center font-cal-sans py-2">
      <div className="w-[80%] h-[95%] flex flex-col items-center p-3 gap-6">
        <div className="w-65 h-12 border-2 border-[#8CFF12] rounded-full flex p-1">
          <h1 className="w-[90%] flex items-center justify-center bg-gray-300/30 rounded-full">
            Top Picks Items
          </h1>
          <h2 className="w-[20%] h-full flex items-center justify-center">
            03
          </h2>
        </div>
        <div className="flex flex-col w-full lg:w-[50%] justify-center items-center gap-3">
          <h1 className="text-4xl lg:text-5xl">Latest Products</h1>
          <p className="font-light text-center text-gray-500 text-xs lg:text-lg">
            Weekly picks from the world&apos;s best digital creators. Find your
            next essential download, from design assets to business-boosting
            guides.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
          {products
            .slice(0, isMobile ? 3 : 8)
            .map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
        </div>
        <div className="w-full py-5 flex items-center justify-center">
          <Link
            className="w-fit flex gap-5 items-center px-4 py-2 border-2 border-[#8CFF12]"
            href={"/products"}
          >
            See More <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopPics;
