import StyledRegionCard from "./Region.styled";

const ListCard = (props) => {
  const { title, value } = props;

  let cardClass = "";
  switch (title) {
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
    <div className="list">
      <div className="left">
        <p className="list__title">{capFirst(title)}</p>
        <p className={`${cardClass}`}>{value}</p>
      </div>
      <div className="right">
        <img src={require("./ic_confirmed.png")} />
      </div>
    </div>
  );
};

const RegionCard = (props) => {
  const { card } = props;
  return (
    <StyledRegionCard>
      <div className="container">
        <section className="card">
          <div className="card__body">
            <h2 className="card__title">{card.name}</h2>
            {Object.entries(card.numbers).map(([status, value]) => (
              <ListCard key={status} title={status} value={value} />
            ))}
          </div>
        </section>
      </div>
    </StyledRegionCard>
  );
};
export default RegionCard;
