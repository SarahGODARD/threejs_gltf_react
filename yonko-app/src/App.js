import React, { useRef } from "react";
import Bottom from "./Bottom";
import useVisible from "./Scroll";
import Torigate from "./Torigate";
import { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { useFrame } from "react-three-fiber";
import { Route, Routes } from "react-router-dom";


function Lol() {
  return("footbar")
}
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [y, setY] = useState(window.scrollY);

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

  function logit() {
    setScrollY(window.pageYOffset);
    //console.log(new Date().getTime());
    //console.log(scrollY)
  }
  /*useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    }, [handleNavigation];
    
  });*/
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
      <Route exact path="/lol" element={"welcome to yonko"}/>
      
      </Routes>
    </div>
  );
}

export default App;