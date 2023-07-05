import StyledJumbotron from "./Jumbotron.styled";

const Jumbotron = () => {
  return (
    <StyledJumbotron>
      <div className="container">
        <div className="left">
          <img src={require("./task.png")} alt="" />
        </div>
        <div className="right">
          <h3>This About Page is Dedicated For You.</h3>
        </div>
      </div>
      <div className="container">
        <div className="left2">
          <h3>Create Page as Your Wish.</h3>
        </div>
        <div className="right2">
          <img src={require("./profile.png")} alt="" />
        </div>
      </div>
    </StyledJumbotron>
  );
};

export default Jumbotron;
