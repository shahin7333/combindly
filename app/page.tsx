import CommonSection from "@/components/common/CommonSection";
import Boost from "@/components/home/Boost";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
    return (
        <div>
            <HeroSection />

            {/* <AppListScollSlider /> */}
            {/* <HeroThumbnailSlider /> */}
            {/* <Showcase /> */}
            <Boost />
            {/* <Reviews /> */}
            <CommonSection formation={false} />
            <CommonSection formation={true} />
            <CommonSection formation={false} />
            <Gallery />
        </div>
    );
}
