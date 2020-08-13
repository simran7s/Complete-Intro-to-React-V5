import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  //   If i dont have an elRef then create a div
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // Only runs when DOM is unmounted.
    return () => modalRoot.removeChild(elRef.current);
  }, []); //[] lists there being no dependencies so it will only run once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
