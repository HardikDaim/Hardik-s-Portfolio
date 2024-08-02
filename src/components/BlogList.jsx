import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../data/blogs/BlogPosts";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const BlogList = () => {

  const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Helmet>
        <title>Blog - Hardik Daim's Portfolio</title>
        <meta name="description" content="Read the latest blogs by Hardik Daim on web development, software engineering, and more." />
        <meta name="keywords" content="Hardik Daim, blogs, web development, software engineering, technology" />
        <meta property="og:title" content="Blog - Hardik Daim's Portfolio" />
        <meta property="og:description" content="Read the latest blogs by Hardik Daim on web development, software engineering, and more." />
        <meta property="og:image" content="https://hardik-daim.vercel.app/android-chrome-512x512.png" />
        <meta property="og:url" content="https://hardik-daim.vercel.app/blog" />
        <meta property="twitter:title" content="Blog - Hardik Daim's Portfolio" />
        <meta property="twitter:description" content="Read the latest blogs by Hardik Daim on web development, software engineering, and more." />
        <meta property="twitter:image" content="https://hardik-daim.vercel.app/android-chrome-512x512.png" />
        <meta property="twitter:url" content="https://hardik-daim.vercel.app/blog" />
      </Helmet>

      <Header />
      <div className="p-4 min-h-screen max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl flex justify-center font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blogs
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sortedBlogPosts.map((post) => (
            <motion.li
              key={post.id}
              className="border-b py-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                <motion.h3
                  className="text-xl mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {post.title}
                </motion.h3>
                <p className="mb-2">{post.excerpt}</p>
                <small className="text-gray-500">{post.date}</small>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
