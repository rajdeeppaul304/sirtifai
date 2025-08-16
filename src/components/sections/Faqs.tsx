'use client';

import { useState } from "react"
import { GeneralFaq } from "@/components/sections/GeneralFaq";

export const Faqs = () => {
    const [currentTab, setCurrentTab] = useState("General FAQ");

    return(
        <section className="w-full flex flex-col justify-center items-center">
            <div className="w-full bg-white sm:bg-[#fef7f1] h-[100px] flex justify-between items-center px-6 lg:px-[100px] py-[30px]">
                <div className="w-full flex justify-between items-center gap-10 overflow-auto border-b border-b-[#D9D9D9]">
                    {
                        ['General FAQ', 'Plans & Pricing', 'Certifications', 'Career Support'].map((option, index) => (
                            <button onClick={() => setCurrentTab(option)} key={index} className={`h-[40px] text-[#FE7743] cursor-pointer text-[1.25rem] font-medium leading-[150%] ${currentTab === option ? 'border-b border-[#FE7743]' : ''}`}>
                                {option}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="max-w-[1125px] bg-white sm:bg-[#fef7f1] pt-[20px] pb-[50px] px-6 mx-auto flex flex-col gap-[76px] justify-between items-center">
                <h1 className="text-[#35332F] font-semibold text-[1.75rem] lg:text-[2.5rem] leading-[150%] font-inter">Frequently Asked Questions</h1>

                {
                    currentTab === 'General FAQ' && (<GeneralFaq/>)
                }

            </div>
        </section>
    )
}