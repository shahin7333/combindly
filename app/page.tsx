import CommonSection from "@/components/common/CommonSection";
import AppListScollSlider from "@/components/home/AppListScollSlider";
import Banner from "@/components/home/banner/Banner";
import Boost from "@/components/home/Boost";
import Gallery from "@/components/home/Gallery";

export default function Home() {
    return (
        <div>
            <Banner />
            <AppListScollSlider />
            {/* <HeroThumbnailSlider /> */}
            {/* <Showcase /> */}
            <Boost />
            <CommonSection formation={false} />
            <CommonSection formation={true} />
            <CommonSection formation={false} />
            <Gallery />
        </div>
    );
}
