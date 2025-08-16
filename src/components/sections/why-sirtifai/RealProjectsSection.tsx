import Image from "next/image";

export const RealProjectsSection = () => {
  return (
    <section className="bg-[#FFF8F5] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 leading-tight">
            Real Projects, Not Just Courses
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Work on verified industry projects from real companies
          </p>
        </div>

        {/* Desktop 3-column cards */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-4">
          <CardLogo
            img="/assets/why-sirtifai/verified_industry_projects_logo.png"
            imgAlt="Verified industry projects icon"
            accent="blue"
            title="Verified Industry Projects"
            desc="Work on verified industry projects from real companies, not simulations." />
          <CardLogo
            img="/assets/why-sirtifai/portfolio_building.png"
            imgAlt="Portfolio building icon"
            accent="green"
            title="Portfolio Building"
            desc="Deliverables get mentor reviews to build your portfolio." />
          <CardEarningsLogo />
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden flex flex-col gap-4 mb-8">
          <MobileCardLogo
            img="/assets/why-sirtifai/verified_industry_projects_logo.png"
            imgAlt="Verified projects icon"
            accent="blue"
            title="Verified Industry Projects"
            desc="Work on real company projects, not simulations" />
          <MobileCardLogo
            img="/assets/why-sirtifai/portfolio_building.png"
            imgAlt="Portfolio building icon"
            accent="green"
            title="Portfolio Building"
            desc="Mentor-reviewed deliverables for your portfolio" />
          <MobileCardLogo
            img="/assets/why-sirtifai/earn_while_learning.png"
            imgAlt="Earn while learning icon"
            accent="orange"
            title="Earn ₹12K–₹35K/month"
            desc="Get paid during the Practice Phase" />
          <div className="rounded-3xl overflow-hidden mt-2">
            <Image
              src="/assets/why-sirtifai/real_projects_mobile.png"
              alt="Real projects mobile illustration"
              width={800}
              height={620}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// (Removed legacy CardProps interface after refactor to image-based cards)

const CardLogo = ({ img, imgAlt, title, desc, accent }: { img: string; imgAlt: string; title: string; desc: string; accent: "blue"|"green"|"orange" }) => {
  const accentStyles: Record<string, { wrap: string }> = {
    blue: { wrap: "bg-blue-600" },
    green: { wrap: "bg-green-600" },
    orange: { wrap: "bg-orange-500" },
  };
  return (
  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="mb-6">
        <div className={`w-9 h-9 rounded-md flex items-center justify-center ${accentStyles[accent].wrap}`}>
          <Image src={img} alt={imgAlt} width={20} height={20} className="w-5 h-5 object-contain invert brightness-0 filter-none" />
        </div>
      </div>
      <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">{title}</h3>
      <p className="text-[13px] text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

const CardEarningsLogo = () => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="mb-6">
      <div className="w-9 h-9 rounded-md flex items-center justify-center bg-orange-500">
        <Image src="/assets/why-sirtifai/earn_while_learning.png" alt="Earn while learning icon" width={20} height={20} className="w-5 h-5 object-contain invert brightness-0 filter-none" />
      </div>
    </div>
    <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">Earn While Learning</h3>
    <p className="text-[13px] text-gray-600 leading-relaxed mb-6">Earn ₹12K–₹35K/month during the Practice Phase.</p>
    <div className="mt-auto">
  <div className="rounded-lg px-4 py-3 inline-block shadow-inner shadow-orange-100/40">
        <p className="text-green-600 font-semibold text-sm leading-none mb-1">₹25,000</p>
        <p className="text-[11px] text-gray-500 leading-none">This month&apos;s earnings</p>
      </div>
    </div>
  </div>
);

const MobileCardLogo = ({ img, imgAlt, title, desc, accent }: { img: string; imgAlt: string; title: string; desc: string; accent: "blue"|"green"|"orange" }) => {
  const accentStyles: Record<string, string> = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    orange: "bg-orange-500",
  };
  return (
  <div className="flex items-start gap-4 bg-white rounded-lg px-4 py-5 shadow-lg">
      <div className={`w-9 h-9 rounded-md flex items-center justify-center ${accentStyles[accent]}`}>
        <Image src={img} alt={imgAlt} width={20} height={20} className="w-5 h-5 object-contain invert brightness-0 filter-none" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">{title}</h3>
        <p className="text-xs text-gray-600 leading-snug">{desc}</p>
      </div>
    </div>
  );
};
