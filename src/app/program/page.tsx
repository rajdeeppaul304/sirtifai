"use client"

import { useState } from "react"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"

import Hero from "../../components/sections/program/hero";
import About from "../../components/sections/program/about";
import Benefits from "../../components/sections/program/benefits";
import Features from "../../components/sections/program/features";
import AddOnsPricing from "../../components/sections/program/addons-pricing";
import WhoCanUse from "../../components/sections/program/who-can-use";
import FAQ from "../../components/sections/program/faq";


type ProgramProps = {
  params: { variant: string }
}

export default function ProgramPage({ params }: ProgramProps) {
  const [variant, setVariant] = useState(params.variant || "skill")

  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <Hero />

      {/* about */}
      <About />

      {/* benefits */}
      <Benefits />
      {/* features */}
      <Features />
      <section className="md:min-h-screen w-screen bg-[#FEF7F1] py-4 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8  justify-center min-h-screen w-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize text-center">
              Simple, Transparent Pricing
            </h1>
            <p className="text-[#4B5563] text-base max-w-[538px] text-center mt-4">
              One-time payment for lifetime access to our comprehensive program
              with on going support.
            </p>
          </div>

          <div
            className="p-4 rounded-full md:border md:border-[rgba(252, 76, 3, 0.45)] md:bg-white mt-4 md:mt-8 
                flex flex-col md:flex-row items-center justify-center 
                space-y-4 md:space-y-0 md:space-x-8"
          >
            <button
              onClick={() => setVariant("skill")}
              className={`${
                variant === "skill" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
              } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
            >
              Skill Phase
            </button>
            <button
              onClick={() => setVariant("practice")}
              className={`${
                variant === "practice" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
              } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
            >
              Practice Phase
            </button>
            <button
              onClick={() => setVariant("progress")}
              className={`${
                variant === "progress" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
              } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
            >
              Progress Phase
            </button>
          </div>

          {variant == "skill" && (
            <div
              id="pricing"
              className="md:w-[1100px]  mx-auto relative rounded-[21px] bg-[#FEB092] shadow-[0 1.443px 9.238px 0 rgba(255, 255, 255, 0.10)]"
            >
              {/* <div className="absolute top-0 left-0 z-[0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="278"
                height="226"
                viewBox="0 0 278 226"
                fill="none"
              >
                <path
                  d="M197.626 140.762C202.281 123.464 214.008 112.288 227.894 102.974C235.643 97.743 243.901 93.4725 253.066 91.1674C256.934 90.1664 260.777 89.4325 264.751 89.6794C267.161 89.8945 269.504 90.265 271.8 91.1698C276.08 92.8438 278.229 96.6429 277.985 101.252C277.838 104.146 276.732 106.901 275.381 109.365C272.951 113.67 269.763 117.37 266.176 120.711C256.758 129.563 245.589 135.619 233.422 140.133C225.281 143.068 216.876 145.333 208.385 146.73C207.781 146.837 207.334 147.013 206.619 147.164C206.289 150.904 207.279 154.384 208.536 157.888C213.562 172.551 221.251 185.782 231.336 197.558C234.668 201.408 238.18 205.06 241.983 208.468C249.165 215.193 257.651 219.988 267.017 222.762C268.645 223.284 270.273 223.806 271.945 224.44C272.101 224.508 272.189 224.731 272.41 225.289C271.538 225.373 270.935 225.481 270.288 225.477C259.283 224.764 249.272 221.34 240.1 215.138C228.747 207.341 219.636 197.375 212.274 185.95C206.242 176.582 201.329 166.775 198.496 156.023C197.837 153.703 197.468 151.14 196.944 148.509C196.297 148.505 195.537 148.545 194.778 148.584C183.408 149.562 172.153 149.85 160.839 148.356C151.712 147.165 142.879 145.085 134.41 141.314C129.842 139.237 125.477 136.694 121.718 133.398C112.154 124.899 109.99 114.53 115.534 103.072C115.805 102.45 116.075 101.828 116.481 100.895C115.074 100.931 114.047 100.947 112.864 100.895C103.663 101.151 94.442 101.028 85.203 99.8809C77.3031 98.853 69.5179 97.1355 62.1417 93.8391C58.5536 92.2806 55.3246 90.3235 52.3663 87.7444C45.3606 81.466 42.961 73.7679 45.2793 64.6063C45.644 62.916 46.3208 61.3611 46.8651 59.4714C45.4582 59.5074 44.431 59.5234 43.292 59.5833C33.1524 60.0785 22.8598 59.8602 12.773 58.5295C10.2064 58.2467 7.66336 57.6967 5.18798 56.9913C3.91646 56.7163 2.80379 55.8633 1.62347 55.1657C0.710981 54.492 0.313526 53.4874 0.899104 52.3552C1.4847 51.2229 2.51189 51.2069 3.67158 51.5257C6.1028 52.1195 8.6017 52.5578 11.0564 52.8845C23.4419 54.4741 35.8567 54.5049 48.186 53.6667C49.3251 53.6068 50.4199 53.4352 51.1174 52.2591C58.5361 40.9682 68.666 32.6113 80.041 25.4423C95.8276 15.3825 112.898 7.91401 131.028 3.12444C137.22 1.46944 143.366 0.34865 149.818 0.655065C152.184 0.758513 154.639 1.0852 156.846 1.76673C162.309 3.49249 164.343 7.9813 162.354 13.4033C161.089 16.7363 159.067 19.4634 156.578 21.9871C151.866 27.0586 146.221 31.0777 140.244 34.5825C128.848 41.3727 116.658 46.1538 103.87 49.7509C88.3089 54.1775 72.3978 57.0652 56.3807 58.7051C54.5264 58.9166 53.2962 59.399 52.7519 61.2888C52.0046 63.645 50.9894 65.9773 50.5099 68.3573C49.5039 73.6517 51.0467 78.2044 54.8704 81.9914C57.449 84.5905 60.4779 86.3683 63.7539 87.7912C69.3023 90.386 75.1684 91.8247 81.1699 92.9524C93.9322 95.1679 106.815 95.402 119.724 94.7232C120.863 94.6632 121.69 94.4678 122.476 93.515C130.666 84.5004 140.743 77.9693 151.486 72.4668C163.078 66.5017 175.201 61.8761 187.963 59.192C192.858 58.175 197.841 57.3812 202.841 57.612C204.94 57.6916 207.127 57.9943 209.066 58.652C213.838 60.2622 215.404 64.5477 212.817 68.7858C211.558 70.827 209.942 72.6212 208.126 74.236C203.038 78.6815 197.04 81.8076 190.953 84.7104C171.376 93.6781 150.479 98.0055 129.146 99.9249C128.387 99.9649 127.672 100.116 126.868 100.045C125.573 100.037 124.655 100.655 124.025 101.676C122.63 104.028 120.967 106.356 120.041 108.912C117.625 114.888 118.694 120.529 123.139 125.233C125.405 127.696 128.299 129.785 131.216 131.607C136.338 134.756 142.001 136.661 147.755 138.144C159.843 141.268 172.255 141.945 184.717 141.441C188.714 141.421 193.07 141.002 197.626 140.762ZM57.9929 52.6572C58.7964 52.7289 59.0643 52.7528 59.444 52.7328C60.0915 52.7367 60.8067 52.5852 61.4542 52.5891C77.7392 50.9731 93.8298 47.886 109.393 42.8136C120.73 39.1409 131.714 34.5752 141.703 27.8209C146.182 24.7747 150.506 21.6608 154.008 17.4505C155.467 15.5886 156.727 13.5474 157.674 11.3705C158.554 9.34923 157.78 7.71875 155.505 7.19271C153.497 6.69056 151.31 6.38776 149.256 6.41984C142.133 6.3766 135.293 8.02768 128.474 10.0575C113.605 14.5996 99.5986 20.9954 86.2546 29.0656C76.7838 34.8431 67.8458 41.3143 60.4179 49.643C59.8558 50.5082 59.0259 51.3495 57.9929 52.6572ZM207.927 139.043C209.402 138.852 210.385 138.724 211.212 138.529C214.52 137.747 217.761 137.121 221.025 136.228C232.806 133.025 243.858 128.304 253.826 121.171C258.956 117.483 263.529 113.368 267.169 108.201C268.473 106.272 269.465 104.206 270.3 102.073C271.251 99.2508 270.229 97.9752 267.306 97.4452C266.191 97.238 265.008 97.1863 263.913 97.3578C261.12 97.8085 258.171 98.1915 255.398 99.021C245.359 102.056 236.382 107.124 228.048 113.487C220.923 118.989 214.798 125.388 210.476 133.402C209.575 135.045 208.875 136.866 207.927 139.043ZM207.54 65.569C207.451 65.3457 207.319 65.0109 207.119 64.8315C205.891 64.6681 204.687 64.2377 203.504 64.186C201.07 64.238 198.48 64.2223 196.022 64.5414C184.226 66.0733 173.089 69.9254 162.238 74.826C152.349 79.2201 142.813 84.5073 134.231 91.2256C133.537 91.7559 132.886 92.3978 132.236 93.0397C133.396 93.3585 134.467 93.4541 135.406 93.2148C142.534 91.9664 149.683 91.0967 156.679 89.5133C169.441 86.8292 181.785 82.7617 193.178 76.6173C197.027 74.5917 200.612 71.8964 204.085 69.245C205.562 68.4077 206.507 66.8767 207.54 65.569Z"
                  fill="black"
                />
              </svg>
            </div> */}
              <div className="z-[50] border border-[#E5E7EB] p-4 sm:p-5 md:p-6 bg-white w-full max-w-4xl mx-auto rounded-2xl shadow-md mt-4 md:my-12">
                {/* Header */}
                <div className="w-full flex flex-col gap-3 md:gap-0 md:flex-row items-start md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-black capitalize">
                      Skill phase
                    </h2>
                    <p className="text-[#4B5563] text-sm sm:text-base">
                      Foundation learning with essential skills
                    </p>
                  </div>
                  <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                    Single payment
                  </button>
                </div>

                <hr className="my-4 text-[#F3F4F6]" />

                {/* Price & status */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-3 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#111827]">
                      ₹ 5999
                    </h1>
                    <span className="text-[#6B7280] font-normal text-sm sm:text-lg">
                      (one time payment)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/programs/dot-circle.png"
                      alt=""
                      className="h-6 w-6 sm:h-[30px] sm:w-[30px] rounded-full object-contain"
                    />
                    <span className="text-sm sm:text-base font-medium">
                      Required
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between my-4 gap-3 sm:gap-0">
                  <div className="flex items-center gap-2">
                    ✅
                    <p className="text-sm sm:text-base font-normal">
                      Core skill development
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    ✅
                    <p className="text-sm sm:text-base font-normal">
                      Learning Materials
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-3 sm:gap-0">
                  <div className="flex items-center gap-2">
                    ✅
                    <p className="text-sm sm:text-base font-normal">
                      Foundational Knowledge
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    ✅
                    <p className="text-sm sm:text-base font-normal">
                      Core Tracking progress
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                  <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {variant === "practice" && (
            <div className="md:w-[1100px]  mx-auto relative rounded-[21px] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              {/* basic */}
              <div className="w-[400px] md:h-[620px] bg-white shadow-[0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)] rounded-[12px] border-t-4 border-t-[#6B7280] px-2 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-[#1F2937] text-xl font-[600]">Basic</h2>
                  <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                    Quarterly payment
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                  <div>
                    <h1 className="text-[#1F2937] text-[30px] font-bold ">
                      ₹5,999
                    </h1>
                    <span className="text-[#FC4C03]">Income: ₹12,000</span>
                  </div>
                  <span className="text-[#6B7280] text-sm font-[400]">
                    (quarterly + 18% GST)
                  </span>
                </div>
                <div className="bg-[#F3F4F6] flex items-center gap-4 rounded-md p-2 my-4 md:my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6996)">
                      <path
                        d="M4.89062 14.5902L4.49687 15.5121C3.9125 15.2152 3.375 14.8496 2.8875 14.4215L3.59687 13.7121C3.9875 14.0527 4.42188 14.3496 4.89062 14.5902ZM1.26875 9.09961H0.265625C0.309375 9.76211 0.434375 10.4027 0.63125 11.009L1.5625 10.6371C1.40937 10.1465 1.30625 9.63086 1.26875 9.09961ZM1.26875 8.09961C1.3125 7.51211 1.43125 6.94336 1.61563 6.40898L0.69375 6.01523C0.459375 6.67148 0.3125 7.37148 0.265625 8.09961H1.26875ZM2.00938 5.49023C2.25313 5.02461 2.54688 4.59023 2.8875 4.19336L2.17812 3.48398C1.75 3.97148 1.38125 4.50898 1.0875 5.09336L2.00938 5.49023ZM12.4062 13.7121C11.9719 14.0871 11.4875 14.409 10.9656 14.6621L11.3375 15.5934C11.9844 15.284 12.5813 14.8871 13.1156 14.4184L12.4062 13.7121ZM3.59375 3.48711C4.02813 3.11211 4.5125 2.79023 5.03438 2.53711L4.6625 1.60586C4.01562 1.91523 3.41875 2.31211 2.8875 2.78086L3.59375 3.48711ZM13.9906 11.709C13.7469 12.1746 13.4531 12.609 13.1125 13.0059L13.8219 13.7152C14.25 13.2277 14.6188 12.6871 14.9125 12.1059L13.9906 11.709ZM14.7312 9.09961C14.6875 9.68711 14.5687 10.2559 14.3844 10.7902L15.3062 11.184C15.5406 10.5246 15.6875 9.82461 15.7312 9.09648H14.7312V9.09961ZM10.0375 15.0371C9.54688 15.1934 9.03125 15.2934 8.5 15.3309V16.334C9.1625 16.2902 9.80313 16.1652 10.4094 15.9684L10.0375 15.0371ZM7.5 15.3309C6.9125 15.2871 6.34375 15.1684 5.80937 14.984L5.41563 15.9059C6.075 16.1402 6.775 16.2871 7.50313 16.3309V15.3309H7.5ZM14.4375 6.56211C14.5938 7.05273 14.6937 7.56836 14.7312 8.09961H15.7344C15.6906 7.43711 15.5656 6.79648 15.3687 6.19023L14.4375 6.56211ZM2.8875 13.0059C2.5125 12.5715 2.19062 12.0871 1.9375 11.5652L1.00625 11.9371C1.31562 12.584 1.7125 13.1809 2.18125 13.7152L2.8875 13.0059ZM8.5 1.86836C9.0875 1.91211 9.65312 2.03086 10.1906 2.21523L10.5844 1.29336C9.92813 1.05898 9.22812 0.912109 8.5 0.865234V1.86836ZM5.9625 2.16211C6.45312 2.00586 6.96875 1.90586 7.5 1.86836V0.865234C6.8375 0.908984 6.19687 1.03398 5.59062 1.23086L5.9625 2.16211ZM13.8219 3.48398L13.1125 4.19336C13.4875 4.62773 13.8094 5.11211 14.0656 5.63398L14.9969 5.26211C14.6875 4.61523 14.2906 4.01836 13.8219 3.48398ZM12.4062 3.48711L13.1156 2.77773C12.6281 2.34961 12.0906 1.98086 11.5063 1.68711L11.1125 2.60898C11.575 2.85273 12.0125 3.14648 12.4062 3.48711Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8 12.8496C8.48325 12.8496 8.875 12.4579 8.875 11.9746C8.875 11.4914 8.48325 11.0996 8 11.0996C7.51675 11.0996 7.125 11.4914 7.125 11.9746C7.125 12.4579 7.51675 12.8496 8 12.8496Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8.24057 10.3496H7.74057C7.53432 10.3496 7.36557 10.1809 7.36557 9.97461C7.36557 7.75586 9.78432 7.97773 9.78432 6.60586C9.78432 5.98086 9.22807 5.34961 7.99057 5.34961C7.0812 5.34961 6.6062 5.64961 6.14057 6.24648C6.0187 6.40273 5.7937 6.43398 5.63432 6.32148L5.22495 6.03398C5.04995 5.91211 5.00932 5.66523 5.1437 5.49648C5.8062 4.64648 6.5937 4.09961 7.9937 4.09961C9.62807 4.09961 11.0374 5.03086 11.0374 6.60586C11.0374 8.71836 8.6187 8.59023 8.6187 9.97461C8.61557 10.1809 8.44682 10.3496 8.24057 10.3496Z"
                        fill="#22C55E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6996">
                        <path
                          d="M0 0.599609H16V16.5996H0V0.599609Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm text-[#1F2937]">
                    Insurance-backed payment guarantee
                  </p>
                </div>
                <div className="mt-4 md:mt-16 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      NSQF Level 4 certification
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Access to practice phase projects
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Basic Portfolio Development
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Standard payroll processing
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">Community Access</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <path
                        d="M12 16.5996H0V0.599609H12V16.5996Z"
                        stroke="#E5E7EB"
                      />
                      <path
                        d="M10.7063 5.30576C11.0969 4.91514 11.0969 4.28076 10.7063 3.89014C10.3156 3.49951 9.68127 3.49951 9.29065 3.89014L6.00002 7.18389L2.70627 3.89326C2.31565 3.50264 1.68127 3.50264 1.29065 3.89326C0.900024 4.28389 0.900024 4.91826 1.29065 5.30889L4.5844 8.59951L1.29377 11.8933C0.903149 12.2839 0.903149 12.9183 1.29377 13.3089C1.6844 13.6995 2.31877 13.6995 2.7094 13.3089L6.00002 10.0151L9.29377 13.3058C9.6844 13.6964 10.3188 13.6964 10.7094 13.3058C11.1 12.9151 11.1 12.2808 10.7094 11.8901L7.41565 8.59951L10.7063 5.30576Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Advanced Skill Training
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <path
                        d="M12 16.5996H0V0.599609H12V16.5996Z"
                        stroke="#E5E7EB"
                      />
                      <path
                        d="M10.7063 5.30576C11.0969 4.91514 11.0969 4.28076 10.7063 3.89014C10.3156 3.49951 9.68127 3.49951 9.29065 3.89014L6.00002 7.18389L2.70627 3.89326C2.31565 3.50264 1.68127 3.50264 1.29065 3.89326C0.900024 4.28389 0.900024 4.91826 1.29065 5.30889L4.5844 8.59951L1.29377 11.8933C0.903149 12.2839 0.903149 12.9183 1.29377 13.3089C1.6844 13.6995 2.31877 13.6995 2.7094 13.3089L6.00002 10.0151L9.29377 13.3058C9.6844 13.6964 10.3188 13.6964 10.7094 13.3058C11.1 12.9151 11.1 12.2808 10.7094 11.8901L7.41565 8.59951L10.7063 5.30576Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      EPF and ESI benefits
                    </p>
                  </div>
                </div>
                <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                  <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                    Select Basic
                  </button>
                </div>
              </div>
              {/* pro */}
              <div className="w-[400px] md:h-[620px] bg-white shadow-[0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)] rounded-[12px] border-t-40 border-t-[#FE7743] px-2 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-[#1F2937] text-xl font-[600]">Pro</h2>
                  <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                    Quarterly payment
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                  <div>
                    <h1 className="text-[#1F2937] text-[30px] font-bold ">
                      ₹9,999
                    </h1>
                    <span className="text-[#FC4C03]">Income: ₹22,000</span>
                  </div>
                  <span className="text-[#6B7280] text-sm font-[400]">
                    (quarterly + 18% GST)
                  </span>
                </div>
                <div className="bg-[#FFEBE3] flex items-center gap-4 rounded-md p-2 my-4 md:my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6996)">
                      <path
                        d="M4.89062 14.5902L4.49687 15.5121C3.9125 15.2152 3.375 14.8496 2.8875 14.4215L3.59687 13.7121C3.9875 14.0527 4.42188 14.3496 4.89062 14.5902ZM1.26875 9.09961H0.265625C0.309375 9.76211 0.434375 10.4027 0.63125 11.009L1.5625 10.6371C1.40937 10.1465 1.30625 9.63086 1.26875 9.09961ZM1.26875 8.09961C1.3125 7.51211 1.43125 6.94336 1.61563 6.40898L0.69375 6.01523C0.459375 6.67148 0.3125 7.37148 0.265625 8.09961H1.26875ZM2.00938 5.49023C2.25313 5.02461 2.54688 4.59023 2.8875 4.19336L2.17812 3.48398C1.75 3.97148 1.38125 4.50898 1.0875 5.09336L2.00938 5.49023ZM12.4062 13.7121C11.9719 14.0871 11.4875 14.409 10.9656 14.6621L11.3375 15.5934C11.9844 15.284 12.5813 14.8871 13.1156 14.4184L12.4062 13.7121ZM3.59375 3.48711C4.02813 3.11211 4.5125 2.79023 5.03438 2.53711L4.6625 1.60586C4.01562 1.91523 3.41875 2.31211 2.8875 2.78086L3.59375 3.48711ZM13.9906 11.709C13.7469 12.1746 13.4531 12.609 13.1125 13.0059L13.8219 13.7152C14.25 13.2277 14.6188 12.6871 14.9125 12.1059L13.9906 11.709ZM14.7312 9.09961C14.6875 9.68711 14.5687 10.2559 14.3844 10.7902L15.3062 11.184C15.5406 10.5246 15.6875 9.82461 15.7312 9.09648H14.7312V9.09961ZM10.0375 15.0371C9.54688 15.1934 9.03125 15.2934 8.5 15.3309V16.334C9.1625 16.2902 9.80313 16.1652 10.4094 15.9684L10.0375 15.0371ZM7.5 15.3309C6.9125 15.2871 6.34375 15.1684 5.80937 14.984L5.41563 15.9059C6.075 16.1402 6.775 16.2871 7.50313 16.3309V15.3309H7.5ZM14.4375 6.56211C14.5938 7.05273 14.6937 7.56836 14.7312 8.09961H15.7344C15.6906 7.43711 15.5656 6.79648 15.3687 6.19023L14.4375 6.56211ZM2.8875 13.0059C2.5125 12.5715 2.19062 12.0871 1.9375 11.5652L1.00625 11.9371C1.31562 12.584 1.7125 13.1809 2.18125 13.7152L2.8875 13.0059ZM8.5 1.86836C9.0875 1.91211 9.65312 2.03086 10.1906 2.21523L10.5844 1.29336C9.92813 1.05898 9.22812 0.912109 8.5 0.865234V1.86836ZM5.9625 2.16211C6.45312 2.00586 6.96875 1.90586 7.5 1.86836V0.865234C6.8375 0.908984 6.19687 1.03398 5.59062 1.23086L5.9625 2.16211ZM13.8219 3.48398L13.1125 4.19336C13.4875 4.62773 13.8094 5.11211 14.0656 5.63398L14.9969 5.26211C14.6875 4.61523 14.2906 4.01836 13.8219 3.48398ZM12.4062 3.48711L13.1156 2.77773C12.6281 2.34961 12.0906 1.98086 11.5063 1.68711L11.1125 2.60898C11.575 2.85273 12.0125 3.14648 12.4062 3.48711Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8 12.8496C8.48325 12.8496 8.875 12.4579 8.875 11.9746C8.875 11.4914 8.48325 11.0996 8 11.0996C7.51675 11.0996 7.125 11.4914 7.125 11.9746C7.125 12.4579 7.51675 12.8496 8 12.8496Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8.24057 10.3496H7.74057C7.53432 10.3496 7.36557 10.1809 7.36557 9.97461C7.36557 7.75586 9.78432 7.97773 9.78432 6.60586C9.78432 5.98086 9.22807 5.34961 7.99057 5.34961C7.0812 5.34961 6.6062 5.64961 6.14057 6.24648C6.0187 6.40273 5.7937 6.43398 5.63432 6.32148L5.22495 6.03398C5.04995 5.91211 5.00932 5.66523 5.1437 5.49648C5.8062 4.64648 6.5937 4.09961 7.9937 4.09961C9.62807 4.09961 11.0374 5.03086 11.0374 6.60586C11.0374 8.71836 8.6187 8.59023 8.6187 9.97461C8.61557 10.1809 8.44682 10.3496 8.24057 10.3496Z"
                        fill="#22C55E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6996">
                        <path
                          d="M0 0.599609H16V16.5996H0V0.599609Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm text-[#1F2937]">
                    Insurance-backed payment guarantee
                  </p>
                </div>
                <div className="mt-4 md:mt-16 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      NSQF Level 5 certification
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Premium Project Assignment
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Advanced Portfolio Development
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      EPF benefits included
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Priority Community Support
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Advanced Skill Training
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <path
                        d="M12 16.5996H0V0.599609H12V16.5996Z"
                        stroke="#E5E7EB"
                      />
                      <path
                        d="M10.7063 5.30576C11.0969 4.91514 11.0969 4.28076 10.7063 3.89014C10.3156 3.49951 9.68127 3.49951 9.29065 3.89014L6.00002 7.18389L2.70627 3.89326C2.31565 3.50264 1.68127 3.50264 1.29065 3.89326C0.900024 4.28389 0.900024 4.91826 1.29065 5.30889L4.5844 8.59951L1.29377 11.8933C0.903149 12.2839 0.903149 12.9183 1.29377 13.3089C1.6844 13.6995 2.31877 13.6995 2.7094 13.3089L6.00002 10.0151L9.29377 13.3058C9.6844 13.6964 10.3188 13.6964 10.7094 13.3058C11.1 12.9151 11.1 12.2808 10.7094 11.8901L7.41565 8.59951L10.7063 5.30576Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <p className="text-sm text-[#1F2937]">ESI benefits</p>
                  </div> */}

                  <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                    <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                      Select Pro
                    </button>
                  </div>
                </div>
              </div>
              {/* elite */}
              <div className="w-[400px] md:h-[620px] bg-white shadow-[0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)] rounded-[12px] border-t-4 border-t-[#F59E0B] px-2 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-[#1F2937] text-xl font-[600]">Elite</h2>
                  <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                    Quarterly payment
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                  <div>
                    <h1 className="text-[#1F2937] text-[30px] font-bold ">
                      ₹19,999
                    </h1>
                    <span className="text-[#FC4C03]">Income: ₹35,000</span>
                  </div>
                  <span className="text-[#6B7280] text-sm font-[400]">
                    (quarterly + 18% GST)
                  </span>
                </div>
                <div className="bg-[#FFEBC9] flex items-center gap-4 rounded-md p-2 my-4 md:my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6996)">
                      <path
                        d="M4.89062 14.5902L4.49687 15.5121C3.9125 15.2152 3.375 14.8496 2.8875 14.4215L3.59687 13.7121C3.9875 14.0527 4.42188 14.3496 4.89062 14.5902ZM1.26875 9.09961H0.265625C0.309375 9.76211 0.434375 10.4027 0.63125 11.009L1.5625 10.6371C1.40937 10.1465 1.30625 9.63086 1.26875 9.09961ZM1.26875 8.09961C1.3125 7.51211 1.43125 6.94336 1.61563 6.40898L0.69375 6.01523C0.459375 6.67148 0.3125 7.37148 0.265625 8.09961H1.26875ZM2.00938 5.49023C2.25313 5.02461 2.54688 4.59023 2.8875 4.19336L2.17812 3.48398C1.75 3.97148 1.38125 4.50898 1.0875 5.09336L2.00938 5.49023ZM12.4062 13.7121C11.9719 14.0871 11.4875 14.409 10.9656 14.6621L11.3375 15.5934C11.9844 15.284 12.5813 14.8871 13.1156 14.4184L12.4062 13.7121ZM3.59375 3.48711C4.02813 3.11211 4.5125 2.79023 5.03438 2.53711L4.6625 1.60586C4.01562 1.91523 3.41875 2.31211 2.8875 2.78086L3.59375 3.48711ZM13.9906 11.709C13.7469 12.1746 13.4531 12.609 13.1125 13.0059L13.8219 13.7152C14.25 13.2277 14.6188 12.6871 14.9125 12.1059L13.9906 11.709ZM14.7312 9.09961C14.6875 9.68711 14.5687 10.2559 14.3844 10.7902L15.3062 11.184C15.5406 10.5246 15.6875 9.82461 15.7312 9.09648H14.7312V9.09961ZM10.0375 15.0371C9.54688 15.1934 9.03125 15.2934 8.5 15.3309V16.334C9.1625 16.2902 9.80313 16.1652 10.4094 15.9684L10.0375 15.0371ZM7.5 15.3309C6.9125 15.2871 6.34375 15.1684 5.80937 14.984L5.41563 15.9059C6.075 16.1402 6.775 16.2871 7.50313 16.3309V15.3309H7.5ZM14.4375 6.56211C14.5938 7.05273 14.6937 7.56836 14.7312 8.09961H15.7344C15.6906 7.43711 15.5656 6.79648 15.3687 6.19023L14.4375 6.56211ZM2.8875 13.0059C2.5125 12.5715 2.19062 12.0871 1.9375 11.5652L1.00625 11.9371C1.31562 12.584 1.7125 13.1809 2.18125 13.7152L2.8875 13.0059ZM8.5 1.86836C9.0875 1.91211 9.65312 2.03086 10.1906 2.21523L10.5844 1.29336C9.92813 1.05898 9.22812 0.912109 8.5 0.865234V1.86836ZM5.9625 2.16211C6.45312 2.00586 6.96875 1.90586 7.5 1.86836V0.865234C6.8375 0.908984 6.19687 1.03398 5.59062 1.23086L5.9625 2.16211ZM13.8219 3.48398L13.1125 4.19336C13.4875 4.62773 13.8094 5.11211 14.0656 5.63398L14.9969 5.26211C14.6875 4.61523 14.2906 4.01836 13.8219 3.48398ZM12.4062 3.48711L13.1156 2.77773C12.6281 2.34961 12.0906 1.98086 11.5063 1.68711L11.1125 2.60898C11.575 2.85273 12.0125 3.14648 12.4062 3.48711Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8 12.8496C8.48325 12.8496 8.875 12.4579 8.875 11.9746C8.875 11.4914 8.48325 11.0996 8 11.0996C7.51675 11.0996 7.125 11.4914 7.125 11.9746C7.125 12.4579 7.51675 12.8496 8 12.8496Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8.24057 10.3496H7.74057C7.53432 10.3496 7.36557 10.1809 7.36557 9.97461C7.36557 7.75586 9.78432 7.97773 9.78432 6.60586C9.78432 5.98086 9.22807 5.34961 7.99057 5.34961C7.0812 5.34961 6.6062 5.64961 6.14057 6.24648C6.0187 6.40273 5.7937 6.43398 5.63432 6.32148L5.22495 6.03398C5.04995 5.91211 5.00932 5.66523 5.1437 5.49648C5.8062 4.64648 6.5937 4.09961 7.9937 4.09961C9.62807 4.09961 11.0374 5.03086 11.0374 6.60586C11.0374 8.71836 8.6187 8.59023 8.6187 9.97461C8.61557 10.1809 8.44682 10.3496 8.24057 10.3496Z"
                        fill="#22C55E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6996">
                        <path
                          d="M0 0.599609H16V16.5996H0V0.599609Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm text-[#1F2937]">
                    Insurance-backed payment guarantee
                  </p>
                </div>
                <div className="mt-4 md:mt-16 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">Domain Learning</p>
                      <span className="text-xs text-[#6B7280]">
                        Specialized industry knowledge
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">Assignments</p>
                      <span className="text-xs text-[#6B7280]">
                        Practical skill development
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <div className="flex flex-col -space-y-1">
                        <p className="text-sm text-[#1F2937]">
                          Career Analytics
                        </p>
                        <span className="text-xs text-[#6B7280]">
                          Track your growth and opportunities
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">Recorded Classes</p>
                      <span className="text-xs text-[#6B7280]">
                        On-demand learning materials
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">
                        NSQF certification
                      </p>
                      <span className="text-xs text-[#6B7280]">
                        Nationality recognized qualification
                      </span>
                    </div>
                  </div>

                  <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                    <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                      Select Elite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {variant === "progress" && (
            <div className="md:w-[1100px]  mx-auto relative rounded-[21px] flex flex-row justify-center items-center gap-4 md:gap-8">
              {/* basic */}
              <div className="w-[400px] md:h-[620px] bg-white shadow-[0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)] rounded-[12px] border-t-4 border-t-[#6B7280] px-2 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-[#1F2937] text-xl font-[600]">Basic</h2>
                  <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                    Quarterly payment
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                  <div>
                    <h1 className="text-[#1F2937] text-[30px] font-bold ">
                      ₹19,999
                    </h1>
                    <span className="text-[#FC4C03]">
                      Income: ₹2.4L - 3.5 L
                    </span>
                  </div>
                  <span className="text-[#6B7280] text-sm font-[400]">
                    (quarterly + 18% GST)
                  </span>
                </div>
                <div className="bg-[#F3F4F6] flex items-center gap-4 rounded-md p-2 my-4 md:my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6996)">
                      <path
                        d="M4.89062 14.5902L4.49687 15.5121C3.9125 15.2152 3.375 14.8496 2.8875 14.4215L3.59687 13.7121C3.9875 14.0527 4.42188 14.3496 4.89062 14.5902ZM1.26875 9.09961H0.265625C0.309375 9.76211 0.434375 10.4027 0.63125 11.009L1.5625 10.6371C1.40937 10.1465 1.30625 9.63086 1.26875 9.09961ZM1.26875 8.09961C1.3125 7.51211 1.43125 6.94336 1.61563 6.40898L0.69375 6.01523C0.459375 6.67148 0.3125 7.37148 0.265625 8.09961H1.26875ZM2.00938 5.49023C2.25313 5.02461 2.54688 4.59023 2.8875 4.19336L2.17812 3.48398C1.75 3.97148 1.38125 4.50898 1.0875 5.09336L2.00938 5.49023ZM12.4062 13.7121C11.9719 14.0871 11.4875 14.409 10.9656 14.6621L11.3375 15.5934C11.9844 15.284 12.5813 14.8871 13.1156 14.4184L12.4062 13.7121ZM3.59375 3.48711C4.02813 3.11211 4.5125 2.79023 5.03438 2.53711L4.6625 1.60586C4.01562 1.91523 3.41875 2.31211 2.8875 2.78086L3.59375 3.48711ZM13.9906 11.709C13.7469 12.1746 13.4531 12.609 13.1125 13.0059L13.8219 13.7152C14.25 13.2277 14.6188 12.6871 14.9125 12.1059L13.9906 11.709ZM14.7312 9.09961C14.6875 9.68711 14.5687 10.2559 14.3844 10.7902L15.3062 11.184C15.5406 10.5246 15.6875 9.82461 15.7312 9.09648H14.7312V9.09961ZM10.0375 15.0371C9.54688 15.1934 9.03125 15.2934 8.5 15.3309V16.334C9.1625 16.2902 9.80313 16.1652 10.4094 15.9684L10.0375 15.0371ZM7.5 15.3309C6.9125 15.2871 6.34375 15.1684 5.80937 14.984L5.41563 15.9059C6.075 16.1402 6.775 16.2871 7.50313 16.3309V15.3309H7.5ZM14.4375 6.56211C14.5938 7.05273 14.6937 7.56836 14.7312 8.09961H15.7344C15.6906 7.43711 15.5656 6.79648 15.3687 6.19023L14.4375 6.56211ZM2.8875 13.0059C2.5125 12.5715 2.19062 12.0871 1.9375 11.5652L1.00625 11.9371C1.31562 12.584 1.7125 13.1809 2.18125 13.7152L2.8875 13.0059ZM8.5 1.86836C9.0875 1.91211 9.65312 2.03086 10.1906 2.21523L10.5844 1.29336C9.92813 1.05898 9.22812 0.912109 8.5 0.865234V1.86836ZM5.9625 2.16211C6.45312 2.00586 6.96875 1.90586 7.5 1.86836V0.865234C6.8375 0.908984 6.19687 1.03398 5.59062 1.23086L5.9625 2.16211ZM13.8219 3.48398L13.1125 4.19336C13.4875 4.62773 13.8094 5.11211 14.0656 5.63398L14.9969 5.26211C14.6875 4.61523 14.2906 4.01836 13.8219 3.48398ZM12.4062 3.48711L13.1156 2.77773C12.6281 2.34961 12.0906 1.98086 11.5063 1.68711L11.1125 2.60898C11.575 2.85273 12.0125 3.14648 12.4062 3.48711Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8 12.8496C8.48325 12.8496 8.875 12.4579 8.875 11.9746C8.875 11.4914 8.48325 11.0996 8 11.0996C7.51675 11.0996 7.125 11.4914 7.125 11.9746C7.125 12.4579 7.51675 12.8496 8 12.8496Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8.24057 10.3496H7.74057C7.53432 10.3496 7.36557 10.1809 7.36557 9.97461C7.36557 7.75586 9.78432 7.97773 9.78432 6.60586C9.78432 5.98086 9.22807 5.34961 7.99057 5.34961C7.0812 5.34961 6.6062 5.64961 6.14057 6.24648C6.0187 6.40273 5.7937 6.43398 5.63432 6.32148L5.22495 6.03398C5.04995 5.91211 5.00932 5.66523 5.1437 5.49648C5.8062 4.64648 6.5937 4.09961 7.9937 4.09961C9.62807 4.09961 11.0374 5.03086 11.0374 6.60586C11.0374 8.71836 8.6187 8.59023 8.6187 9.97461C8.61557 10.1809 8.44682 10.3496 8.24057 10.3496Z"
                        fill="#22C55E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6996">
                        <path
                          d="M0 0.599609H16V16.5996H0V0.599609Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm text-[#1F2937]">
                    Insurance-backed payment guarantee
                  </p>
                </div>
                <div className="mt-4 md:mt-16 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      NSQF Level 4 certification
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Access to practice phase projects
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Basic Portfolio Development
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Standard payroll processing
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">Community Access</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <path
                        d="M12 16.5996H0V0.599609H12V16.5996Z"
                        stroke="#E5E7EB"
                      />
                      <path
                        d="M10.7063 5.30576C11.0969 4.91514 11.0969 4.28076 10.7063 3.89014C10.3156 3.49951 9.68127 3.49951 9.29065 3.89014L6.00002 7.18389L2.70627 3.89326C2.31565 3.50264 1.68127 3.50264 1.29065 3.89326C0.900024 4.28389 0.900024 4.91826 1.29065 5.30889L4.5844 8.59951L1.29377 11.8933C0.903149 12.2839 0.903149 12.9183 1.29377 13.3089C1.6844 13.6995 2.31877 13.6995 2.7094 13.3089L6.00002 10.0151L9.29377 13.3058C9.6844 13.6964 10.3188 13.6964 10.7094 13.3058C11.1 12.9151 11.1 12.2808 10.7094 11.8901L7.41565 8.59951L10.7063 5.30576Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Advanced Skill Training
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <path
                        d="M12 16.5996H0V0.599609H12V16.5996Z"
                        stroke="#E5E7EB"
                      />
                      <path
                        d="M10.7063 5.30576C11.0969 4.91514 11.0969 4.28076 10.7063 3.89014C10.3156 3.49951 9.68127 3.49951 9.29065 3.89014L6.00002 7.18389L2.70627 3.89326C2.31565 3.50264 1.68127 3.50264 1.29065 3.89326C0.900024 4.28389 0.900024 4.91826 1.29065 5.30889L4.5844 8.59951L1.29377 11.8933C0.903149 12.2839 0.903149 12.9183 1.29377 13.3089C1.6844 13.6995 2.31877 13.6995 2.7094 13.3089L6.00002 10.0151L9.29377 13.3058C9.6844 13.6964 10.3188 13.6964 10.7094 13.3058C11.1 12.9151 11.1 12.2808 10.7094 11.8901L7.41565 8.59951L10.7063 5.30576Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      EPF and ESI benefits
                    </p>
                  </div>
                </div>
                <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                  <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                    Select Basic
                  </button>
                </div>
              </div>
              {/* pro */}
              <div className="w-[400px] md:h-[620px] bg-white shadow-[0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)] rounded-[12px] border-t-40 border-t-[#FE7743] px-2 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-[#1F2937] text-xl font-[600]">Pro</h2>
                  <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                    Quarterly payment
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                  <div>
                    <h1 className="text-[#1F2937] text-[30px] font-bold ">
                      ₹29,999
                    </h1>
                    <span className="text-[#FC4C03]">Income: ₹4.5L - 7L</span>
                  </div>
                  <span className="text-[#6B7280] text-sm font-[400]">
                    (quarterly + 18% GST)
                  </span>
                </div>
                <div className="bg-[#FFEBE3] flex items-center gap-4 rounded-md p-2 my-4 md:my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6996)">
                      <path
                        d="M4.89062 14.5902L4.49687 15.5121C3.9125 15.2152 3.375 14.8496 2.8875 14.4215L3.59687 13.7121C3.9875 14.0527 4.42188 14.3496 4.89062 14.5902ZM1.26875 9.09961H0.265625C0.309375 9.76211 0.434375 10.4027 0.63125 11.009L1.5625 10.6371C1.40937 10.1465 1.30625 9.63086 1.26875 9.09961ZM1.26875 8.09961C1.3125 7.51211 1.43125 6.94336 1.61563 6.40898L0.69375 6.01523C0.459375 6.67148 0.3125 7.37148 0.265625 8.09961H1.26875ZM2.00938 5.49023C2.25313 5.02461 2.54688 4.59023 2.8875 4.19336L2.17812 3.48398C1.75 3.97148 1.38125 4.50898 1.0875 5.09336L2.00938 5.49023ZM12.4062 13.7121C11.9719 14.0871 11.4875 14.409 10.9656 14.6621L11.3375 15.5934C11.9844 15.284 12.5813 14.8871 13.1156 14.4184L12.4062 13.7121ZM3.59375 3.48711C4.02813 3.11211 4.5125 2.79023 5.03438 2.53711L4.6625 1.60586C4.01562 1.91523 3.41875 2.31211 2.8875 2.78086L3.59375 3.48711ZM13.9906 11.709C13.7469 12.1746 13.4531 12.609 13.1125 13.0059L13.8219 13.7152C14.25 13.2277 14.6188 12.6871 14.9125 12.1059L13.9906 11.709ZM14.7312 9.09961C14.6875 9.68711 14.5687 10.2559 14.3844 10.7902L15.3062 11.184C15.5406 10.5246 15.6875 9.82461 15.7312 9.09648H14.7312V9.09961ZM10.0375 15.0371C9.54688 15.1934 9.03125 15.2934 8.5 15.3309V16.334C9.1625 16.2902 9.80313 16.1652 10.4094 15.9684L10.0375 15.0371ZM7.5 15.3309C6.9125 15.2871 6.34375 15.1684 5.80937 14.984L5.41563 15.9059C6.075 16.1402 6.775 16.2871 7.50313 16.3309V15.3309H7.5ZM14.4375 6.56211C14.5938 7.05273 14.6937 7.56836 14.7312 8.09961H15.7344C15.6906 7.43711 15.5656 6.79648 15.3687 6.19023L14.4375 6.56211ZM2.8875 13.0059C2.5125 12.5715 2.19062 12.0871 1.9375 11.5652L1.00625 11.9371C1.31562 12.584 1.7125 13.1809 2.18125 13.7152L2.8875 13.0059ZM8.5 1.86836C9.0875 1.91211 9.65312 2.03086 10.1906 2.21523L10.5844 1.29336C9.92813 1.05898 9.22812 0.912109 8.5 0.865234V1.86836ZM5.9625 2.16211C6.45312 2.00586 6.96875 1.90586 7.5 1.86836V0.865234C6.8375 0.908984 6.19687 1.03398 5.59062 1.23086L5.9625 2.16211ZM13.8219 3.48398L13.1125 4.19336C13.4875 4.62773 13.8094 5.11211 14.0656 5.63398L14.9969 5.26211C14.6875 4.61523 14.2906 4.01836 13.8219 3.48398ZM12.4062 3.48711L13.1156 2.77773C12.6281 2.34961 12.0906 1.98086 11.5063 1.68711L11.1125 2.60898C11.575 2.85273 12.0125 3.14648 12.4062 3.48711Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8 12.8496C8.48325 12.8496 8.875 12.4579 8.875 11.9746C8.875 11.4914 8.48325 11.0996 8 11.0996C7.51675 11.0996 7.125 11.4914 7.125 11.9746C7.125 12.4579 7.51675 12.8496 8 12.8496Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8.24057 10.3496H7.74057C7.53432 10.3496 7.36557 10.1809 7.36557 9.97461C7.36557 7.75586 9.78432 7.97773 9.78432 6.60586C9.78432 5.98086 9.22807 5.34961 7.99057 5.34961C7.0812 5.34961 6.6062 5.64961 6.14057 6.24648C6.0187 6.40273 5.7937 6.43398 5.63432 6.32148L5.22495 6.03398C5.04995 5.91211 5.00932 5.66523 5.1437 5.49648C5.8062 4.64648 6.5937 4.09961 7.9937 4.09961C9.62807 4.09961 11.0374 5.03086 11.0374 6.60586C11.0374 8.71836 8.6187 8.59023 8.6187 9.97461C8.61557 10.1809 8.44682 10.3496 8.24057 10.3496Z"
                        fill="#22C55E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6996">
                        <path
                          d="M0 0.599609H16V16.5996H0V0.599609Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm text-[#1F2937]">
                    Insurance-backed payment guarantee
                  </p>
                </div>
                <div className="mt-4 md:mt-16 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      NSQF Level 5 certification
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Premium Project Assignment
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Advanced Portfolio Development
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      EPF benefits included
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Priority Community Support
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-[#1F2937]">
                      Advanced Skill Training
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <path
                        d="M12 16.5996H0V0.599609H12V16.5996Z"
                        stroke="#E5E7EB"
                      />
                      <path
                        d="M10.7063 5.30576C11.0969 4.91514 11.0969 4.28076 10.7063 3.89014C10.3156 3.49951 9.68127 3.49951 9.29065 3.89014L6.00002 7.18389L2.70627 3.89326C2.31565 3.50264 1.68127 3.50264 1.29065 3.89326C0.900024 4.28389 0.900024 4.91826 1.29065 5.30889L4.5844 8.59951L1.29377 11.8933C0.903149 12.2839 0.903149 12.9183 1.29377 13.3089C1.6844 13.6995 2.31877 13.6995 2.7094 13.3089L6.00002 10.0151L9.29377 13.3058C9.6844 13.6964 10.3188 13.6964 10.7094 13.3058C11.1 12.9151 11.1 12.2808 10.7094 11.8901L7.41565 8.59951L10.7063 5.30576Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <p className="text-sm text-[#1F2937]">ESI benefits</p>
                  </div> */}

                  <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                    <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                      Select Pro
                    </button>
                  </div>
                </div>
              </div>
              {/* elite */}
              <div className="w-[400px] md:h-[620px] bg-white shadow-[0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)] rounded-[12px] border-t-4 border-t-[#F59E0B] px-2 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-[#1F2937] text-xl font-[600]">Elite</h2>
                  <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                    Quarterly payment
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                  <div>
                    <h1 className="text-[#1F2937] text-[30px] font-bold ">
                      ₹59,999
                    </h1>
                    <span className="text-[#FC4C03]">Income: ₹8L-12L</span>
                  </div>
                  <span className="text-[#6B7280] text-sm font-[400]">
                    (quarterly + 18% GST)
                  </span>
                </div>
                <div className="bg-[#FFEBC9] flex items-center gap-4 rounded-md p-2 my-4 md:my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6996)">
                      <path
                        d="M4.89062 14.5902L4.49687 15.5121C3.9125 15.2152 3.375 14.8496 2.8875 14.4215L3.59687 13.7121C3.9875 14.0527 4.42188 14.3496 4.89062 14.5902ZM1.26875 9.09961H0.265625C0.309375 9.76211 0.434375 10.4027 0.63125 11.009L1.5625 10.6371C1.40937 10.1465 1.30625 9.63086 1.26875 9.09961ZM1.26875 8.09961C1.3125 7.51211 1.43125 6.94336 1.61563 6.40898L0.69375 6.01523C0.459375 6.67148 0.3125 7.37148 0.265625 8.09961H1.26875ZM2.00938 5.49023C2.25313 5.02461 2.54688 4.59023 2.8875 4.19336L2.17812 3.48398C1.75 3.97148 1.38125 4.50898 1.0875 5.09336L2.00938 5.49023ZM12.4062 13.7121C11.9719 14.0871 11.4875 14.409 10.9656 14.6621L11.3375 15.5934C11.9844 15.284 12.5813 14.8871 13.1156 14.4184L12.4062 13.7121ZM3.59375 3.48711C4.02813 3.11211 4.5125 2.79023 5.03438 2.53711L4.6625 1.60586C4.01562 1.91523 3.41875 2.31211 2.8875 2.78086L3.59375 3.48711ZM13.9906 11.709C13.7469 12.1746 13.4531 12.609 13.1125 13.0059L13.8219 13.7152C14.25 13.2277 14.6188 12.6871 14.9125 12.1059L13.9906 11.709ZM14.7312 9.09961C14.6875 9.68711 14.5687 10.2559 14.3844 10.7902L15.3062 11.184C15.5406 10.5246 15.6875 9.82461 15.7312 9.09648H14.7312V9.09961ZM10.0375 15.0371C9.54688 15.1934 9.03125 15.2934 8.5 15.3309V16.334C9.1625 16.2902 9.80313 16.1652 10.4094 15.9684L10.0375 15.0371ZM7.5 15.3309C6.9125 15.2871 6.34375 15.1684 5.80937 14.984L5.41563 15.9059C6.075 16.1402 6.775 16.2871 7.50313 16.3309V15.3309H7.5ZM14.4375 6.56211C14.5938 7.05273 14.6937 7.56836 14.7312 8.09961H15.7344C15.6906 7.43711 15.5656 6.79648 15.3687 6.19023L14.4375 6.56211ZM2.8875 13.0059C2.5125 12.5715 2.19062 12.0871 1.9375 11.5652L1.00625 11.9371C1.31562 12.584 1.7125 13.1809 2.18125 13.7152L2.8875 13.0059ZM8.5 1.86836C9.0875 1.91211 9.65312 2.03086 10.1906 2.21523L10.5844 1.29336C9.92813 1.05898 9.22812 0.912109 8.5 0.865234V1.86836ZM5.9625 2.16211C6.45312 2.00586 6.96875 1.90586 7.5 1.86836V0.865234C6.8375 0.908984 6.19687 1.03398 5.59062 1.23086L5.9625 2.16211ZM13.8219 3.48398L13.1125 4.19336C13.4875 4.62773 13.8094 5.11211 14.0656 5.63398L14.9969 5.26211C14.6875 4.61523 14.2906 4.01836 13.8219 3.48398ZM12.4062 3.48711L13.1156 2.77773C12.6281 2.34961 12.0906 1.98086 11.5063 1.68711L11.1125 2.60898C11.575 2.85273 12.0125 3.14648 12.4062 3.48711Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8 12.8496C8.48325 12.8496 8.875 12.4579 8.875 11.9746C8.875 11.4914 8.48325 11.0996 8 11.0996C7.51675 11.0996 7.125 11.4914 7.125 11.9746C7.125 12.4579 7.51675 12.8496 8 12.8496Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8.24057 10.3496H7.74057C7.53432 10.3496 7.36557 10.1809 7.36557 9.97461C7.36557 7.75586 9.78432 7.97773 9.78432 6.60586C9.78432 5.98086 9.22807 5.34961 7.99057 5.34961C7.0812 5.34961 6.6062 5.64961 6.14057 6.24648C6.0187 6.40273 5.7937 6.43398 5.63432 6.32148L5.22495 6.03398C5.04995 5.91211 5.00932 5.66523 5.1437 5.49648C5.8062 4.64648 6.5937 4.09961 7.9937 4.09961C9.62807 4.09961 11.0374 5.03086 11.0374 6.60586C11.0374 8.71836 8.6187 8.59023 8.6187 9.97461C8.61557 10.1809 8.44682 10.3496 8.24057 10.3496Z"
                        fill="#22C55E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6996">
                        <path
                          d="M0 0.599609H16V16.5996H0V0.599609Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm text-[#1F2937]">
                    Insurance-backed payment guarantee
                  </p>
                </div>
                <div className="mt-4 md:mt-16 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">Domain Learning</p>
                      <span className="text-xs text-[#6B7280]">
                        Specialized industry knowledge
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">Assignments</p>
                      <span className="text-xs text-[#6B7280]">
                        Practical skill development
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <div className="flex flex-col -space-y-1">
                        <p className="text-sm text-[#1F2937]">
                          Career Analytics
                        </p>
                        <span className="text-xs text-[#6B7280]">
                          Track your growth and opportunities
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">Recorded Classes</p>
                      <span className="text-xs text-[#6B7280]">
                        On-demand learning materials
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_7007)">
                        <path
                          d="M13.7063 3.89331C14.0969 4.28394 14.0969 4.91831 13.7063 5.30894L5.70627 13.3089C5.31565 13.6996 4.68127 13.6996 4.29065 13.3089L0.290649 9.30894C-0.0999756 8.91831 -0.0999756 8.28394 0.290649 7.89331C0.681274 7.50269 1.31565 7.50269 1.70627 7.89331L5.00002 11.1839L12.2938 3.89331C12.6844 3.50269 13.3188 3.50269 13.7094 3.89331H13.7063Z"
                          fill="#22C55E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_7007">
                          <path
                            d="M0 0.599609H14V16.5996H0V0.599609Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col -space-y-1">
                      <p className="text-sm text-[#1F2937]">
                        NSQF certification
                      </p>
                      <span className="text-xs text-[#6B7280]">
                        Nationality recognized qualification
                      </span>
                    </div>
                  </div>

                  <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                    <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                      Select Elite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>


        {/* Adds on pricing */}

      <AddOnsPricing />

      {/* who can use it */}
      <WhoCanUse />
      {/* FAQS */}
      <FAQ />

      {/* Footer */}
      <Footer />
      <Footer />
    </div>
  )
}
