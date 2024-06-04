import About from "@/components/about/About";
import CurrentActivity from "@/components/about/CurrentActivity";
import SkillsSection from "@/components/about/SkillsSection";

const app = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-80">
      <About />
      <CurrentActivity />
      <SkillsSection />
    </div>
  );
};

export default app;
