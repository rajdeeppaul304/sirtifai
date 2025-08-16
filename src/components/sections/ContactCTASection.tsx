"use client";
import React from 'react';

export const ContactCTASection = () => {
  return (
  <section className="w-full bg-[#FE7642] text-white font-sans py-14 md:py-20 px-5">
      <style>{`
        .cta-pill{position:relative;display:inline-flex;align-items:center;justify-content:center;font-weight:600;border-radius:9999px;transition:.25s cubic-bezier(.4,0,.2,1);letter-spacing:.05em;white-space:nowrap;}
        .cta-pill:focus-visible{outline:2px solid #fff;outline-offset:2px;}
        @media (max-width: 767px){
          /* Match global mobile pill sizing (.contact-pill-btn pattern) */
          .cta-group-mobile .cta-pill{font-size:.9rem;padding:.8rem 1.9rem;}
          .cta-group-mobile .cta-row .cta-pill{width:100%;}
          .cta-group-mobile .cta-call{width:70%;}
        }
      `}</style>
      <div className="max-w-4xl md:max-w-4xl mx-auto text-center space-y-8 md:space-y-8">
        <h2 className="font-semibold tracking-tight leading-[1.18] md:leading-[1.12] text-[2rem] xs:text-[2.2rem] md:text-[2.85rem] lg:text-[3.05rem] xl:text-[3.2rem]">
          <span className="block">&ldquo;Your Career Questions</span>
          <span className="block">Deserve Instant Answers&rdquo;</span>
        </h2>
        <p className="max-w-xl md:max-w-[52ch] mx-auto text-[13.75px] xs:text-[14.25px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-relaxed md:leading-relaxed text-white/95 tracking-tight">
          Choose the contact method that works best for you — and let us help you take the next step in your career journey.
        </p>
        <div className="cta-group-mobile flex flex-col gap-5 md:hidden">
          <div className="cta-row flex items-center gap-4">
            <a href="https://wa.me/0000000000" className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md">Chat With Us</a>
            <a href="mailto:support@sirtifai.com" className="cta-pill bg-[#1f2937] text-white shadow-sm hover:shadow-md">Send Us An Email</a>
          </div>
          <a href="tel:+0000000000" className="cta-pill cta-call mx-auto bg-[#FF8B5C] text-white/95 shadow-sm hover:shadow-md">Call Us</a>
        </div>
        <div className="hidden md:flex items-center justify-center gap-6 flex-wrap">
          <a href="https://wa.me/0000000000" className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md px-9 py-3.5 text-[12.5px] lg:text-[13px] xl:text-[13.5px] min-w-[170px] justify-center">
            Chat With Us
          </a>
          <a href="mailto:support@sirtifai.com" className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md px-9 py-3.5 text-[12.5px] lg:text-[13px] xl:text-[13.5px] min-w-[170px] justify-center">
            Send Us An Email
          </a>
          <a href="tel:+0000000000" className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md px-9 py-3.5 text-[12.5px] lg:text-[13px] xl:text-[13.5px] min-w-[170px] justify-center">
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};
