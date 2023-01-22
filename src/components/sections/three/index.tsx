import React from "react";
import "./index.scss";
import Parallax from "parallax-js";
import { useEffect } from "react";

export default function Three() {
  useEffect(() => {
    var scene = document.getElementById("scene");
    if (scene) var parallaxInstance = new Parallax(scene);
  }, []);
  return (
    <div className="three" id="projects">
      <div id="scene" className="title-box">
        <div data-depth="0.4" className="title">
          projects
        </div>
        <div data-depth="0.6" className="hand-wrapper">
          <img
            className="hand unselectable"
            draggable={false}
            src="/hand.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
