import CommonSection from "@/components/common/CommonSection";
import Banner from "@/components/home/Banner";
import Boost from "@/components/home/Boost";
import Gallery from "@/components/home/Gallery";
import HeroThumbnailSlider from "@/components/home/HeroThumbnailSlider";

export default function Home() {
    return (
        <div>
            <Banner />
            <HeroThumbnailSlider />
            {/* <Showcase /> */}
            <Boost />
            <CommonSection formation={false} />
            <CommonSection formation={true} />
            <CommonSection formation={false} />
            <Gallery />
        </div>
    );
}
