import Practice from "./pricing/practice";
import Progress from "./pricing/progress";
import SkillPhase from "./pricing/skill";

const Pricing = ({
  variant,
  setVariant,
}: {
  variant: string;
  setVariant: (val: string) => void;
}) => {
  return (
    <section className="md:min-h-screen w-screen bg-[#FEF7F1] py-4 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8  justify-center min-h-screen w-screen">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-[30px] font-open-sans md:text-[60px] font-[600] text-black capitalize text-center">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#4B5563] fon-inter text-base max-w-[538px] text-center mt-4">
            One-time payment for lifetime access to our comprehensive program
            with on going support.
          </p>
        </div>

        <div
          className="p-2 rounded-full md:border md:border-[#FC4C0373] md:bg-white mt-4 md:mt-8 
                flex flex-col md:flex-row items-center justify-center 
                space-y-4 md:space-y-0 md:space-x-6"
        >
          <button
            onClick={() => setVariant("skill")}
            className={`${
              variant === "skill" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
            } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
          >
            Skill Phase
          </button>
          <button
            onClick={() => setVariant("practice")}
            className={`${
              variant === "practice" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
            } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
          >
            Practice Phase
          </button>
          <button
            onClick={() => setVariant("progress")}
            className={`${
              variant === "progress" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
            } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
          >
            Progress Phase
          </button>
        </div>

        {variant == "skill" && <SkillPhase />}

        {variant === "practice" && <Practice />}
        {variant === "progress" && <Progress />}
      </div>
    </section>
  );
};

export default Pricing;
