import Image from "next/image"

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
        <div className="md:hidden flex flex-col gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 pt-1">
                <Image src={b.img} alt={b.title} width={52} height={52} className="w-13 h-13" />
              </div>
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
