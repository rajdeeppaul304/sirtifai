import React from 'react';
// import insuranceImage from '/assets/insurance/Rectangle-9.png';
// import star from '/assets/star.png';
const insuranceImage = "/assets/insurance/Rectangle-9.png";
const star = "/assets/star.png";
export const InsuranceHeroSection = () => {
  return (
    <>
      <style>
        {`
          .double-border-btn {
              position: relative;
              background: #1f2937;
              color: white;
              border-radius: 9999px;
              padding: 1rem 2rem;
              font-weight: 600;
              font-size: 1.125rem;
              transition: all 0.3s ease;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          
          .double-border-btn::before {
              content: '';
              position: absolute;
              top: 6px;
              left: 6px;
              right: 6px;
              bottom: 6px;
              background: transparent;
              border: 1px solid rgba(255, 255, 255, 0.45);
              border-radius: 9999px;
              z-index: 1;
              pointer-events: none;
          }
          
          .double-border-btn:hover {
              background: #111827;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        `}
      </style>

      {/* Insurance Hero Section */}
      <section className="w-full flex justify-between items-start  overflow-hidden relative px-6 py-4">
        {/* Left Side - Content */}
        <div className="flex-1 max-w-22xl pr-2 pt-6">
          {/* Heading */}
          <h1 className="font-sans font-medium text-[5.3rem] leading-[1.1] tracking-tight text-[#0F0F0F]">
            Your Career. Your Earnings. <br /> Fully Protected.
            <span className="inline-block align-middle ml-2">
              <img
                src={star}
                alt="Star"
                className="inline w-[30px] h-[30px] relative -top-4 left-2"
              />
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-[#4B5563] font-sans font-normal text-[1.5rem] leading-relaxed max-w-[900px]">
            We understand the importance of security in your career journey. Our comprehensive insurance coverage ensures your skills, earnings, and career progression are protected at every step.
          </p>

          {/* Call-to-Action Buttons */}

          {/* commmenting for now  */}

          
          {/* <div className="flex flex-col sm:flex-row gap-4 mt-20">
            <button className="double-border-btn relative group hover:opacity-50 hover:cursor-pointer transition-all duration-300">
              Check Your Coverage
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                🚫 Coming Soon 
              </span>
            </button>
            <button className="px-8 py-4 bg-[#FE7642] text-white rounded-full text-base font-semibold hover:bg-gray-400 hover:cursor-pointer transition-all duration-300 shadow-lg relative group">
              File A Claim
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                🚫 Coming Soon 
              </span>
            </button>
          </div> */}
        </div>


        {/* Right Side - Insurance Image with Diagonal Split */}
        <div className="relative lg:w-[700px] h-[500px] flex-shrink-0">
          {/* Main insurance image - already cropped */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={insuranceImage}
              alt="Insurance Coverage - Laptop with people's hands and legs"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};
