"use client";
import React, { useState, useRef } from "react";
import Githubicon from "../../public/github-icon.svg";
import Linkedicon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const fromRef = useRef();
const[error,setError] = useState(null)

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      publicKey: 'c-qXVt20WHyxt501N',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <div className="z-10"> </div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently exploring new opportunities and my inbox is open for
          any inquiries. Whether you have a question or just want to connect,
          don't hesitate to reach out—I'm here to engage and respond promptly
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="github.com">
            <Image src={Githubicon} alt="Githubicon" />
          </a>
          <a href="LinkedIn.com">
            <Image src={Linkedicon} alt="Linkedicon" />
          </a>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Email
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent Successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
