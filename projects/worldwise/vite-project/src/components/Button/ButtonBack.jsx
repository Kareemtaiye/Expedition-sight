import React from "react";

function ButtonBack({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default ButtonBack;
