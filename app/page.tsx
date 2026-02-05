import AnimatedBar from "@/components/Home/AnimatedBar";
import FeauturedCreators from "@/components/Home/FeauturedCreators";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import TopPics from "@/components/Home/TopPics";
import WhatAreWe from "@/components/Home/WhatAreWe";
import WhatWeDo from "@/components/Home/WhatWeDo";

export default function Page() {
return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
        <HeroSection />
        <AnimatedBar />
        <WhatWeDo />
        <TopPics />
        <WhatAreWe />
        <FeauturedCreators />
        <Footer />
    </div>
);
}
