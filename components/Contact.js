import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdovlyjk");
  if (state.succeeded) {
    return (
      <div className="m-2 bg-color-[black]">
        <p className="text-center pb-12 font-bold text-xl">
          Thanks for your message. I will get back to you ASAP.
        </p>
      </div>
    );
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                  alt="/"
                />
              </div>

              <div>
                <h2 className="py-2">Sage</h2>
                <p>Front-end Developer</p>
                <p className="py-4">Let's talk</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between w-py-4">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/sage-watson/"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link target="_blank" href="https://github.com/sagewatson">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link target="_blank" href="mailto:sagewatson8@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link
                    target="_blank"
                    href="  https://docs.google.com/document/d/1-CHbQdXX4Qe_3e9Q1RbKqctMPzwMu_Ak8Q-9_JJUksI/edit?usp=sharing"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="gird md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      id="name"
                      name="name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      id="phone"
                      name="phone"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    id="message"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
