"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  // const form = useRef();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (message.length < 20) {
      setError("Message must be at least 20 characters long.");
      return;
    }

    if (!isChecked) {
      setError("You must accept the terms before submitting.");
      return;
    }

    emailjs
      .send(
        "service_qxuk1sr",
        "template_10griel",
        { fullName, email, message },
        "jhk5B43wum5cOHOux"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFullName("");
          setEmail("");
          setMessage("");
          setError("");
          setIsChecked(false);
          setIsSubmitted(true);
        },
        (err) => {
          console.log("FAILED...", err);
          setError("Failed to send message. Please try again later.");
        }
      );

    setFullName("");
    setEmail("");
    setMessage("");
    setError("");
    setIsChecked(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 p-[15px] shadow-lg shadow-[#2A0E61]/50 border border-[#7042f861] bg-[#0300145e] backdrop-blur-md shadow-top ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <form
          // ref={form}
          className="w-full max-w-md mb-8 backdrop-blur-md p-4 rounded"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="accept"
              className="mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="accept" className="text-sm text-gray-700">
              I accept to provide my data and ackowledge that this data will
              only be used for internal purposes and will not be shared with
              third parties in compliance with GDPR regulations.
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {isSubmitted && (
            <p className="text-green-500">Form submitted successfully!</p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Socials</div>
            <a
              href="https://https://www.linkedin.com/in/alex-cusenza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </a>
            <a
              href="https://github.com/Alex92C"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Get in touch</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">+356 7908 4350</span>
            </p>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">info@alexcusenza.net</span>
            </p> */}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a href="#about">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">About me</span>
              </p>
            </a>
            <a href="#skills">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Skills</span>
              </p>
            </a>
            <a href="#projects">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Projects</span>
              </p>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Alex Cusenza 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
