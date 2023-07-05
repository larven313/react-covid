import styled from "styled-components";

const StyledRegionCard = styled.div`
  .container {
    padding: 0.5rem;
  }

  .card {
    padding: 1.5rem;
    margin: 1.5rem 1rem;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card__body {
    text-align: center;
  }

  .card__container {
    display: flex;
    justify-content: space-between;
  }

  .card__title {
    font-size: 28px;
    margin-bottom: 1rem;
    color: #073b4c;
    margin-top: -3rem;
  }

  .card__desc {
    font-size: 32px;
  }

  .list {
    display: flex;
    justify-content: space-between;
    margin-top: -1rem;
    padding: 0.3rem;
  }

  .left {
    margin: 1rem 5rem -1rem 1;
  }

  .left p {
    margin-bottom: -0.5rem;
  }

  .list__title {
    color: #64748b;
    font-size: 16px;
  }

  .card__positif {
    color: #06d6a0 !important;
    font-size: 25px;
    margin-top: 0;
  }

  .card__sembuh {
    color: #118ab2 !important;
    font-size: 25px;
    margin-top: 0;
  }

  .card__meninggal {
    color: #ef476f !important;
    font-size: 25px;
    margin-top: 0;
  }

  .right {
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    .card {
      width: 400px;
      height: 200px;
    }
  }
`;
export default StyledRegionCard;
