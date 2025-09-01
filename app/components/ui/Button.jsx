import Link from 'next/link'
import React from 'react'

const Button = ({ onClick = () => {}, text, link = "#" }) => {
  const content = (
    <span
      className="
        relative overflow-hidden
        px-10 py-4 rounded-full
        border border-black text-black text-lg
        transition-transform duration-300
        hover:-translate-y-1
        group inline-block
      "
      onClick={onClick}
    >
      {/* Sliding background */}
      <span
        className="
          absolute left-0 top-0 h-full w-0
          bg-green-500
          transition-all duration-300
          group-hover:w-full
        "
      ></span>

      {/* Text above background */}
      <span className="relative z-10">{text}</span>
    </span>
  );

  return link ? (
    <Link href={link} className="relative">
      {content}
    </Link>
  ) : (
    content
  );
};

export default Button;
