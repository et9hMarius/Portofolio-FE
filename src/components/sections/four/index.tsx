import Card from "../../Card/Card";
import "./index.scss";

const cardData = [
  {
    src: "/cards/card1.png",
    title: "title",
    summary: "summary",
    subtitle: "subtitle",
  },
  {
    src: "/cards/card1.png",
    title: "title",
    summary: "summary",
    subtitle: "subtitle",
  },
  {
    src: "/cards/card1.png",
    title: "title",
    summary: "summary",
    subtitle: "subtitle",
  },
  {
    src: "/cards/card1.png",
    title: "title",
    summary: "summary",
    subtitle: "subtitle",
  },
  {
    src: "/cards/card1.png",
    title: "title",
    summary: "summary",
    subtitle: "subtitle",
  },
];
export default function Four() {
  return (
    <div className="four">
      <div className="card-wrapper">
        {cardData.map((card, index) => (
          <Card
            key={card.title}
            id={index}
            src={card.src}
            title={card.title}
            subtitle={card.subtitle}
            summary={card.summary}
          />
        ))}
      </div>
    </div>
  );
}
