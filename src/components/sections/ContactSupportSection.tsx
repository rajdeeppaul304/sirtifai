import { MessageCircle, Mail, Phone } from "lucide-react";

export const ContactSupportSection = () => {
  return (
  <section className="relative w-full bg-black min-h-[500px] md:min-h-[560px]">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/contact/mainContact.jpg')" }}
      >
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/70" />
      </div>

      {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col min-h-[500px] md:min-h-[560px] pb-12 md:pb-16">
        {/* Top Section */}
  <div className="flex-1 flex items-start md:items-center px-5 xs:px-5 md:px-16 lg:px-24 pt-12 pb-6 md:py-0">
          <div className="w-full max-w-[720px] md:pl-2 lg:pl-4 xl:pl-6">
            <h1 className="text-[1.9rem] xs:text-[2.3rem] md:text-[3.9rem] lg:text-[4.25rem] xl:text-[4.5rem] font-bold text-white tracking-tight flex flex-col gap-1 md:gap-2 lg:gap-3 leading-[1.1] md:leading-[1.12] lg:leading-[1.15]">
              <span>Get in Touch</span>
              <span>with Sirtifai Support</span>
            </h1>
            <p className="mt-6 md:mt-7 lg:mt-8 text-[13.25px] xs:text-[14px] md:text-[1.25rem] lg:text-[1.45rem] xl:text-[1.55rem] text-white/90 leading-relaxed max-w-[60ch]">
              Have a question about programmes, payments, certifications, or career support? Our dedicated team is ready to help you through WhatsApp, Email, or Phone.
            </p>

            {/* Contact Options (list style like design) */}
            <div className="mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-6 sm:gap-10">
              {/* WhatsApp */}
              <a
                href="https://wa.me/0000000000"
                aria-label="Chat with us on WhatsApp"
                className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <span className="text-base md:text-xl lg:text-[1.55rem] font-medium">Chat with Us</span>
              </a>
              {/* Email */}
              <a
                href="mailto:support@sirtifai.com"
                aria-label="Email us"
                className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-base md:text-xl lg:text-[1.55rem] font-medium">Email Us</span>
              </a>
              {/* Call */}
              <a
                href="tel:+0000000000"
                aria-label="Call us"
                className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-base md:text-xl lg:text-[1.55rem] font-medium">Call Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Join Now Bar (raised with padding below to let image peek) */}
  <div className="mt-10 md:mt-14 bg-black/40 backdrop-blur-md px-5 xs:px-5 md:px-16 lg:px-24 py-4 md:py-5 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 text-white text-sm sm:text-base lg:text-lg shadow-lg md:mx-10 lg:mx-20 xl:mx-28">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#FE7642] tracking-wide">Join Now :</span>
            <nav className="flex items-center gap-x-4 gap-y-2 flex-wrap">
              <a href="#" className="hover:text-orange-300 transition-colors">SPP Int</a>
              <span className="hidden sm:inline text-blue-400/60">|</span>
              <a href="#" className="hover:text-orange-300 transition-colors">SPP Freelance</a>
              <span className="hidden sm:inline text-blue-400/60">|</span>
              <a href="#" className="hover:text-orange-300 transition-colors">SPP Student</a>
            </nav>
          </div>
          <div className="text-white/50 text-xs sm:text-sm lg:text-base">24/7 Support • Avg response &lt; 24h</div>
        </div>
      </div>
    </section>
  );
};
