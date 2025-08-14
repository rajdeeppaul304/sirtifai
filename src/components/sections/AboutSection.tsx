import { Share2 } from 'lucide-react';
import { USERS, STEPS } from '../../constants/data';

export const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
          {/* Left Side - About Content */}
          <div className="w-full flex flex-col justify-start items-start gap-20">
            {/* Header */}
            <div className='w-full flex flex-col justify-start items-start gap-3 '>
              <p className="text-orange-500 text-sm font-semibold font-open-sans uppercase tracking-wider mb-3">About Sirtifai</p>
              <h2 className="text-6xl text-gray-900 font-open-sans">Sirtifai Is India's Only</h2>
              <h3 className="text-6xl  text-gray-900 leading-tight font-open-sans tracking-tight">
               <span className='font-bold '>Skill • Practice • Progress</span> Platform
              </h3>
            </div>

            {/* Call to Action Button */}
            {/* <button className="px-8 py-4 bg-orange-500 text-white rounded-xl text-lg font-semibold flex items-center gap-3 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Share2 size={20} />
              Transform Your Career With Sirtifai
            </button> */}

            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-20'>
              <div className='w-full lg:w-[50%] flex justify-center items-center gap-10'>
                <div className='relative'>
                  <img className='relative' src="/assets/male.png" alt="Male" />
                  <img className='absolute bottom-[-30%] left-4' src="/assets/male-name.png" alt="Male" />
                </div>
                
                <div className='flex flex-col gap-4'>
                  <button className="px-8 py-4 bg-[#FC4C03] text-white rounded-full text-lg font-semibold flex items-center gap-3 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <img src="/assets/home/transform-icon.svg" alt="Share Icon" />
                    Transform Your Career With Sirtifai
                  </button> 

                  <div className='relative'>
                    <img className='relative' src="/assets/female.png" alt="Female" />
                    <img className='absolute bottom-[-50%] right-[-40%]' src="/assets/female-name.png" alt="Female Name" />
                  </div>
                </div>
              </div>
                <div className="w-full lg:w-[50%] flex flex-col gap-[62px]">
                  {STEPS.map((step) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={step.id} className="flex items-start gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                            <IconComponent className="text-gray-600" size={28} />
                          </div>
                        </div>
                        <div>
                          <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step {step.id}</p>
                          <h4 className="text-2xl  text-gray-900 mb-3">{step.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};
