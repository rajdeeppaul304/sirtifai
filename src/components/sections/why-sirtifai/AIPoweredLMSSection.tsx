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
    <section className="bg-[#fdf5f1] pt-12 md:pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-end place-items-end">
          {/* Left - Content */}
          <div className="space-y-8 lg:pb-16">
            <h2 className="text-4xl text-center md:text-4xl font-bold text-gray-900">
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
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] object-contain"
                    loading={i === 0 ? "eager" : "lazy"}
                    priority={i === 0}
                  />
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">{f.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="relative flex items-center justify-center w-full h-[430px] md:h-[440px] mt-6 md:mt-10 lg:ml-8 overflow-visible"> */}
            
            <Image src="/group.png" alt="Learners" width={72} height={72} className="w-full h-[157px] object-contain" />
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
