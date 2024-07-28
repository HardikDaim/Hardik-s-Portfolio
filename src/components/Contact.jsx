// components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";


const Contact = ({ loader }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Send Successfully");
    setInput({
      name: "",
      email: "",
      message: "",
    })
  };

  return (
    <div className="min-h-screen max-w-7xl px-2 mx-auto flex flex-col items-center justify-start mb-20 md:mb-0">
      <motion.h2
        className="text-5xl md:text-7xl font-bold mb-10 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {loader ? <Skeleton width={400} /> : "Contact Me!"}
      </motion.h2>
      {loader ? (
        <Skeleton height={400} width={800} />
      ) : (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                required
                onChange={handleChange}
                value={input.name}
                name="name"
                className="shadow appearance-none border-2 focus:border-blue-700 hover:border-blue-500  rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                onChange={handleChange}
                value={input.email}
                name="email"
                className="shadow appearance-none border-2 focus:border-blue-700 hover:border-blue-500  rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                required
                onChange={handleChange}
                value={input.message}
                name="message"
                className="shadow appearance-none border-2 focus:border-blue-700 hover:border-blue-500  rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows={6}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
