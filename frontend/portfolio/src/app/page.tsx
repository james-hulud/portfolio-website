import About from "../components/about/About";
import TechStackBanner from "../components/about/TechStackBanner";
import RecentProject from "@/components/projects/RecentProject";
import Landing from "@/components/landing/Landing";

const Page = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-80">
      <Landing />
      <RecentProject />
      <About />
      <TechStackBanner />
    </div>
  );
};

export default Page;
