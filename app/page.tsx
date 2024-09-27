import CommonSection from "@/components/common/CommonSection";
import Banner from "@/components/home/Banner";
import Boost from "@/components/home/Boost";
import Showcase from "@/components/home/Showcase";

export default function Home() {
  return (
    <div>
      <Banner />
      <Showcase />
      <Boost />
      <CommonSection />
      <CommonSection />
      <CommonSection />
    </div>
  );
}
