"use client"
import { CERTIFICATIONS } from '../../constants/data';

export const CertificationsSection = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Certifications */}
        <div className="mb-20">
          {/* Header - Left Aligned */}
          <div className="text-left mb-12">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
              RECOGNISED CERTIFICATION BLOCK
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Certifications That Employers Trust
            </h2>
          </div>

          {/* Certification Logos - Centered */}
          <div className="flex flex-wrap justify-center items-center gap-40">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center">
                <div className="w-40 h-24 flex items-center justify-center mb-4">
                  {/* Logo images */}
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="h-20 w-auto object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  {/* Fallback text */}
                  <div className={`text-3xl font-bold ${cert.color} hidden`}>
                    {cert.name}
                  </div>
                </div>
                {/* AWS has orange swoosh */}
                {cert.id === 'aws' && (
                  <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
