import Card from "../../Card/Card";
import "./index.scss";

const cardData = [
  {
    src: "/cards/card1.png",
    title: "title",
    summary: "summary",
    meta: "meta",
  },
];
export default function Four() {
  return (
    <div className="four">
      <div className="section-wrapper">
        <div className="cards">
          {cardData.map((card) => (
            <Card
              key={card.title}
              src={card.src}
              title={card.title}
              summary={card.summary}
              meta={card.meta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
