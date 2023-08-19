import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-primary text-accent font-bold py-2 px-4 rounded hover:bg-secondary-700 ml-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
