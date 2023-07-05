import styled from "styled-components";

const StyledCard = styled.div`
  .container {
    padding: 1rem;
  }

  .card {
    margin: 1.5rem 1rem;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 150px;
  }

  .card__body {
    text-align: center;
  }

  .card__title {
    font-size: 18px;
    margin-bottom: -1.5rem;
    color: #073b4c;
  }

  .card__desc {
    font-size: 32px;
  }

  .card__positif {
    color: #06d6a0 !important;
    font-size: 32px;
  }

  .card__sembuh {
    color: #118ab2 !important;
    font-size: 32px;
  }

  .card__meninggal {
    color: #ef476f !important;
    font-size: 32px;
  }

  @media (min-width: 992px) {
    .card {
      width: 400px;
      height: 200px;
    }
  }
`;
export default StyledCard;
