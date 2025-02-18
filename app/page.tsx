import Benefits from "@/components/home/Benefits";
import HeroSection from "@/components/home/HeroSection";
import MarketingList from "@/components/home/MarketingList";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <MarketingList />
            <Benefits />
            <Pricing />

            {/* <AppListScollSlider /> */}
            {/* <HeroThumbnailSlider /> */}
            {/* <Showcase /> */}

            {/* <Boost /> */}
            {/* <Reviews /> */}
            {/* <CommonSection formation={false} />
            <CommonSection formation={true} />
            <CommonSection formation={false} />
            <Gallery /> */}
        </div>
    );
}
