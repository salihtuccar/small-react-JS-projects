import React from "react";
import "./Header.css";

// export default function Header(props) {
//   return (
//     <header>
//       <p>{props.name}</p>
//     </header>
//   );
// }

const Header = ({ name }) => {
  return (
    <header>
      <p>{name}</p>
    </header>
  );
};

export default Header;
