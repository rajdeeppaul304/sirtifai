import { MessageCircle, Mail, Phone } from "lucide-react";

export const ContactSupportSection = () => {
  return (
    <section className="relative w-full min-h-[500px] bg-black">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/contact/mainContact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-[500px]">
        {/* Top content */}
        <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get in Touch with Sirtifai Support
            </h1>
            <p className="text-lg text-white mt-4">
              Have a question about our programmes, payments, certifications,
              or career support? Our dedicated team is here to assist you via
              WhatsApp, Email, or Phone.
            </p>

            {/* Contact Options */}
            <div className="flex flex-wrap gap-6 mt-8">
              {/* WhatsApp */}
              <div className="flex items-center gap-2 text-white cursor-pointer">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <span className="text-lg">Chat with Us</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 text-white cursor-pointer">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-lg">Email Us</span>
              </div>

              {/* Call */}
              <div className="flex items-center gap-2 text-white cursor-pointer">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-lg">Call Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom join now bar */}
        <div className="bg-black/50 py-3 px-8 md:px-16 lg:px-24 flex justify-end items-center gap-4 text-white">
          <span className="font-medium">Join Now :</span>
          <a href="#" className="hover:text-orange-300 transition-colors">
            SPP Int
          </a>
          <span>|</span>
          <a href="#" className="hover:text-orange-300 transition-colors">
            SPP Freelance
          </a>
          <span>|</span>
          <a href="#" className="hover:text-orange-300 transition-colors">
            SPP Student
          </a>
        </div>
      </div>
    </section>
  );
};
