import "./index.scss";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="section-wrapper">
        <div className="link link-one">
          <a href="#">home</a>
        </div>
        <a>
          <div
            className="link link-two show"
            id="content"
            onClick={() => {
              document
                .getElementById("content-list")
                ?.classList.toggle("hide-list");
              document.getElementById("content")?.classList.toggle("hide");
              document
                .getElementById("content-list")
                ?.classList.toggle("show-list");
              document.getElementById("content")?.classList.toggle("show");
            }}
          >
            content
          </div>
          <ul id="content-list" className="hide-list">
            <li>home</li>
            <li>two</li>
          </ul>
        </a>
      </div>
    </div>
  );
}
