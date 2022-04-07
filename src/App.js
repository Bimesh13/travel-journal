import React from "react";
import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import dataSet from "./data.js";

export default function App() {
  const cardData = dataSet.map((data) => <Card {...data} />);
  return (
    <div>
      <Nav />
      <div>{cardData}</div>
      <br />
      <br />
    </div>
  );
}
