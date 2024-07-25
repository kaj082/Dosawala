import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={16}
    height={19}
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 17H15C15.2652 17 15.5196 17.1054 15.7071 17.2929C15.8946 17.4804 16 17.7348 16 18C16 18.2652 15.8946 18.5196 15.7071 18.7071C15.5196 18.8946 15.2652 19 15 19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5196 0 18.2652 0 18C0 17.7348 0.105357 17.4804 0.292893 17.2929C0.48043 17.1054 0.734784 17 1 17ZM9 11.175L12.243 7.933L13.657 9.347L8 15.004L2.343 9.347L3.757 7.933L7 11.175V0H9V11.175Z"
      fill="#019D12"
    />
  </svg>
);
export default SVGComponent;
