import React, { useRef } from "react";
import Bottom from "./Bottom";
import useVisible from "./Scroll";
import Torigate from "./Torigate";

function App() {
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);
  return (
      <div>

<Torigate/>
    <Bottom/>
      </div>
)}

export default App;