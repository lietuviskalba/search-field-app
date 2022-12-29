import React from "react";

// class Card extends React.Component {
//   render() {
const Card = ({ id=-1, name="Default name", email="default@email.fix" }) => {
  return (
    <div className="bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="userCard" src={`https://robohash.org/}${id}?set=set5`} />
      <div>
        <h2 className="color red"> {name}</h2>
        <h3> {email}</h3>
      </div>
    </div>
  );
};

export default Card;
