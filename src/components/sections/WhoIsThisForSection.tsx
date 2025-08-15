import React from "react";

interface Persona {
  icon: string; // path to svg
  title: string;
  description: string;
  badge?: string;
  badgeTone?: "default" | "alt";
}

const personas: Persona[] = [
  {
    icon: "/assets/freelancer/final-students.svg",
    title: "Final Year Students",
    description: "Earn side income legally while completing your studies.",
    badge: "Basic/Pro Plan",
  },
  {
    icon: "/assets/freelancer/laptop-freelance.svg",
    title: "Freelancers on Fiverr",
    description: "Get stable income & support beyond marketplace limitations.",
    badge: "Pro/Elite Plan",
    badgeTone: "alt",
  },
  {
    icon: "/assets/freelancer/job.svg",
    title: "Jobseekers / Dropouts",
    description: "Build a career from home with structured support.",
    badge: "Basic/Pro",
  },
  {
    icon: "/assets/freelancer/house.svg",
    title: "Career-Break Mothers",
    description: "Work remotely with guidance that fits your schedule.",
    badge: "Pro",
  },
  {
    icon: "/assets/freelancer/tech-talent.svg",
    title: "Tier 2/3 Tech Talent",
    description: "Find real projects without scams regardless of location.",
    badge: "All plans",
    badgeTone: "alt",
  },
];

const WhoIsThisForSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FCF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-12">
          Who Is This For?
        </h2>
        <div className="grid gap-6 md:gap-7 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {personas.map((p) => (
            <PersonaCard key={p.title} persona={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PersonaCardProps {
  persona: Persona;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ persona }) => {
  return (
  <div className="group bg-white rounded-md border border-orange-100 shadow-lg hover:shadow-lg transition-all px-7 py-6 flex flex-col justify-between">
      <div>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-orange-50 mb-4 group-hover:scale-110 transition-transform select-none overflow-hidden">
          <img src={persona.icon} alt="" className="w-6 h-6 object-contain" />
        </span>
        <h3 className="font-semibold text-[15px] md:text-base text-slate-900 leading-snug mb-2">
          {persona.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 pr-2">
          {persona.description}
        </p>
      </div>
      {persona.badge && (
        <span
          className={[
            // inline pill that hugs its content; self-start prevents flex stretch
            "self-start inline-flex items-center text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide bg-[#fff0e6] text-orange-400 w-fit",
            persona.badgeTone === "alt" ? "" : "",
          ].join(" ")}
        >
          {persona.badge}
        </span>
      )}
    </div>
  );
};

export default WhoIsThisForSection;