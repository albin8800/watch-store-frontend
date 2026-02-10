"use client";

import { categories } from "@/dummy/categories";
import Link from "next/link";

export default function Categories() {
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
            key={category.name}
            href="/watches"
            >
            <div className="flex flex-col items-center md:gap-4 gap-2">
              <div className="flex bg-[#EAE7E0] md:p-2 p-6 items-center justify-center rounded-lg">
                <img src={category.image} alt="" />
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