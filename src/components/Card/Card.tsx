import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({
  id,
  title,
  subtitle,
  summary,
  src,
}: {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  src: string;
}) {
  return (
    <div className="card card--step1">
      <div className="head">
        <div className="number-box">
          <span>{("0" + id).slice(-2)}</span>
        </div>
        <h2>
          <span className="small">{subtitle}</span> {title}
        </h2>
      </div>
      <div className="body">
        <p>{summary}</p>
        <a target="_blank" href={`/project/${id}`}>
          <img src={src} alt="Graphic" />
        </a>
      </div>
    </div>
  );
}
