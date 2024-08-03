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
        <title>{post ? `${post.title} - Hardik Daim's Portfolio` : 'Blog Post - Not Found'}</title>
        <meta name="description" content={post ? post.excerpt : 'Blog post not found'} />
        <meta name="keywords" content={post ? `Hardik Daim, blog, ${post.title}, web development, software engineering` : 'Blog post not found'} />
        <meta property="og:title" content={post ? `${post.title} - Hardik Daim's Portfolio` : 'Blog Post - Not Found'} />
        <meta property="og:description" content={post ? post.excerpt : 'Blog post not found'} />
        <meta property="og:image" content={post ? "https://hardik-daim.vercel.app/android-chrome-512x512.png" : "https://hardik-daim.vercel.app/android-chrome-512x512.png"} />
        <meta property="og:url" content={post ? `https://hardik-daim.vercel.app/blog/${post.id}` : "https://hardik-daim.vercel.app/blog"} />
        <meta property="twitter:title" content={post ? `${post.title} - Hardik Daim's Portfolio` : 'Blog Post - Not Found'} />
        <meta property="twitter:description" content={post ? post.excerpt : 'Blog post not found'} />
        <meta property="twitter:image" content={post ? "https://hardik-daim.vercel.app/android-chrome-512x512.png" : "https://hardik-daim.vercel.app/android-chrome-512x512.png"} />
        <meta property="twitter:url" content={post ? `https://hardik-daim.vercel.app/blog/${post.id}` : "https://hardik-daim.vercel.app/blog"} />
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
              className="mt-4 text-justify flex flex-col justify-center items-center"
            >
              {post.content.map((section, index) => {
                if (section.type === 'text') {
                  return <p key={index} className="mb-4">{section.content}</p>;
                }
                if (section.type === 'image') {
                  return (
                    <img
                      key={index}
                      src={section.src}
                      alt={section.alt}
                      className="w-full h-auto rounded-lg max-w-3xl mb-4"
                    />
                  );
                }
                return null;
              })}
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
