import styled from "styled-components";

const StyledForm = styled.div`
  /* Small Screen */
  .container {
    margin: 1rem;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .form__image {
    width: 100%;
    height: auto;
    border-radius: 25px;
  }

  .form__title {
    color: #06d6a0;
    font-size: 2.44rem;
    margin-bottom: 1rem;
  }

  .form__inputgroup {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    margin: 0.5rem auto;
  }

  .form__input {
    color: #64748b;
    outline-color: #64748b;
    border-color: #06d6a0;
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 2rem;
  }

  .form__label {
    color: #64748b;
    margin-top: 0.1rem;
  }

  .form__button {
    background-color: #06d6a0;
    color: white;
    width: 100%;
    border: 0px;
    height: 2rem;
    border-radius: 5px;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }

    .form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: auto 10rem;
    }

    .form__input {
      width: 250px;
    }
  }
`;
export default StyledForm;
