'use client';

import { Accordion } from "@/components/Accordion";

export const GeneralFaq = () => {
    return (
        <div className="w-full sm:bg-[#fef7f1] bg-white flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[120px]">
            <Accordion/>

            <div className="w-full lg:w-[40%] flex flex-col justify-start items-start gap-[50px] lg:gap-[116px]">
                <img className="w-[40vw] sm:w-[85%]" src="/assets/vector.svg" alt="Vector" />

                <div className="w-full flex flex-col justify-start items-start gap-4">
                    <h2 className="leading-[150%] font-inter text-[1.25rem] font-semibold">You can ask anything you want to know Feedback</h2>

                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-start items-start gap-[5px][ w-full">
                        <label className="text-[#FE7743] text-[1rem] leading-[150%] font-inter font-semibold" htmlFor=""></label>
                        <input className="w-full py-2 px-2.5 border border-[#FE7743] rounded-full placeholder:text-black placeholder:font-semibold" placeholder="Enter Here" type="text" name="" id="" />
                    </form>
                </div>
            </div>
        </div>
    )
}