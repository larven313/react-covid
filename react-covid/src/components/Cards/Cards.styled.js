import styled from "styled-components";

const StyledCards = styled.div`
  .container {
    background-color: #f8f9fa;
    padding-top: 1rem;
  }

  .title {
    text-align: center;
    margin-bottom: -1rem;
  }

  h1 {
    color: #06d6a0;
    margin-bottom: -1rem;
  }

  p {
    color: #118ab2;
  }

  @media (min-width: 992px) {
    .cards {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default StyledCards;
