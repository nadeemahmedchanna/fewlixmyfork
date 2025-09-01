"use client";

import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogGroup({ blogs = [], title = "Latest Articles" }) {
  // Show 3 placeholders if no blogs
  const safeBlogs =
    blogs.length > 0
      ? blogs
      : Array.from({ length: 3 }).map((_, i) => ({
          id: `placeholder-${i}`,
        }));

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Parent block for heading */}
      <div className="flex justify-center mb-12">
        <div className="relative inline-block">
          {/* Marker highlight behind text */}
          <motion.span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500/30 rounded-md h-6 w-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
          />
          <motion.h2
            className="relative text-3xl sm:text-4xl font-extrabold text-black px-2 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {title}
          </motion.h2>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {safeBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center">
        <Link
          href="/blogs"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
        >
          View All Blogs
          <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
