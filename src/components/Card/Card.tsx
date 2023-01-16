import "./Card.scss";

export default function Card({
  src,
  title,
  summary,
  meta,
}: {
  src: string;
  title: string;
  summary: string;
  meta: string | null;
}) {
  return (
    <div className="Card">
      <div className="card-wrapper">
        <a className="card" href="#">
          <span
            className="card-header"
            style={{ backgroundImage: `url('${src}')` }}
          >
            <span className="card-title">
              <h3>{title}</h3>
            </span>
          </span>
          <span className="card-summary">{summary}</span>
          <span className="card-meta">{meta}</span>
        </a>
      </div>
    </div>
  );
}

// Path: src\components\Card\index.tsx
// Compare this snippet from src\components\NavBar\index.tsx:
// import "./index.scss";
//
// export default function NavBar() {
//   return (
//     <div className="NavBar">
//       <div className="section-wrapper">
//         <div className="link link-one">
//           <a href="#">home</a>
//         </div>
//         <a>
//           <div
//             className="link link-two show"
//             id="content"
//             onClick={() => {
//               document
//                 .getElementById("content-list")
//                 ?.classList.toggle("hide-list");
//               document.getElementById("content")?.classList.toggle("hide");
//               document
//                 .getElementById("content-list")
//                 ?.classList.toggle("show-list");
//               document.getElementById("content")?.classList.toggle("show");
//             }}
//           >
//             content
//           </div>
//           <ul id="content-list" className="hide-list">
//             <li>home</li>
//             <li>two</li>
//           </ul>
//         </a>
//       </div>
//     </div>
//   );
// }
//
