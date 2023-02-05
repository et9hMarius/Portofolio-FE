import Card from "../../Card/Card";
import "./index.scss";

const cardData = [
  {
    src: "/cards/card1.png",
    title: "No Limits",
    summary:
      "No Limits is a chromium extension built using React. It is a simple and efficient Web Activity Tracker and personal notebook for your daily needs.",
    subtitle: "Chrome extension",
  },
];
export default function Four() {
  return (
    <div className="four">
      <div className="card-wrapper">
        {cardData.map((card, index) => (
          <Card
            key={index}
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
