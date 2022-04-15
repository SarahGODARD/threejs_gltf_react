import React, { useRef } from "react";
import useVisible from "./Scroll";

const Bottom=()=> {
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);
  return (
    <div onScroll={console.log("scroool")} ref={elemRef}>hello {isVisible && console.log("visible")}</div>
)}

export default Bottom;