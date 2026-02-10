"use client";

export default function Footer() {
    return(
        <div className="bg-[#191312] flex flex-col w-full pt-10 md:pt-18 md:mt-18 mt-7">
            <div className="flex flex-col gap-6 md:grid md:grid-cols-4 w-full px-4 md:px-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[16px] text-[#E3BE6D]">About</h1>
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] text-[#A1A1A1]">About Us</p>
                        <p className="text-[14px] text-[#A1A1A1]">Corporate Information</p>
                        <p className="text-[14px] text-[#A1A1A1]">Press</p>
                        <p className="text-[14px] text-[#A1A1A1]">Stories</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-[16px] text-[#E3BE6D]">Help</h1>
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] text-[#A1A1A1]">Payment</p>
                        <p className="text-[14px] text-[#A1A1A1]">Shipping</p>
                        <p className="text-[14px] text-[#A1A1A1]">Cancellations</p>
                        <p className="text-[14px] text-[#A1A1A1]">FAQs</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-[16px] text-[#E3BE6D]">Contact Us</h1>
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] text-[#A1A1A1]">Timeless Luxe Private limited. Kottarakara, Kollam dist, Kerala,691520</p>
                        <p className="text-[14px] text-[#A1A1A1]">Telephone : +91 4637783838</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-[16px] text-[#E3BE6D]">Contact Us</h1>
                    <div className="flex gap-2">
                        <img className="h-6 w-6" src="/icons/x.svg" alt="" />
                        <img className="h-6 w-6" src="/icons/facebook.svg" alt="" />
                        <img className="h-6 w-6" src="/icons/youtube.svg" alt="" />
                        <img className="h-6 w-6" src="/icons/instagram.svg" alt="" />
                    </div>
                </div>
            </div>
            <hr className="mt-6 flex-1 border-0.5 border-[#FFFFFF]"/>

            <div className="md:flex mt-6 gap-4 px-4 md:px-20 justify-between md:flex-row flex flex-col items-center mb-10">
                <p className="text-[16px] text-[#A1A1A1]">© 2007-2026 TimelessLuxe.com</p>
                <img className="h-[18px] w-[370px]" src="/images/payment-method.svg" alt="" />
            </div>
        </div>
    )
}