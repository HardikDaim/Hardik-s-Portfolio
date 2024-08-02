import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../data/blogs/BlogPosts";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  return (
    <>
      <Helmet>
        <title>{post.title} - Hardik Daim's Portfolio</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`Hardik Daim, blog, ${post.title}, web development, software engineering`}
        />
        <meta
          property="og:title"
          content={`${post.title} - Hardik Daim's Portfolio`}
        />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content="https://hardik-daim.vercel.app/og-image-blogpost.jpg"
        />
        <meta
          property="og:url"
          content={`https://hardik-daim.vercel.app/blog/${post.id}`}
        />
        <meta
          property="twitter:title"
          content={`${post.title} - Hardik Daim's Portfolio`}
        />
        <meta property="twitter:description" content={post.excerpt} />
        <meta
          property="twitter:image"
          content="https://hardik-daim.vercel.app/og-image-blogpost.jpg"
        />
        <meta
          property="twitter:url"
          content={`https://hardik-daim.vercel.app/blog/${post.id}`}
        />
      </Helmet>

      <Header />
      <div className="p-4 min-h-screen max-w-7xl mx-auto">
        {post ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="text-gray-500">{post.date}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-justify"
            >
              {post.content}
            </motion.div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen">
            <p>No Such Blog Found</p>
            <Link to="/blog" className="text-blue-500 hover:text-blue-700">Go to Blogs</Link>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BlogPost;
