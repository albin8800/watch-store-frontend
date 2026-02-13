import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";


export default function Home() {
  return (
    <div className="bg-[#E1DDD4] flex flex-col mt-20 md:mt-30 md:gap-18 gap-8">
      <img className="w-full" src="/images/banner.svg" alt="banner" />
      <Categories />
      <ProductList />
    </div>
  );
}
