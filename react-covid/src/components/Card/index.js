import styles from "./Card.module.css";
import StyledCard from "./Card.styled";

const Card = (props) => {
  const { card } = props;
  let cardClass = "";
  switch (card.status) {
    case "confirmed":
      cardClass = "card__positif";
      break;
    case "recovered":
      cardClass = "card__sembuh";
      break;
    case "death":
      cardClass = "card__meninggal";
      break;
    default:
      break;
  }

  const capFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <StyledCard>
      <div className={styles.container}>
        <section className={`${styles.card} ${cardClass}`}>
          <div className={styles.card__body}>
            <h3 className={`${styles.card__title}`}>{capFirst(card.status)}</h3>
            <p className={`${cardClass}`}>{card.total}</p>
          </div>
        </section>
      </div>
    </StyledCard>
  );
};

export default Card;
