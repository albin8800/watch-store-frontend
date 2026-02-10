"use client";

import { categories } from "@/dummy/categories";
import api from "@/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchCategories = async() => {
      try {
        const res = await api.get("/api/categories");
        setCategories(res.data)
      } catch (error) {
        console.error("Error Fetching Categories", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if(loading) return <p>Loading...</p>
  
    return (
      <div className="flex flex-col md:mx-20 mx-4 md:gap-12 gap-6">
        <div className="flex gap-6 items-center">
          <h1 className="md:text-[24px] text-[16px] text-black ">
            Shop By Category
          </h1>
          <hr className="flex-1 border border-black" />
        </div>

        <div className="grid md:grid-cols-6 grid-cols-4 gap-x-4 gap-y-6 md:gap-y-8">
          {categories.map((category) => (
            <Link
            key={category._id}
            href="/watches"
            >
            <div className="flex flex-col items-center md:gap-4 gap-2">
              <div className="flex bg-[#EAE7E0] md:p-2 p-6 items-center justify-center rounded-lg">
                <img className="h-[64px] w-[64px] md:h-[162px] md:w-[162px]" src={category.image} alt="" />
              </div>
              <p className="md:text-[16px] text-[10px] text-center">
                {category.name}
              </p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    );
}