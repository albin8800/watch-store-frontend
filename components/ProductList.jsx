import { products } from "@/dummy/products";
import Link from "next/link";

export default function ProductList() {
    return (
      <div className="flex flex-col md:mx-20 mx-4 md:gap-12 gap-6">
        <div className="flex gap-6 items-center">
          <h1 className="md:text-[24px] text-[16px] text-black ">
            Popular Products
          </h1>
          <hr className="flex-1 border border-black" />
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-11">
            {products.map((product) => (
                <Link
                 key={product.id}
                 href="/watch"
                >
                  <div className="flex flex-col">
                <img src={product.image} alt="" />
                <div className="flex justify-between mt-4">
                    <p className="md:text-[14px] text-[10px] text-[#827C6F]">{product.category}</p>
                    <p className="md:text-[14px] text-[10px] text-[#827C6F]">{product.brand}</p>
                </div>

                <p className="text-[12px] md:text-[14px] text-justify md:mt-4 mt-2">
                    {product.name}
                </p>

                <div className="flex gap-2 mt-4 items-end">
                    <p className="text-[16px] md:text-[20px] font-medium">₹ {product.price}</p>
                    <p className="text-[12px] text-[#827C6F] line-through">₹ {product.mrp}</p>
                </div>

                <div className="flex gap-4 md:mt-6 mt-4">
                    <button className="flex px-4 py-3.5 text-[12px] md:text-[14px] border items-center md:gap-15 gap-1">
                        View Product Details
                        <img className="md:h-5 md:w-5 h-4.5 w-4.5" src="/icons/arrowright.svg" alt="arrow" />
                    </button>
                    <button className="hidden md:flex p-3.5 border items-center ">
                        <img className="h-5 w-5" src="/icons/wishlist-add.svg" alt="" />
                    </button>
                </div>
            </div>
                </Link>
                
            ))}
            
        </div>

      </div>
    );
}