import Image from "next/image"

export const LifetimeReentrySection = () => {
  const benefits = [
    {
      img: "/assets/why-sirtifai/rejoin_anytime.png",
      title: "Rejoin Anytime",
      description: "Return to Progress Phase even years later",
    },
    {
      img: "/assets/why-sirtifai/switch_industries.png",
      title: "Switch Industries",
      description: "Change tracks without additional costs",
    },
    {
      img: "/assets/why-sirtifai/global_opportunities.png",
      title: "Global Opportunities",
      description: "Visa-ready support included",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900 mb-10 md:mb-16 leading-tight">
          Lifetime Re-Entry & Career Switch
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
          {/* Image */}
            <div className="flex-1 relative rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/assets/why-sirtifai/lifetime_main.jpg"
                alt="Career guidance session"
                width={880}
                height={520}
                className="w-full h-full object-cover hidden md:block"
                priority
              />
            </div>
          {/* Card */}
          <div className="flex-1 bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-center">
            <div className="space-y-7">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="shrink-0 pt-1">
                    <Image src={b.img} alt={b.title} width={32} height={32} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-[15px] md:text-base font-semibold text-gray-900 leading-snug mb-1">{b.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-snug">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
