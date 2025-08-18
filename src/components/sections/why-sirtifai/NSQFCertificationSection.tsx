import Image from "next/image"
import { FaShieldAlt } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";


export const NSQFCertificationSection = () => {
  // Ordered per new design (Desktop: orange, green, purple)
  const benefits = [
    {
      img: "/assets/why-sirtifai/enhanced_credibility.png",
      title: "Enhanced Credibility",
      description: "Adds credibility alongside a real work portfolio.",
      ring: "ring-orange-200",
      bg: "bg-[#FF6A2A]",
    },
    {
      img: "/assets/why-sirtifai/verfication_ready.png",
      title: "Verification Ready",
      description: "Credentials are verification-ready for recruiters.",
      ring: "ring-green-200",
      bg: "bg-[#16A34A]",
    },
    {
      img: "/assets/why-sirtifai/globally_recognised.png",
      title: "Globally Recognized",
      description: "Certification trusted by employers in India, MENA, and SEA.",
      ring: "ring-violet-200",
      bg: "bg-[#4F46E5]",
    },
  ]

  const responsiveBenefits = [
    {
      img: (<RiGlobalFill className="text-[1.875rem] text-[#3B82F6]"/>),
      title: "Globally Recognized",
      description: "Trusted in India, MENA, and SEA",
      ring: "ring-violet-200",
      bg: "bg-[#3B82F6]",
    },
    {
      img: (<FaShieldAlt className="text-[1.875rem] text-[#10B981]"/>),
      title: "Verification Ready",
      description: "Instant credibility with recruiters",
      ring: "ring-green-200",
      bg: "bg-[#10B981]",
    }
  ]

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">NSQF Certification</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Globally recognized certification that employers trust
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-center gap-20">
          {benefits.map((b, i) => (
            <div key={i} className="w-56 text-center">
              <div className="mx-auto mb-6 flex items-center justify-center">
                <Image src={b.img} alt={b.title} width={72} height={72} className="w-18 h-18" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{b.title}</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden flex gap-6">
          {responsiveBenefits.map((b, i) => (
            <div key={i} className="w-full flex flex-col items-center justify-center gap-4 text-center">
              {b.img}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 leading-snug">{b.title}</h3>
                <p className="text-xs text-gray-600 leading-snug">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
