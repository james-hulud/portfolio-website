import { prisma } from "@/lib/prisma";

const ContactMe = async () => {
  const submitQuery = () => {
    // validate email first
    console.log("Query submitted");
  };

  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: "test@test.com",
  //   },
  // });

  return (
    <div className="flex flex-col m-10 sm:mx-10 lg:mx-60 items-center">
      <div className="font-extrabold sm:text-4xl md:text-5xl lg:text-6xl pb-10">
        Contact Me
      </div>
      <form
        method="POST"
        className="flex flex-col items-center [&>*]:rounded [&>*]:m-5 [&>*]:p-1 [&>*]:border [&>*]:border-gray [&>*]:w-80 w-full"
      >
        <input
          className="w-80"
          type="text"
          placeholder="Name"
          maxLength={50}
          required
        />
        <input type="email" placeholder="Email" maxLength={50} required />
        <input type="text" placeholder="Subject" maxLength={100} required />
        <textarea
          className="h-52"
          placeholder="Message"
          maxLength={300}
          required
        ></textarea>
        <input
          className="transition duration-200 hover:bg-gray-100"
          type="submit"
        />
      </form>
      {/* pulled from db */}
      {/* Hello, {user?.name} */}
    </div>
  );
};

export default ContactMe;
