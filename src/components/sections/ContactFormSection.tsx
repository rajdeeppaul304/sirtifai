"use client";

import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export const ContactFormSection = () => {
  return (
    <section className="w-full pt-0 pb-14 md:py-20 bg-[#FEF7F1] font-sans">
      <style>{`
        /* Mobile pill button + typography adjustments */
        @media (max-width: 767px){
          .contact-pill-btn{position:relative;display:inline-flex;align-items:center;gap:.85rem;background:#1f2937;color:#fff;font-weight:600;font-size:.9rem;padding:.8rem 1.9rem;border-radius:9999px;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.06);} 
          .contact-pill-btn::before{content:'';position:absolute;inset:6px;border:1px solid rgba(255,255,255,.45);border-radius:9999px;pointer-events:none;} 
          .contact-pill-btn:hover{background:#111827;} 
        }
      `}</style>
  <div className="mx-auto px-0 sm:px-6 max-w-none md:max-w-6xl">
  <div className="bg-white md:rounded-[34px] rounded-none md:shadow-[0_6px_18px_-4px_rgba(0,0,0,0.08)] shadow-none md:border border-0 relative overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-[1fr_520px] gap-14 px-14 pt-16 pb-20">
            {/* Left: Heading + Form */}
            <div>
              <header className="mb-10">
                <h2 className="text-[3.2rem] xl:text-[3.4rem] font-semibold tracking-tight text-black leading-[1.05]">
                  Contact <span className="text-[#D8643C] font-medium">us</span>
                </h2>
                <p className="mt-2 text-base xl:text-lg text-neutral-600">Let&apos;s get in touch!</p>
              </header>

              <form className="space-y-8 max-w-2xl">
                {[
                  { id: "fullName", label: "Full Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone No.", type: "tel" },
                  { id: "query", label: "Query", type: "text" },
                ].map(f => (
                  <div key={f.id} className="group">
                    <label htmlFor={f.id} className="block text-[14px] xl:text-[15px] tracking-wide font-medium text-black mb-1">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      className="w-full bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[15px] xl:text-[16px] py-1.5"
                      placeholder=""
                    />
                  </div>
                ))}
                <div className="group">
                  <label htmlFor="message" className="block text-[14px] xl:text-[15px] tracking-wide font-medium text-black mb-1">
                    Message For Us
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full resize-none bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[15px] xl:text-[16px] py-1.5"
                  />
                </div>

                <div className="pt-2">
                  <label className="inline-flex items-start gap-2 text-[12px] xl:text-[13px] leading-relaxed text-neutral-600 cursor-pointer select-none">
                    <input type="checkbox" className="mt-[3px] accent-[#D8643C]" />
                    <span>Subscribe to our Newsletter.</span>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="mx-auto block w-72 rounded-md bg-gradient-to-r from-[#D8643C] to-[#EA7A50] text-white text-[15px] xl:text-[16px] font-medium tracking-wide py-3.5 transition-colors hover:brightness-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8643C]/50"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Map & Socials */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-full h-[250px] rounded-md overflow-hidden border border-black/15 shadow-sm">
                <Image
                  src="/assets/contact/Maps.png"
                  alt="Map"
                  fill
                  sizes="480px"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur px-3 py-2 rounded-sm shadow ring-1 ring-black/5 w-[120px]">
                  <p className="text-[10px] font-semibold text-black leading-tight">Company name</p>
                  <p className="text-[9px] text-neutral-600 leading-tight mt-0.5">35 W 36th St.<br />NY 10018</p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-5 text-black">
                <a href="#" aria-label="Instagram" className="hover:text-[#D8643C] transition-colors"><Instagram size={16} strokeWidth={1.8} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-[#D8643C] transition-colors"><Twitter size={16} strokeWidth={1.8} /></a>
                <a href="#" aria-label="Facebook" className="hover:text-[#D8643C] transition-colors"><Facebook size={16} strokeWidth={1.8} /></a>
                <a href="#" aria-label="YouTube" className="hover:text-[#D8643C] transition-colors"><Youtube size={16} strokeWidth={1.8} /></a>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col">
            <div className="relative w-full h-52 sm:h-60 overflow-hidden">
              <Image
                src="/assets/contact/Maps.png"
                alt="Map"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute top-2 right-2 bg-white/95 backdrop-blur px-3 py-2 rounded-sm shadow ring-1 ring-black/5 w-[120px]">
                <p className="text-[10px] font-semibold text-black leading-tight">Company name</p>
                <p className="text-[9px] text-neutral-600 leading-tight mt-0.5">35 W 36th St.<br />NY 10018</p>
              </div>
            </div>
            <div className="px-4 pt-6 pb-9">
              <header className="mb-7">
                <h2 className="text-[1.85rem] font-semibold tracking-tight text-black leading-[1.12]">
                  Contact <span className="text-[#D8643C] font-medium">us</span>
                </h2>
                <p className="mt-1 text-[12.75px] text-neutral-600 leading-relaxed">Let&apos;s get in touch!</p>
              </header>
              <form className="space-y-5">
                {[
                  { id: "fullName_m", label: "Full Name", type: "text" },
                  { id: "email_m", label: "Email", type: "email" },
                  { id: "phone_m", label: "Phone no.", type: "tel" },
                  { id: "query_m", label: "Query", type: "text" },
                ].map(f => (
                  <div key={f.id} className="group">
                    <label htmlFor={f.id} className="block text-[12.25px] tracking-wide font-medium text-black mb-1">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      className="w-full bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[13px] py-1 tracking-tight"
                    />
                  </div>
                ))}
                <div className="group">
                  <label htmlFor="message_m" className="block text-[12.25px] tracking-wide font-medium text-black mb-1">
                    Message For Us
                  </label>
                  <textarea
                    id="message_m"
                    rows={3}
                    className="w-full resize-none bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[13px] py-1 tracking-tight"
                  />
                </div>
                <label className="inline-flex items-start gap-2 text-[10.5px] leading-relaxed text-neutral-600 cursor-pointer select-none pt-1">
                  <input type="checkbox" className="mt-[3px] accent-[#D8643C]" />
                  <span>Subscribe to our Newsletter</span>
                </label>
                <div className="flex justify-center pt-1">
                  <button
                    type="submit"
                    className="contact-pill-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="mt-8">
                <p className="text-center text-[13.5px] font-medium text-black mb-4 tracking-wide">
                  Follow us on :
                </p>
                <div className="flex items-center justify-center gap-5 text-black">
                  <a href="#" aria-label="Instagram" className="hover:text-[#D8643C] transition-colors"><Instagram size={17} strokeWidth={1.8} /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-[#D8643C] transition-colors"><Twitter size={17} strokeWidth={1.8} /></a>
                  <a href="#" aria-label="Facebook" className="hover:text-[#D8643C] transition-colors"><Facebook size={17} strokeWidth={1.8} /></a>
                  <a href="#" aria-label="YouTube" className="hover:text-[#D8643C] transition-colors"><Youtube size={17} strokeWidth={1.8} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
