"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    alt: "User 1",
    fallback: "U1",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    alt: "User 2",
    fallback: "U2",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    alt: "User 3",
    fallback: "U3",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    alt: "User 4",
    fallback: "U4",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    alt: "User 5",
    fallback: "U5",
  },
];

const HeroSection = () => {
  return (
    <section className=" py-24 px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-foreground mb-10 mt-12 leading-tight">
          Sell and Discover High-Quality Digital Products
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          A platform for creators to share their work and for you to find your
          next inspiration. No coding required.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-base font-medium shadow-2xl shadow-primary/30">
            Explore Products
          </Button>
          <Button
            // variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 rounded-full text-base font-medium bg-transparent"
          >
            Start Selling
          </Button>
        </div>

        <div className="*:data-[slot=avatar]:ring-background flex justify-center mb-4 items-center -space-x-2 *:data-[slot=avatar]:ring-2">
          {avatars.map((avatar, index) => (
            <Avatar key={index}>
              <AvatarImage src={avatar.src} alt={avatar.alt} />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Trusted by 50,000+ creators
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
