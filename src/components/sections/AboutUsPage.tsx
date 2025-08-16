"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";


// import Link from 'next/link';


const heroIllustration = "/assets/about-header.png";
const dontQuit = "/assets/dont-quit.jpg";
const bulbsImage = "/assets/blb.jpg";
const aboutStart = "/assets/about-start.png";
const avatar1 = "/assets/user-1.png";
const avatar2 = "/assets/user-2.png";
const avatar3 = "/assets/user-3.jpg";
const avatar4 = "/assets/user-4.jpg";
const avatar5 = "/assets/user-5.jpg";
const avatar6 = "/assets/user-6.jpg";


import UniversityPartners from "./UniversityPartners";

import UpcomingProjectsHero from "./UpcomingProjects";
import TeamMemberCarousel from "./TeamMember";
import CareerSection from "./CareerSection";

const industries = [
  "HR",
  "Finance",
  "Legal",
  "Education",
  "Construction",
  "Healthcare",
  "Aerospace",
  "BFSI",
];

import { AboutSection } from "./AboutSection";

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#FEF7F1]">
      {/* Hero Section (Figma: Learn. Earn. Get Placed. Rise.) */}
  <section className="pt-2 sm:pt-10 md:pt-16 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            {/* Heading */}
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Learn. Earn. Get
              <br />
              Placed. Rise.
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-5 text-[#989491] max-w-xl">
              India's first Job-First Education Ecosystem, building skilled
              professionals with real work experience and lifetime career
              support.
            </p>

            {/* Join Now Section */}
            <div className="mt-6 sm:mt-8 w-full overflow-hidden text-left">
              <div
                className="flex flex-nowrap items-center justify-start gap-2 sm:gap-4 w-full whitespace-nowrap leading-none text-[clamp(0.95rem,3vw,1rem)] md:text-[clamp(0.85rem,2vw,1.4rem)]"
              >
                {/* Label */}
                <span className="font-semibold text-orange-600">
                  Join Now :
                </span>

                {/* Links */}
                <a href="/sirtifai-international" className="text-orange-600 font-medium">
                  International
                </a>
                <span className="text-orange-600">|</span>
                <a
                  href="/freelancer"
                  className="text-orange-600 font-medium"
                >
                  Freelance
                </a>
                <span className="text-orange-600">|</span>
                <a href="/program" className="text-orange-600 font-medium">
                  SPP Student
                </a>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <img
              src={heroIllustration}
              alt="Hero illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Sertifai (Figma) */}
      <section className="py-10 sm:py-14 bg-[RGB 254 247 241]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image collage (hidden on mobile) */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={dontQuit}
                alt="Don't Quit"
                className="rounded-2xl shadow-xl object-cover h-72 w-full md:h-[320px]"
              />
              <img
                src={bulbsImage}
                alt="Bulbs"
                className="rounded-2xl shadow-xl object-cover h-72 w-full md:h-[320px]"
              />
            </div>

            {/* KPI card */}
            <div className="absolute -top-8 left-8 md:left-16 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg border border-orange-100 w-[220px]">
              <p className="text-lg font-extrabold text-gray-900">30,000+</p>
              <p className="text-[10px] text-gray-500">
                Sales in July 2021 with 5 star ratings and happy clients.
              </p>
              <div className="mt-3 h-px bg-gray-200" />
              <div className="mt-3 flex -space-x-2">
                {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6].map(
                  (a, i) => (
                    <img
                      key={i}
                      src={a}
                      alt="avatar"
                      className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    />
                  )
                )}
              </div>
            </div>

            {/* Ratings badge */}
            <div className="absolute bottom-4 left-10 bg-white/95 backdrop-blur rounded-xl shadow p-3 border border-gray-100">
              <p className="text-[11px] text-gray-700 font-semibold mb-1">
                Best ratings
              </p>
              <div className="flex gap-1 text-base">
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="tracking-[0.25em] sm:tracking-[0.4em] text-[11px] sm:text-xs text-orange-600 font-semibold mb-2">
              ABOUT
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
              Why Sertifai
            </h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
              Sirtifai is a career transformation platform that connects
              learning directly with earning and job placement. Through our
              flagship SPP (Skill → Practice → Progress) model, we ensure
              learners gain:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-5 text-sm sm:text-base leading-relaxed">
              <li>
                Practical skills through structured, industry-aligned training.
              </li>
              <li>
                Paid work experience with real companies via verified projects.
              </li>
              <li>
                Career support for job switches, re-entry, and global placement
                across 24 industries.
              </li>
              <li>
                Trusted by employers and universities in India, MENA, and SEA.
              </li>
            </ul>
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              
              <Button className="rounded-full" variant="primary" size="md">
                View More
              </Button>
              {/* <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Feature Image Section (from Figma node 177-1036) */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 shadow-xl">
            <img
              src={aboutUsSectionImg}
              alt="About us section"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* Industries ribbon */}
  {/* White gap between Why Sertifai and ribbon */}
  <div className="h-8 md:h-12 bg-white w-full"></div>

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 overflow-hidden">
          <div className="relative w-full">
            {/* Marquee wrapper */}
            <div className="flex whitespace-nowrap animate-marquee">
              {industries.concat(industries).map((item, idx) => (
                <span
                  key={idx}
                  className="italic mx-5 opacity-90 text-lg flex-shrink-0"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tailwind + custom animation */}
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
      </section>

      {/* How Sirtifai is different? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {/* Intro text */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                How Sirtifai is different?
              </h2>
              <p className="text-sm ext-gray-600 sm:text-lg max-w-lg mx-auto lg:mx-0">
                Sirtifai is a career transformation platform that connects
                learning directly with earning and job placement.
              </p>
            </div>

            {/* Global Certifications card */}
            <div className="hidden md:block rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mt-0 sm:mt-5">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
                  Global Certifications
                </h3>
              </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <p className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7">
                NSQF Certification: Globally recognized certification, trusted
                by employers in India, MENA, and SEA.
              </p>
            </div>
          </div>

          {/* Right column (2×2 grid on desktop, stacked on mobile) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Income from Day 1 */}
            <div className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
                  Income from Day 1
                </h3>
              </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <p className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7">
                Earn ₹12K–₹35K/month during the Practice Phase.
              </p>
            </div>
            {/* Verified Payroll */}
            <div className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
                  Verified Payroll (DEEL™)
                </h3>
              </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <p className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7">
                EPF/ESI coverage for domestic plans, and international payroll for overseas roles.
              </p>
            </div>
            {/* Mobile-only Global Certifications (reordered) */}
            <div className="md:hidden rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full mx-auto">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
                  Global Certifications
                </h3>
              </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <p className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7">
                NSQF Certification: Globally recognized certification, trusted by employers in India, MENA, and SEA.
              </p>
            </div>
            {/* Lifetime Re-entry */}
            <div className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
                  Lifetime Re-entry & Career Switch Support
                </h3>
              </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <p className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7">
                Switch industries, upgrade skills, and re-enter the job market without extra programme cost.
              </p>
            </div>
            {/* Skill-to-job */}
            <div className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
                  Skill-to-job execution gap
                </h3>
              </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <p className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7">
                Solved for all learners, from Tier 1 to Tier 3. Built-in career analytics and AI resume tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <MissionVisionGoals/> */}

      <AboutSection />
  {/* Gap between Our Mission (AboutSection) and Upcoming Projects */}
  <div className="h-8 md:h-12 bg-white w-full" />

  <UpcomingProjectsHero />

  {/* Gap between Upcoming Projects and Team Members */}
  <div className="h-8 md:h-12 bg-white w-full" />

  <TeamMemberCarousel />

  {/* Gap between Team Members and University Partners */}
  <div className="h-8 md:h-12 bg-white w-full" />

  <UniversityPartners />

  {/* Gap between University Partners and Career Section */}
  <div className="h-8 md:h-12 bg-white w-full" />

  <CareerSection />
    </div>
  );
};