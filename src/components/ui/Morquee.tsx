import React from 'react'

export const Morquee = ({logos}: {logos: string[]}) => {
  return (
    <div className="w-full overflow-hidden bg-white border-b border-gray-100">
      <div className="relative py-8">
        {/* Single container with duplicated logos for seamless loop */}
        <div className="flex animate-marquee marquee-content flex gap-4 items-center animate-marquee">
          {/* First set of logos */}
          {logos.map((src, i) => (
            <div key={`first-${i}`} className="flex items-center justify-center flex-shrink-0 mx-16">
              <img src={src} alt={`Partner ${i + 1}`} className="h-16 w-auto opacity-80 object-contain" />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((src, i) => (
            <div key={`second-${i}`} className="flex items-center justify-center flex-shrink-0 mx-16">
              <img src={src} alt={`Partner ${i + 1}`} className="h-16 w-auto opacity-80 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}