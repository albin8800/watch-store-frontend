import Categories from "@/components/Categories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#E1DDD4] flex flex-col h-screen mt-30 md:gap-18 gap-8">
      <img className="w-full" src="/images/banner.svg" alt="banner" />
      <Categories />
    </div>
  );
}
