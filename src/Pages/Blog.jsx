
import blogs from "../BlogData"
import { BlogPosts } from "../Components/BlogPosts";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

import {useLocation} from 'react-router-dom'

function Blog() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [location])
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // Hypothetical loading state

  const renderBlogPreviews = () => blogs.map((blog) => (
    <div key={blog.id} className="flex flex-col space-y-3"
    >
      <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
        <img src={blog.image} alt={`blog-${blog.id}`} className="h-full w-full object-cover mix-blend-overlay" />
      </div>
      <div className="divide-y-2 divide-slate-500 h-[10rem] w-full">
        <h6 className="text-2xl text-black font-semibold">
          {blog.title}
        </h6>
        <button
          onClick={() => setSelectedBlog(blog)}
          type="button"
          className="mt-2 font-semibold text-xl py-3 px-10 text-blue-700 bg-transparent transition-all delay-300 hover:bg-black hover:text-white"
        >
          Read More
        </button>
      </div>
    </div>
  ));

  // Render loading state or error message if blogs are not available
  if (isLoading) return <p>Loading...</p>; // Placeholder for loading state
  if (!blogs.length) return <p>No blogs found.</p>; // Error handling if no blogs

  return (
    <motion.section  className="w-full px-5 flex flex-col md:flex-row gap-5 font-Iter mt-[10rem]"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      {selectedBlog === null ? (
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-5 min-h-[30rem]">
          {renderBlogPreviews()}
        </div>
      ) : (
        <BlogPosts blog={selectedBlog} goBack={() => setSelectedBlog(null)} />
      )}
    </motion.section>
  );
}

export default Blog;
