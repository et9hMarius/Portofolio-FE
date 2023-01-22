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
          }, 2500);
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
          }, 2500);
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
          }, 2500);
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
          }, 2500);
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
              string="WHO ?"
              start={oneStart}
            />
          </div>
          <div className="card-info-content">
            <div className="card-info-content-text">
              <div className={oneText ? "" : "hidden"}>
                My name is Marius Mircioagă and I am currently a college student
                on my way to pursuing higher education and a fulfilling career
                in computer science and software engineering. My passion for
                technology and the internet has been evident from a young age
                and I have been honing my skills ever since.
                <br />
                <br />
                I am open-minded, a fast learner and thrive in a flexible work
                environment. I am fueled by the constant thrill of researching
                and self-improvement. There is nothing more satisfying for me
                than the results of my own hard work.
                <br />
                <br />
                My ultimate goal is to spend my time doing what I love with the
                people I adore. I am always on the lookout for a balanced
                lifestyle and schedule. In my free time, I enjoy spending time
                with friends and family, pursuing my hobbies and having fun,
                while also making sure to prioritize my studies and work.
              </div>
            </div>
          </div>
        </div>
        <div id="two" className="card-info left hidden typewriter">
          <div className="card-info-title ">
            <Typewriter
              blink={true}
              timer={300}
              string="WHERE ?"
              start={twoStart}
            />
          </div>
          <div className="card-info-content hidden-text ">
            <div className="card-info-content-text">
              <div className={twoText ? "" : "hidden"}>
                I was born and raised in Romania, a country with a strong
                presence in the IT industry. I am excited about the opportunity
                to work internationally and have previous experience doing so.
                My proficiency in English is demonstrated by my C2 certificate
                from Cambridge, ensuring that communication will not be an
                issue. I am also understanding, open-minded, and a good
                listener, and I always work together with the customer to
                achieve a common goal.
                <br />
                <br />
                Currently, I am a student at Politehnica Bucharest where I
                actively participate in student organizations and
                extracurricular activities. In the future, I see myself doing
                what I love with like-minded people.
                <br />
                <br />I have a passion for travel and am fascinated by other
                cultures, landscapes, and ways of living. I have internet and
                offline friends from all over the world, and I am always eager
                to learn more about their stories and experiences.
              </div>
            </div>
          </div>
        </div>

        <div
          id="three"
          style={{ marginTop: "640px" }}
          className="card-info right hidden typewriter"
        >
          <div className="card-info-title ">
            <Typewriter
              blink={true}
              timer={300}
              string="WHY ?"
              start={threeStart}
            />
          </div>
          <div className={"card-info-content"}>
            <div className="card-info-content-text">
              <div className={threeText ? "" : "hidden"}>
                From a young age, I had a passion for technology and the
                internet. Growing up with a computer, I found myself constantly
                exploring new tools and apps to make my life easier. This led to
                a natural development of my programmatic and systematic way of
                thinking.
                <br />
                <br />
                My passion for technology has taught me to be independent,
                self-reliant and self-taught, with experience in hosting
                servers, editing images and videos, automating tasks and fixing
                various technical issues on my own.
                <br />
                <br />
                I pride myself on being an ideal IT guy, who is not only
                technically proficient but also able to handle people
                effectively. My frequenting of diverse internet communities and
                forums has made me a more open-minded person and improved my
                communication and problem-solving skills.
                <br />
                <br />
                The computer is the gift I am most thankful for, as it has not
                only provided me with a lifelong passion but also shaped me into
                the person I am today.
              </div>
            </div>
          </div>
        </div>
        <div id="four" className="card-info left hidden typewriter">
          <div className="card-info-title ">
            <Typewriter
              blink={true}
              timer={300}
              string="WHAT ?"
              start={fourStart}
            />
          </div>
          <div className="card-info-content hidden-text ">
            <div className="card-info-content-text">
              <div className={fourText ? "" : "hidden"}>
                I am a full-stack developer with a wide range of skills and
                experience. Specifically, I have experience working with:
                <br />
                <ul>
                  <li>
                    Python: Scraping (Selenium, BeautifulSoup, Scrapy), Web
                    development (FastAPI, Flask), Data Science (NumPy, Pandas,
                    Matplotlib), Game Development (Pygame), Automation
                    (PyAutoGUI, OpenCV)
                  </li>
                  <li>
                    Web Development: HTML, CSS, SASS, JS, TS, JQuery, NodeJS,
                    ExpressJs, React, C#, dotNET, Java, Python, MySQL,
                    PostgreSQL, OracleDB, SQL, MongoDB
                  </li>
                  <li>
                    Other Skills: MailChimp, MJML, Adobe products, GIMP, Bash,
                    CMD, PowerShell, GIT, Windows, Linux, Microsoft Office,
                    LibreOffice, C/C++
                  </li>
                </ul>
                I am always eager to extend my knowledge and stay current with
                new technologies. One word that best describes me is flexible,
                as I have a high capacity to handle new and unfamiliar
                environments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
