"use client";

import { ChangeEvent, SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const ContactMe = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitQuery = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    let templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    const TEMPLATEID = "template_epgat5q";
    const PUBLICKEY = "AhoJuJ21e39pk7x0J";
    const SERVICEID = "service_91qci2f";
    emailjs
      .send(SERVICEID, TEMPLATEID, templateParams, PUBLICKEY)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="flex flex-col m-10 sm:mx-10 lg:mx-60 items-center text-center  text-wrap">
      <div className="font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
        Contact Me &#x1F468;&#x200D;&#x1F4BB;
      </div>
      <div>
        <div className="py-10">
          I am currently most interested in the opportunities below:
          <div className="flex flex-col items-center">
            <ul className="list-disc list-inside">
              <li>Fullstack developer internships</li>
              <li>12 month placement for 2025/26 academic year</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-bold">Feel free to contact me using this form!</div>

      <form
        method="POST"
        className="flex flex-col items-center [&>*]:rounded [&>*]:m-5 [&>*]:p-1 [&>*]:border [&>*]:border-gray [&>*]:w-80 w-full"
        onSubmit={submitQuery}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          className="w-80 focus:outline-none transition duration-200 form-field-theme"
          maxLength={50}
          required
        />
        <input
          name="from_email"
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          className="w-80 focus:outline-none transition duration-200 form-field-theme"
          maxLength={50}
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={handleSubjectChange}
          className="w-80 focus:outline-none transition duration-200 form-field-theme"
          maxLength={100}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleMessageChange}
          className="h-32 max-h-96 min-h-32 w-80 focus:outline-none transition duration-200 form-field-theme"
          maxLength={300}
          required
        ></textarea>
        <input
          name="submit"
          className="focus:outline-none transition duration-200 form-field-theme"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactMe;
