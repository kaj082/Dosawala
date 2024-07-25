import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={15}
    height={28}
    viewBox="0 0 15 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 27L0.999999 14L14 1"
      stroke="green"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
