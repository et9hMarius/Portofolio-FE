import "./index.scss";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import { useEffect, useState } from "react";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Typewriter from "../../Typewriter/Typewriter";
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
      //check if element with id one is in view
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { width, height };
};

function Rocket() {
  const { camera } = useThree();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    camera.position.set(
      Math.sin(scrollPosition / 500) * 20,
      0,

      Math.cos(scrollPosition / 500) * 20
    );
    camera.lookAt(0, -3, 0);
  }, [scrollPosition]);
  const { scene } = useGLTF("spaceship.gltf");

  return (
    <primitive
      angle={0.3}
      rotation={[90, 0, -45]}
      position={[0, 14 - scrollPosition / 70, 0]}
      object={scene}
    />
  );
}
export default function Two() {
  const scrollPosition = useScrollPosition();
  const { width, height } = useWindowSize();
  const [oneStart, setOneStart] = useState(false);
  const [twoStart, setTwoStart] = useState(false);
  const [threeStart, setThreeStart] = useState(false);
  const [fourStart, setFourStart] = useState(false);
  const [oneText, setOneText] = useState(false);
  const [twoText, setTwoText] = useState(false);
  const [threeText, setThreeText] = useState(false);
  const [fourText, setFourText] = useState(false);

  useEffect(() => {
    var element = document.getElementById("one");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (height || document.documentElement.clientHeight) &&
        rect.right <= (width || document.documentElement.clientWidth)
      ) {
        //if it has a hidden class remove it
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          setOneStart(true);
          setTimeout(() => {
            setOneText(true);
          }, 4000);
        }
      } else {
        //if it doesnt have a hidden class add it
        if (element.classList.contains("hidden") === false) {
          element.classList.add("hidden");
        }
      }
    }

    element = document.getElementById("two");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (height || document.documentElement.clientHeight) &&
        rect.right <= (width || document.documentElement.clientWidth)
      ) {
        //if it has a hidden class remove it
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          setTwoStart(true);
          setTimeout(() => {
            setTwoText(true);
          }, 3000);
        }
      } else {
        //if it doesnt have a hidden class add it
        if (element.classList.contains("hidden") === false) {
          element.classList.add("hidden");
        }
      }
    }

    element = document.getElementById("three");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (height || document.documentElement.clientHeight) &&
        rect.right <= (width || document.documentElement.clientWidth)
      ) {
        //if it has a hidden class remove it
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          setThreeStart(true);
          setTimeout(() => {
            setThreeText(true);
          }, 3000);
        }
      } else {
        //if it doesnt have a hidden class add it
        if (element.classList.contains("hidden") === false) {
          element.classList.add("hidden");
        }
      }
    }

    element = document.getElementById("four");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (height || document.documentElement.clientHeight) &&
        rect.right <= (width || document.documentElement.clientWidth)
      ) {
        //if it has a hidden class remove it
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          setFourStart(true);
          // pause 3 seconds
          setTimeout(() => {
            setFourText(true);
          }, 3000);
        }
      } else {
        //if it doesnt have a hidden class add it
        if (element.classList.contains("hidden") === false) {
          element.classList.add("hidden");
        }
      }
    }
  }, [scrollPosition, width, height]);

  return (
    <div className="two">
      <div className="quote unselectable">
        {Array(10).fill(
          <>
            <div className="bottom">THE STARS</div>
            <div className="top">REACH FOR</div>
          </>
        )}
      </div>
      <Canvas>
        <Stars radius={75} depth={200} count={4000} factor={4} speed={0} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Rocket />
      </Canvas>
      <div className="section-wrapper">
        <div
          id="one"
          className="card-info right hidden typewriter"
          style={{ marginTop: "200px" }}
        >
          <div className="card-info-title ">
            <Typewriter
              blink={true}
              timer={300}
              string="HOW ?"
              start={oneStart}
            />
          </div>
          <div className="card-info-content">
            <div className="card-info-content-text">
              <div className={oneText ? "" : "hidden"}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. "
              </div>
            </div>
          </div>
        </div>
        <div id="two" className="card-info left hidden typewriter">
          <div className="card-info-title ">
            <Typewriter
              blink={true}
              timer={300}
              string="WHY ?"
              start={twoStart}
            />
          </div>
          <div className="card-info-content hidden-text ">
            <div className="card-info-content-text">
              <div className={twoText ? "" : "hidden"}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. "
              </div>
            </div>
          </div>
        </div>

        <div
          id="three"
          style={{ marginTop: "550px" }}
          className="card-info right hidden typewriter"
        >
          <div className="card-info-title ">
            <Typewriter
              blink={true}
              timer={300}
              string="WHEN ?"
              start={threeStart}
            />
          </div>
          <div className={"card-info-content"}>
            <div className="card-info-content-text">
              <div className={threeText ? "" : "hidden"}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. "
              </div>
            </div>
          </div>
        </div>
        <div id="four" className="card-info left hidden typewriter">
          <div className="card-info-title ">
            <Typewriter
              blink={true}
              timer={300}
              string="WHO ?"
              start={fourStart}
            />
          </div>
          <div className="card-info-content hidden-text ">
            <div className="card-info-content-text">
              <div className={fourText ? "" : "hidden"}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. "
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
