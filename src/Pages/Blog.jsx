import blogs from "../BlogData";
import { BlogPosts } from "../Components/BlogPosts";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet

function Blog() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const renderBlogPreviews = () =>
    blogs.map((blog) => (
      <div key={blog.id} className="flex flex-col gap-5 space-y-3">
        <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
          <img
            src={blog.image}
            alt={`blog-${blog.id}`}
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="h-[10rem] w-full divide-y-2 divide-slate-500">
          <h5 className="font-poppins text-2xl font-bold text-black">
            {blog.title}
          </h5>
          <button
            onClick={() => {
              setTimeout(() => setSelectedBlog(blog), 600);
            }}
            type="button"
            className="btn  font-semibold transition-all delay-300 hover:text-white focus:ring-1 focus:ring-brandC"
          >
            Read More
          </button>
        </div>
      </div>
    ));

  if (isLoading)
    return <p className="text-xl font-semibold text-black">Loading...</p>;
  if (!blogs.length) return <p>No blogs found.</p>;

  return (
    <motion.section
      className="mt-[10rem] w-full bg-cardBg px-5 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>SolarPoint Blog - Insights and Updates</title>
        <meta
          name="description"
          content="Stay updated with our latest insights, stories, and news on solar energy solutions. Explore our blogs to learn more about the benefits of solar power."
        />
            <link rel="canonical" href="https://kimgym.netlify.app/blog" />
        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="SolarPoint Blog - Insights and Updates"
        />
        <meta
          property="og:description"
          content="Stay updated with our latest insights, stories, and news on solar energy solutions. Explore our blogs to learn more about the benefits of solar power."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimgym.netlify.app/blog" />
        <meta
          property="og:image"
          content="https://kimgym.netlify.app/images/blog-hero.jpg"
        />{" "}
        {/* Replace with a relevant image URL */}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SolarPoint Blog - Insights and Updates"
        />
        <meta
          name="twitter:description"
          content="Stay updated with our latest insights, stories, and news on solar energy solutions. Explore our blogs to learn more about the benefits of solar power."
        />
        <meta
          name="twitter:image"
          content="https://kimgym.netlify.app/images/blog-hero.jpg"
        />{" "}
        {/* Replace with a relevant image URL */}
      </Helmet>
      <div className="mx-auto mt-0 max-w-[1400px]">
        {selectedBlog === null ? (
          <div className="grid h-full w-full grid-cols-1 grid-rows-4 gap-5 ss:grid-cols-3 sm:grid-cols-4 sm:grid-rows-2">
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
