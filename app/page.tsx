import Benefits from "@/components/home/Benefits";
import HeroSection from "@/components/home/HeroSection";
import MarketingList from "@/components/home/MarketingList";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <MarketingList />
            <Benefits />

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
