import Image from "next/image"
export const AIPoweredLMSSection = () => {
  const features = [
    {
      img: "/assets/why-sirtifai/personalsed_learning_paths.png",
      title: "Personalized Learning Paths",
      alt: "Personalized Learning Paths icon",
    },
    {
      img: "/assets/why-sirtifai/career_analytics.png",
      title: "Career Analytics & AI Resume",
      alt: "Career Analytics icon",
    },
    {
      img: "/assets/why-sirtifai/real_time_progress.png",
      title: "Real-time Progress Tracking",
      alt: "Real-time Progress icon",
    },
  ]

  return (
    <section className="bg-[#fdf5f1] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI-Powered LMS – LearnX
            </h2>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-lg"
                >
                  <Image
                    src={f.img}
                    alt={f.alt}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                    loading={i === 0 ? "eager" : "lazy"}
                    priority={i === 0}
                  />
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">{f.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual cluster (mirrors learners hero style) */}
          <div className="relative flex items-center justify-center w-full h-[430px] md:h-[440px] mt-6 md:mt-10 lg:ml-8 overflow-visible">
            {/* Filled soft orange circle */}
            <div className="absolute w-80 h-80 md:w-[19rem] md:h-[19rem] rounded-full bg-[#FFE9DF]" />
            {/* Outer ring */}
            <div className="absolute w-80 h-80 md:w-[19rem] md:h-[19rem] rounded-full ring-1 ring-orange-300/40" />
            {/* Center bubble */}
            <div className="absolute w-16 h-16 md:w-32 md:h-32 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden">
              <Image src="/assets/learners/center.gif" alt="AI center animation" width={160} height={160} className="w-full h-full object-cover" />
            </div>
            {/* Profile nodes */}
            <Image src="/assets/learners/l.png" alt="Learner" width={72} height={72} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-16 md:h-16 rounded-full border-4 border-white shadow-md object-cover" />
            <Image src="/assets/learners/l.png" alt="Learner" width={72} height={72} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-16 h-16 md:w-16 md:h-16 rounded-full border-4 border-white shadow-md object-cover" />
            <Image src="/assets/learners/l.png" alt="Learner" width={72} height={72} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 md:w-16 md:h-16 rounded-full border-4 border-white shadow-md object-cover" />
            <Image src="/assets/learners/l.png" alt="Learner" width={72} height={72} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-16 h-16 md:w-16 md:h-16 rounded-full border-4 border-white shadow-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
