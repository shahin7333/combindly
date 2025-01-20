import CommonSection from "@/components/common/CommonSection";
import { Reviews } from "@/components/common/Reviews";
import Banner from "@/components/home/Banner";
import Boost from "@/components/home/Boost";
import Gallery from "@/components/home/Gallery";

export default function Home() {
    return (
        <div>
            <Banner />
            {/* <AppListScollSlider /> */}
            {/* <HeroThumbnailSlider /> */}
            {/* <Showcase /> */}
            <Boost />
            <Reviews />
            <CommonSection formation={false} />
            <CommonSection formation={true} />
            <CommonSection formation={false} />
            <Gallery />
        </div>
    );
}
