import React, { useRef } from "react";
import Torigate from "./Torigate";
import { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { useFrame } from "react-three-fiber";
import { Route, Routes } from "react-router-dom";
import "./styles.css"

/*
WELCOME

Return animate text for xalcome page. 
*/

function Welcome() {
    return (
        <div style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} class="wrapper">
  <div class="row">
    <div class="col-md-5 text-center">
      <h3 class="animate-charcter">Welcome to Yonko</h3>
    </div>
  </div>
</div>
    )
    
}

export default Welcome;