"use client";

import api from "@/lib/axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function ProductsPage({ searchParams }) {

  const params = use(searchParams);
  const categoryId = params?.category || null;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = categoryId ? `/api/products?category=${categoryId}&page=${currentPage}&limit=8` : "/api/products?page=${currentPage}&limit=8";

        const res = await api.get(url);
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages)

      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categoryId, currentPage])

  const getPagination = () => {
    const pages = [];

    if(totalPages <= 7) {
      return Array.from({ length: totalPages}, (_, i) => i + 1);
    }
    if(currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages]
    }

    if(currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      "...",
      currentPage -1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ]
  } 

  if(loading) return <p className="md:mt-48 mt-32 flex flex-col md:mx-20 mx-4 text-center w-full">Loading...</p>
  return (

    <div className="md:mt-48 mt-32 flex flex-col md:mx-20 mx-4 md:gap-12 gap-6 ">
      <div className="flex gap-6 items-center">
        {products.length > 0 && products[0].categoryId && (
          <h1 className="md:text-[24px] text-[16px] text-black">
          {products[0].categoryId.name}
        </h1>
        )}
        
        <hr className="flex-1 border border-black" />
      </div>

      <div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-11">
        {products.map((product) => (
          <div key={product._id} href={`/watch/${product._id}`}>
            <div className="flex flex-col">
              <img
                className="w-[177px] h-[177px] md:w-[302px] md:h-[302px]"
                src={product.image}
                alt=""
              />
              <div className="flex justify-between mt-4">
                {product.categoryId && (
                  <p className="md:text-[14px] text-[10px] text-[#827C6F]">
                    {product.categoryId.name}
                  </p>
                )}

                <p className="md:text-[14px] text-[10px] text-[#827C6F]">
                  {product.brand}
                </p>
              </div>

              <p className="text-[12px] md:text-[14px] text-justify md:mt-4 mt-2">
                {product.name}
              </p>

              <div className="flex gap-2 mt-4 items-end">
                <p className="text-[16px] md:text-[20px] font-medium">
                  ₹ {product.price}
                </p>
                <p className="text-[12px] text-[#827C6F] line-through">
                  ₹ {product.mrp}
                </p>
              </div>

              <div className="flex gap-4 md:mt-6 mt-4">
                <button className="flex px-4 py-3.5 text-[12px] md:text-[14px] border items-center md:gap-15 gap-1">
                  View Product Details
                  <img
                    className="md:h-5 md:w-5 h-4.5 w-4.5"
                    src="/icons/arrowright.svg"
                    alt="arrow"
                  />
                </button>
                <button className="hidden md:flex p-3.5 border items-center ">
                  <img
                    className="h-5 w-5"
                    src="/icons/wishlist-add.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

        <div className="flex items-center justify-center gap-1 md:gap-4 md:mt-10 mt:8">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev -1, 1))}
          disabled={currentPage === 1}
          className="flex px-[21px] py-[13px] hover:bg-[#F0ECE4] rounded-md items-center justify-center disabled:opacity-50">
            <img className="w-[22px] h-[22px]" src="/icons/arrow-left.svg" alt="" />
          </button>

          {getPagination().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-[21px] py-[13px]">
              ...
            </span>
          ) : (
            <button key={index}
            onClick={() => setCurrentPage(page)}
            className={`px-[21px] py-[13px] rounded-md ${
              currentPage === page ? "bg-[#F0ECE4] text-[#6F6859] text-[16px]" : "hover:bg-[#F0ECE4] text-[#827C6F] text-[16px]"
            }`}
            >
              {page}
            </button>
          )
          )}

          <button onClick={() => setCurrentPage((prev) => Math.max(prev -1, 1))}
          disabled={currentPage === 1}
          className="flex px-[21px] py-[13px] hover:bg-[#F0ECE4] rounded-md items-center justify-center disabled:opacity-50">
            <img className="w-[22px] h-[22px]" src="/icons/arrow-right.svg" alt="" />
          </button>
        </div>

    </div>
  );
}
