"use client";

import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitQuery = () => {
    console.log(name, email, subject, message);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSubject(e.target.value);
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

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
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          className="w-80"
          maxLength={50}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          maxLength={50}
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={handleSubjectChange}
          maxLength={100}
          required
        />
        <textarea
          name="message"
          className="h-52"
          placeholder="Message"
          onChange={handleMessageChange}
          maxLength={300}
          required
        ></textarea>
        <input
          name="submit"
          className="transition duration-200 hover:bg-gray-100"
          type="submit"
          onClick={submitQuery}
        />
      </form>
      {/* pulled from db */}
      {/* Hello, {user?.name} */}
    </div>
  );
};

export default ContactMe;
