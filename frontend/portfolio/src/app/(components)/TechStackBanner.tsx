import Image from "next/image";

const TechStackBanner = () => {
  return (
    <div className="flex flex-col m-10 lg:mx-60 items-center pb-10">
      <div className="font-bold">Tech Stack</div>
      <div className="flex flex-wrap [&>*]:m-4 [&>*]:object-contain">
        <Image src="/techstack/React-icon.svg" width={50} height={50} alt="react-icon"/>
        <Image src="/techstack/Typescript_logo_2020.svg" width={50} height={50} alt="react-icon"/>
        <Image src="/techstack/Tailwind_CSS_Logo.svg" width={50} height={50} alt="react-icon"/>
        <Image src="/techstack/Postgresql_elephant.svg" width={50} height={50} alt="react-icon"/>
        <Image src="/techstack/nextjs.svg" width={50} height={50} alt="react-icon"/>
        <Image src="/techstack/flask.svg" width={50} height={50} alt="react-icon"/>
      </div>
    </div>
  );
};

export default TechStackBanner;
