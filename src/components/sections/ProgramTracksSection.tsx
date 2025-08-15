import { CheckCircle } from 'lucide-react';
import { PROGRAM_TRACKS } from '../../constants/data';
import { Button } from '../ui/Button';
import { BsCheckCircleFill } from 'react-icons/bs';

export const ProgramTracksSection = () => {
  return (
    <section className="py-20 bg-[#FEF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-open-sans text-lg font-semibold uppercase tracking-wider mb-3">
            Program Tracks Overview
          </h2>
          <h3 className="text-[10vw] leading-tight sm:leading-none sm:text-5xl font-semibold sm:font-bold text-gray-900 font-open-sans">
            Choose Your Path To <span className="text-orange-500">Success</span>
          </h3>
        </div>

        {/* Program Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-end place-items-end">
          {PROGRAM_TRACKS.map((track, index) => {
            const IconComponent = track.icon;
            const isHighlighted = track.variant === 'highlighted';
            
            return (
              <div
                key={track.id}
className={`rounded-2xl w-full ${index % 2 === 0 ? 'h-[538px]' : 'h-[570px]'} p-8 transition-all duration-300 hover:scale-105 ${
  isHighlighted
    ? 'order-1 md:order-none bg-orange-500 text-white shadow-2xl'
    : 'order-2 md:order-none bg-white text-gray-900 shadow-lg hover:shadow-xl'
}`}

              >
                {/* Icon */}
                
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isHighlighted ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  <IconComponent 
                    size={32} 
                    className={isHighlighted ? 'text-white' : 'text-gray-600'} 
                  />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold mb-3 text-center">
                  {track.title}
                </h4>

                {/* Subtitle */}
                <p className={`text-center mb-8 ${
                  isHighlighted ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {track.subtitle}
                </p>

                <div className={`w-full flex flex-col justify-center items-center p-6 rounded-xl gap-6 text-gray-900 ${
                  isHighlighted
                    ? ' bg-white'
                    : 'bg-[#F9FAFB]'
                }`}>
                {/* Features */}
                <div className="sm:space-y-4 mb-8">
                  {track.features?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <BsCheckCircleFill 
                        size={20} 
                        className={`flex-shrink-0 mt-0.5 text-orange-500`} 
                      />
                      <span className={`text-sm ${
                        isHighlighted ? '' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="text-center w-60">
                  <Button
                    variant={isHighlighted ? 'primary' : 'outline'}
                    size="md"
                    className={`w-full h-[60px] ${
                      isHighlighted 
                        ? 'bg-orange-50 text-orange-500 hover:bg-gray-50 border-white' 
                        : 'border-orange-500 text-orange-500 hover:bg-white'
                    }`}
                  >
                    {track.buttonText}
                  </Button>
                </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
