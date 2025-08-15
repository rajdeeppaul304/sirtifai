import Image from "next/image"

interface DeelFeature {
  img: string
  alt: string
  title: string
  description: string
}

export const PayrollDeelSection = () => {
  const features: DeelFeature[] = [
    {
      img: "/assets/why-sirtifai/completed_payments.png",
      alt: "Blue compliant payments shield icon",
      title: "Compliant Payments",
      description:
        "Covers EPF/ESI for domestic plans and international payroll for overseas roles.",
    },
    {
      img: "/assets/why-sirtifai/transparent_tracking.png",
      alt: "Green transparent tracking analytics icon",
      title: "Transparent Tracking",
      description: "Transparent payment tracking through Deel™ integration.",
    },
    {
      img: "/assets/why-sirtifai/global_reach.png",
      alt: "Orange global reach globe icon",
      title: "Global Reach",
      description:
        "Used by global companies for seamless international payments.",
    },
  ]

  return (
    <section className="bg-[#FFF8F5] py-14 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Payroll Via Deel™
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Seamless, compliant payment system used by global companies
          </p>
        </div>

        {/* Desktop 3 columns */}
        <div className="hidden md:flex justify-center gap-24">
          {features.map((f) => (
            <div key={f.title} className="w-64 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src={f.img}
                  alt={f.alt}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 tracking-wide">
                {f.title}
              </h3>
              <p className="text-[12px] text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden flex flex-col gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl shadow-lg px-5 py-5 flex items-start gap-4"
            >
              <div className="shrink-0 pt-1">
                <Image src={f.img} alt={f.alt} width={44} height={44} className="w-11 h-11" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-600 leading-snug">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
