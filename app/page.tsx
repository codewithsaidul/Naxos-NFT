import HeroSection from "./_components/HeroSection/HeroSection";
import LiveAction from "@/app/_components/LiveAuction/LiveAction";
import PopularCollection from "@/app/_components/PopularCollectionSection/PopularCollection";
import TopCollection from "@/app/_components/TopCollectionSection/TopCollection";
import SubscribeSection from "@/app/_components/SubscribeSection/SubscribeSection";
import CompaniesSection from "@/app/_components/CompaniesSection/CompaniesSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pt-10 lg:gap-[145px] lg:py-[11px]">
      <HeroSection />
      <LiveAction />
      <PopularCollection />
      <TopCollection />
      <SubscribeSection />
      <CompaniesSection />
    </div>
  );
}
