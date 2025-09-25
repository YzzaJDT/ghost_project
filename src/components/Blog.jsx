import React from "react";
import blog1 from '../assets/icons/blog1.jpg'
import blog2 from '../assets/icons/blog2.jpg'
import blog3 from '../assets/icons/blog3.jpg'
import blog4 from '../assets/icons/blog4.jpg'
import blog5 from '../assets/icons/blog5.jpg'
import blog6 from '../assets/icons/blog6.jpg'

const blogs = [
  { image: blog1 },
  { image: blog2 },
  { image: blog3 },
  { image: blog4 },
  { image: blog5 },
  { image: blog6 },
];

const Blog = () => {
  return (
    <div
      className="max-h-screen bg-gray-100 py-8 overflow-hidden relative rounded-3xl"
      id="blog"
    >
      {/* Title */}
      <div className="ml-16 mb-5">
        <h1 className="font-roboto font-bold text-xl"> Blogs</h1>
      </div>

      {/* Top row - scroll left */}
      <div className="flex gap-6 animate-marquee w-max mb-8">
        {[...blogs, ...blogs].map((blog, i) => (
          <div
            key={`top-${i}`}
            className="rounded-xl shadow overflow-hidden min-w-[300px] max-w-sm h-60"
          >
            <img
              src={blog.image}
              alt={`blog-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom row - scroll right (reverse) */}
      <div className="flex gap-6 animate-marqueeReverse w-max">
        {[...blogs, ...blogs].map((blog, i) => (
          <div
            key={`bottom-${i}`}
            className="rounded-xl shadow overflow-hidden min-w-[300px] max-w-sm h-60"
          >
            <img
              src={blog.image}
              alt={`blog-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* fade edges */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>


    </div>
  );
};

export default Blog;
