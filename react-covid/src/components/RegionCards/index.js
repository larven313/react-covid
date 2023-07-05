import styles from "../Cards";
import RegionCard from "../RegionCard";
import RegionCardsStyled from "./RegionCards.styled";

const RegionCards = (props) => {
  const { cases } = props;
  return (
    <RegionCardsStyled>
      <div className="container">
        <div className="title">
          <h1>Situation by Regions</h1>
          <p>Bacaan Pilihan Covid</p>
        </div>
        <div className="cards">
          {cases.map((card, index) => {
            return <RegionCard key={index} card={card} />;
          })}
        </div>
      </div>
    </RegionCardsStyled>
  );
};
export default RegionCards;
