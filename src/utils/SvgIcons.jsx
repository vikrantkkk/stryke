import React from "react";

const icons = {
  greenArrow: (size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path fill="green" d="m12.192 9.23l3.714 4.458A.8.8 0 0 1 15.292 15H8.708a.8.8 0 0 1-.615-1.312l3.715-4.458a.25.25 0 0 1 .384 0"/>
    </svg>
  ),

  redArrow: (size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path fill="red" d="m12.192 9.23l3.714 4.458A.8.8 0 0 1 15.292 15H8.708a.8.8 0 0 1-.615-1.312l3.715-4.458a.25.25 0 0 1 .384 0"/>
    </svg>
  ),

  checkCircle: (size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path fill="blue" d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2m4.293 8.293-5 5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414L11 12.586l4.293-4.293a1 1 0 0 1 1.414 1.414"/>
    </svg>
  ),

};

export const SvgIcon = ({ name, size = 24 }) => {
  if (!icons[name]) {
    console.warn(`SVG icon "${name}" not found`);
    return null;
  }

  return icons[name](size);
};
