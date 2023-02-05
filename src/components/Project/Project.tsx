import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import "./Project.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const [html, setHtml] = React.useState("");
  console.log(id);

  useEffect(() => {
    const html = fetch(`../projects/${id}.html`)
      .then((res) => res.text())
      .then((html) => setHtml(html));
  }, [id]);

  useEffect(() => {
    //select by id
    if (document.querySelector("#carousel")) {
      const images = Array.from(
        document.querySelector("#carousel")?.querySelectorAll("img") as any
      );
      const carousel = (
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          transitionTime={500}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          useKeyboardArrows={true}
          centerMode={true}
          centerSlidePercentage={100}
        >
          {images?.map((image: any) => {
            var src = "";
            if (image.src) {
              src = image.src;
            }
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <img src={src} />
              </div>
            );
          })}
        </Carousel>
      );
      ReactDOM.render(carousel, document.querySelector("#carousel"));
    }
  }, [html]);

  return (
    <div className="Project">
      <div className="navbar">
        <div className="section-wrapper">
          <div className="back">
            <Link to="/">↩ back</Link>
          </div>
        </div>
      </div>
      <div className="section-wrapper">
        <div className="project">
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <div
        className="navbar"
        style={{
          top: "inherit",
          bottom: 0,
          boxShadow: "0px -40px 18px rgb(6 11 21 / 37%)",
        }}
      ></div>
    </div>
  );
}
