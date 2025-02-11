// import React from "react";

// const Button = ({ name, onClick, className = "" }) => {
//   return (
//     <button
//       className={`text-white bg-[#1F950C] px-20 py-3 cursp rounded-md transition-all duration-300 ease-in-out hover:bg-[#177C0A] hover:scale-105 active:scale-95 ${className}`}
//       onClick={onClick}
//     >
//       {name}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import styles from "./Button.module.css";

const Button = ({ name, onClick, className = "" }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <div className={styles.dots_border}></div>
      <span className={styles.text_button}>{name}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={styles.sparkle}
      >
        <path
          fill="#fff7f7"
          d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"
        />
      </svg>
    </button>
  );
};

export default Button;
