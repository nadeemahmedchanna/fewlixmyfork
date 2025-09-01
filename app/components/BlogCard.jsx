"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const placeholderImage = "https://picsum.photos/200/300.webp";

export default function BlogCard({ blog }) {
  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-green-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Blog Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog?.image || placeholderImage}
          alt={blog?.title || "Placeholder"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 transition-colors duration-300 group-hover:text-white">
        <h3 className="text-lg font-semibold line-clamp-2 text-gray-900 group-hover:text-white">
          {blog?.title || "Untitled Blog"}
        </h3>
        <p className="mt-2 text-sm text-gray-700 line-clamp-3 group-hover:text-white">
          {blog?.excerpt ||
            "This is a placeholder description. Your blog summary will appear here."}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500 group-hover:text-white">
            {blog?.date || "Coming Soon"}
          </span>
          <Link
            href={blog?.slug ? `/blog/${blog.slug}` : "#"}
            className="text-sm font-medium text-green-500 group-hover:text-white underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
