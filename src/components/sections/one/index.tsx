import "./index.scss";
import { useState, useEffect } from "react";

export default function One() {
  // event listener for when scrollY > 0

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.querySelector(".arrow")?.classList.add("scrolled");
      } else {
        document.querySelector(".arrow")?.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <div className="one">
      <div className="section-title">
        <div className="name firstname">Marius</div>
        <div className="name lastname">Mircioagă</div>
        <br />
        <div className="subtitle">- full-stack software developer -</div>
      </div>
      <div className="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path
            fill="#f0f0f0"
            d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"
          />
        </svg>
      </div>
    </div>
  );
}
