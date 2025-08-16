import { Button } from "../../ui/Button"

export const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Be the Next Sirtifai Success Story
        </h2>
        <p className="text-orange-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands who've transformed their careers with our proven SPP methodology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg"
            size="lg"
          >
            Join SPP
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full font-semibold text-lg bg-transparent"
            size="lg"
          >
            Book A Free Demo
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full font-semibold text-lg bg-transparent"
            size="lg"
          >
            Talk to Career Tracker
          </Button>
        </div>
      </div>
    </section>
  )
}
