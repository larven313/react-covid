import Card from "../Card";
import styles from "./Cards.module.css";
import StyledCards from "./Cards.styled";

const Cards = (props) => {
  const { cards, title, subtitle } = props;

  return (
    <StyledCards>
      <div className="container">
        <div className="title">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="cards">
          {cards.map(function (card, index) {
            return <Card key={index} card={card} />;
          })}
        </div>
      </div>
    </StyledCards>
  );
};

export default Cards;
