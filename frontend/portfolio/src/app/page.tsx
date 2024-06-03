import About from "../components/about/About";
import TechStackBanner from "../components/about/TechStackBanner";
import RecentProject from "@/components/projects/RecentProject";
import Landing from "@/components/landing/Landing";
import SkillsSection from "@/components/about/SkillsSection";

const app = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-80">
      <Landing />
      <RecentProject />
      <About />
      <TechStackBanner />
      <SkillsSection />
    </div>
  );
};

export default app;
