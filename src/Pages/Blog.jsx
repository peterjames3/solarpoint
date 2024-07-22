import blogs from "../BlogData";
import { BlogPosts } from "../Components/BlogPosts";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";

function Blog() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const renderBlogPreviews = () =>
    blogs.map((blog) => (
      <div key={blog.id} className="flex flex-col space-y-3  gap-5">
        <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
          <img
            src={blog.image}
            alt={`blog-${blog.id}`}
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="divide-y-2 divide-slate-500 h-[10rem] w-full">
          <h6 className="text-2xl text-black font-semibold">{blog.title}</h6>
          <button
            onClick={() => {
              setTimeout(() => setSelectedBlog(blog), 600); 
            }}
            type="button"
            className="mt-2 font-semibold text-xl py-3 px-10 text-blue-700 bg-transparent transition-all delay-300 hover:bg-black hover:text-white"
          >
            Read More
          </button>
        </div>
      </div>
    ));


  if (isLoading) return <p className="text-black font-semibold text-xl">Loading...</p>; 
  if (!blogs.length) return <p>No blogs found.</p>; 

  return (
    <motion.section
      className="w-full px-5 mt-[10rem]  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-[1400px] mt-0 mx-auto ">
        {selectedBlog === null ? (
          <div className=" w-full grid grid-cols-1 grid-rows-4 ss:grid-cols-3  sm:grid-cols-4 sm:grid-rows-2 gap-5 h-full ">
            {renderBlogPreviews()}
          </div>
        ) : (
          <BlogPosts blog={selectedBlog} goBack={() => setSelectedBlog(null)} />
        )}
      </div>
    </motion.section>
  );
}

export default Blog;
