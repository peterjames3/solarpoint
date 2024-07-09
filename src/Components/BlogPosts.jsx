import React from "react";

export function BlogPosts({ blog, goBack }) {
    if (!blog) {
      return <p>Sorry, the requested blog does not exist.</p>; // Error handling for undefined blog
    }
  
    return (
      <article>
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <img src={blog.image} alt="Blog cover" className="my-4" />
        <p className="text-xl">{blog.content}</p>
        <button
          onClick={goBack}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Go Back
        </button>
      </article>
    );
  }
