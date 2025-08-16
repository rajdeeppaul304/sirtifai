import { IoIosArrowForward } from "react-icons/io"

export const GotMoreQuestions = () => {
    return (
        <section className="h-[240px] sm:h-[198px] pt-4 sm:pt-0 w-full bg-[#FE7743] px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center">
            <div className="max-w-[1200px] mx-auto items-start flex flex-col lg:flex-row justify-between sm:items-center">
                <div className="w-full lg:w-[50%] flex flex-col justify-start items-start gap-2.5">
                    <h1 className="text-white font-inter text-[1.75rem] font-bold leading-[142%]">
                        Got More Questions? Let’s Talk.
                    </h1>
                    <p className="text-white font-inter text-sm sm:text-[1.125rem] leading-[142%] font-normal">
                        Our advisors will help you choose the right plan — domestic or international — based on your  career goals.
                    </p>
                </div>
                <button className="px-4 py-2 mt-4 sm:mt-0 sm:py-5 sm:pl-8 sm:pr-5 flex justify-center items-center gap-2.5 bg-white rounded-[42px] text-[#FE7743] font-inter font-semibold text-[1rem] sm:text-[1.5rem] leading-[100%]">
                    <p>Book free career call</p>
                    <IoIosArrowForward/>
                </button>
            </div>
        </section>
    )
}