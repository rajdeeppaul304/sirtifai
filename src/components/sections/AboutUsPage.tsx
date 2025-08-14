"use client"
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  CheckCircle2,
  Play,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import heroIllustration from "../../assets/about-header.png";
import dontQuit from "../../assets/dont-quit.jpg";
import bulbsImage from "../../assets/blb.jpg";
import aboutStart from "../../assets/about-start.png";
import aboutUsSectionImg from "../../assets/abous-us-section-1.jpg";
import avatar1 from "../../assets/user-1.png";
import avatar2 from "../../assets/user-2.png";
import avatar3 from "../../assets/user-3.jpg";
import avatar4 from "../../assets/user-4.jpg";
import avatar5 from "../../assets/user-5.jpg";
import avatar6 from "../../assets/user-6.jpg";
// import PartnerLogo0 from "../../assets/Company logo.svg";
// import PartnerLogo1 from "../../assets/Company logo (1).svg";
// import PartnerLogo2 from "../../assets/Company logo (2).svg";
// import PartnerLogo3 from "../../assets/Company logo (3).svg";
// import PartnerLogo4 from "../../assets/Company logo (4).svg";
// import PartnerLogo5 from "../../assets/Company logo (5).svg";
// import PartnerLogo6 from "../../assets/Company logo (6).svg";

import UniversityPartners from "./UniversityPartners";

import MissionVisionGoals from './MissionVisionGoals'; 
import UpcomingProjectsHero from './UpcomingProjects'; 
import TeamMemberCarousel from './TeamMember'; 
import CareerSection from './CareerSection'; 

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

import  { AboutSection } from "./AboutSection";


export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#FEF7F1]">
      {/* Hero Section (Figma: Learn. Earn. Get Placed. Rise.) */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Learn. Earn. Get
              <br />
              Placed. Rise.
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              India's first Job-First Education Ecosystem, building skilled
              professionals with real work experience and lifetime career
              support.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold text-orange-600">
                Join Now :
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#spp-int"
                  className="text-sm text-orange-600 font-medium"
                >
                  International
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#spp-freelance"
                  className="text-sm text-orange-600 font-medium"
                >
                  Freelance
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#spp-student"
                  className="text-sm text-orange-600 font-medium"
                >
                  SPP Student
                </a>
              </div>
            </div>
          </div>
          {/* Right illustration */}
          <div className="relative">
            <img
              src={heroIllustration.src}
              alt="Hero illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Sertifai (Figma) */}
      <section className="py-14 bg-gradient-to-b from-white to-orange-50/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image collage (Don't Quit + Bulb image with overlays) */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={dontQuit.src}
                alt="Don't Quit"
                className="rounded-2xl shadow-xl object-cover h-72 w-full md:h-[320px]"
              />
              <img
                src={bulbsImage.src}
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
                      src={a.src}
                      alt="avatar"
                      className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    />
                  )
                )}
              </div>
            </div>
            {/* Ratings badge */}
            <div className="absolute -bottom-4 left-10 bg-white/95 backdrop-blur rounded-xl shadow p-3 border border-gray-100">
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
            <p className="tracking-[0.4em] text-xs text-orange-600 font-semibold mb-2">
              ABOUT
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Sertifai
            </h2>
            <p className="text-gray-600 mb-4">
              Sirtifai is a career transformation platform that connects
              learning directly with earning and job placement. Through our
              flagship SPP (Skill → Practice → Progress) model, we ensure
              learners gains:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
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
            {/* <div className="mt-6 flex items-center gap-4">
              <Button variant="primary" size="md">
                View More
              </Button>
              <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div> */}
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
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
    
    {/* Left column */}
    <div className="flex flex-col gap-8">
      {/* Intro text */}
      <div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How Sirtifai is different?
        </h2>
        <p className="text-gray-600 text-lg">
          Sirtifai is a career transformation platform that connects
          learning directly with earning and job placement.
        </p>
      </div>

      {/* Global Certifications card */}
      <div className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-8 min-h-[220px] w-[360px] h-[250px] mt-5">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={aboutStart.src}
            alt="feature icon"
            className="w-16 h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
          />
          <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
            Global Certifications
          </h3>
        </div>
        <div className="h-px w-full bg-black my-5" />
        <p className="text-[15px] text-gray-700 leading-7">
          NSQF Certification: Globally recognized certification, trusted by employers in India, MENA, and SEA.
        </p>
      </div>
    </div>

    {/* Right column (2×2 grid) */}
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {[
        {
          title: "Income from Day 1",
          desc: "Earn ₹12K–₹35K/month during the Practice Phase.",
        },
        {
          title: "Verified Payroll (DEEL™)",
          desc: "EPF/ESI coverage for domestic plans, and international payroll for overseas roles.",
        },
        {
          title: "Lifetime Re-entry & Career Switch Support",
          desc: "Switch industries, upgrade skills, and re-enter the job market without extra programme cost.",
        },
        {
          title: "Skill-to-job execution gap",
          desc: "Solved for all learners, from Tier 1 to Tier 3. Built-in career analytics and AI resume tools.",
        },
      ].map((feature) => (
        <div
          key={feature.title}
          className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-8 min-h-[220px] w-[360px] h-[250px]"
        >
          <div className="flex items-start gap-4 mb-4">
            <img
              src={aboutStart.src}
              alt="feature icon"
              className="w-16 h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
            />
            <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
              {feature.title}
            </h3>
          </div>
          <div className="h-px w-full bg-black my-5" />
          <p className="text-[15px] text-gray-700 leading-7">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* <MissionVisionGoals/> */}

<AboutSection/>

<UpcomingProjectsHero/>

{/* <TeamMemberCarousel/> */}

<UniversityPartners/>

<CareerSection/>



    </div>
  );
};

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "What is the SPP model?",
      a: "SPP stands for Skill • Practice • Progress — a framework that connects learning with real projects and measurable career outcomes.",
    },
    {
      q: "Do you provide placement support?",
      a: "Yes. We provide structured career services including portfolio reviews, mock interviews, and job/freelance opportunity matching.",
    },
    {
      q: "Can I join while studying or working?",
      a: "Absolutely. Programs are flexible with part-time options and remote-friendly practice phases.",
    },
    {
      q: "Is there global opportunity support?",
      a: "We work with verified partners to enable global career pathways including visas for eligible programs.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q} className="bg-[#FEF7F1] rounded-xl">
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-semibold text-gray-900">{item.q}</span>
              <span
                className={`text-orange-500 text-xl ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && <div className="px-5 pb-5 text-gray-700">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
};
