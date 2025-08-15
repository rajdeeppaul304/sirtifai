import React from 'react'

export const Morquee = ({logos}: {logos: string[]}) => {
  return (
    <div className="w-full overflow-hidden bg-white border-b border-gray-100">
      <div className="py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of logos */}
          {logos.map((src, i) => (
            <div key={`first-${i}`} className="flex items-center justify-center flex-shrink-0 mx-12">
              <img 
                src={src} 
                alt={`Partner ${i + 1}`} 
                className="h-20 w-auto opacity-80 object-contain" 
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((src, i) => (
            <div key={`second-${i}`} className="flex items-center justify-center flex-shrink-0 mx-12">
              <img 
                src={src} 
                alt={`Partner ${i + 1}`} 
                className="h-20 w-auto opacity-80 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}