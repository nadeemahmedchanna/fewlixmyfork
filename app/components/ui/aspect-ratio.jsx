import * as React from "react";

function AspectRatio({ ratio = 16 / 9, children, className = "", ...props }) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ paddingBottom: `${100 / ratio}%` }}
      {...props}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

export { AspectRatio };
