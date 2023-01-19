import React, { useRef } from "react";
import Torigate from "./Torigate";
import { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { useFrame } from "react-three-fiber";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

/*
App
The a wrapper. Contains routes for home page and welcome page.
*/

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [y, setY] = useState(window.scrollY);

  // Set scrollY variable to check if its scrolling down or up.
  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollY(-1)
      } else if (y < window.scrollY) {
        setScrollY(1)
      } else {
        setScrollY(-1)
      }
      setY(window.scrollY);
    }, [y]
  );

  // Set up scrolling event.
  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Torigate isScrolling={scrollY}/>}/>
        <Route exact path="/welcome" element={<Welcome/>}/>
      </Routes>
    </div>
  );
}

export default App;