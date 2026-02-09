"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [isListening, setIsListening] = useState(false);


    const handleMicClick = () => {
        if(!("webkitSpeechRecognition" in window)) {
            alert("Voice Search is not supported in this browser");
            return;
        }

        const recognition = new (window).webkitSpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        setIsListening(true);

    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchText(transcript);
    };

    recognition.onend = () => {
        setIsListening(false);
    }
    recognition.start()
    }


  return (
    <div className="md:mx-20 mx-4 md:h-30 h-20 bg-[#FFFFFF] flex items-center justify-between">
     <Link href="/">
        <img className="md:h-30 h-20" src="/images/logo.svg" alt="" />
     </Link>

      <div className="flex items-center md:gap-6 gap-4">
        <div className="hidden md:flex pl-4 pr-2.5 py-3.25 border-b border-[#827C6F]">
          <div className="flex items-center gap-8">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for Watches by Names, Brands, Categories... "
              type="text"
              className="text-[14px] w-[395px] outline-0 text-[#827C6F]"
            />

            <div
              className={`p-1.5 rounded-full cursor-pointer ${
                isListening ? "bg-[#F0ECE4]" : "hover:bg-[#F0ECE4]"
              }`}
              onClick={handleMicClick}
            >
              <img className="h-5 w-5" src="/icons/mic.svg" alt="mic" />
            </div>
          </div>
        </div>

        {!isMobileSearchOpen && (
          <img
            onClick={() => setIsMobileSearchOpen(true)}
            className="md:hidden flex"
            src="/icons/search.svg"
            alt=""
          />
        )}

        {!isMobileSearchOpen && (
          <div className="relative group flex gap-0.5 cursor-pointer">
            <img className="w-6 h-6" src="/icons/account.svg" alt="" />
            <div className="hidden md:flex gap-0.5 items-end">
              <p className="text-[16px] text-[#827C6F]">Login</p>
              <img src="/icons/arrow-down.svg" alt="" />
            </div>
            <div
              className="absolute top-15 right-0 mt-3 w-[302px] bg-white shadow-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 z-50"
            >
              <div className="flex flex-col px-2 py-2 gap-2">
                <div className="flex gap-1 px-4 py-2 hover:bg-[#F0ECE4]">
                    <img src="/icons/login.svg" alt="" />
                    <p className="text-[14px] text-[#827C6F]">Login</p>
                </div>
                
                <div className="flex gap-1 px-4 py-2 hover:bg-[#F0ECE4]">
                    <img src="/icons/register.svg" alt="" />
                    <p className="text-[14px] text-[#827C6F]">Register</p>
                </div>

                <div className="flex gap-1 px-4 py-2 hover:bg-[#F0ECE4]">
                    <img src="/icons/wishlist.svg" alt="" />
                    <p className="text-[14px] text-[#827C6F]">Wishlist</p>
                </div>
                
                <div className="flex gap-1 px-4 py-2 hover:bg-[#F0ECE4]">
                    <img src="/icons/account-drop.svg" alt="" />
                    <p className="text-[14px] text-[#827C6F]">Account</p>
                </div>
                
              </div>
            </div>
          </div>
        )}

        {!isMobileSearchOpen && (
          <div className="flex gap-0.5 cursor-pointer">
            <img className="w-6 h-6" src="/icons/cart.svg" alt="" />
            <div className="hidden md:flex gap-0.5">
              <p className="text-[16px] text-[#827C6F]">Cart</p>
            </div>
          </div>
        )}
      </div>

      {isMobileSearchOpen && (
        <div className="md:hidden mx-4 border-b border-[#827C6F]">
          <div className="flex items-center gap-4 py-3">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
              placeholder="Search for Watches by Names, Brands, Categories..."
              type="text"
              className="text-[14px] w-full outline-0 text-[#827C6F]"
            />

            <div
              className={`p-1.5 rounded-full cursor-pointer ${
                isListening ? "bg-[#F0ECE4]" : "hover:bg-[#F0ECE4]"
              }`}
              onClick={handleMicClick}
            >
              <img className="h-6 w-6" src="/icons/mic.svg" alt="search" />
            </div>

            <button
              onClick={() => setIsMobileSearchOpen(false)}
              className="text-[#827C6F] text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
