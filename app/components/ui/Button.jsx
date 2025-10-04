import * as React from "react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-black text-white hover:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button ;
