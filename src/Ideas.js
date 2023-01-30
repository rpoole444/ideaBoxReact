import React from "react";
import Card from "./components/Card/Card";
import "./Ideas.css";

const Ideas = (props) => {
  const { ideas } = props;
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    );
  });

  return <div className="ideas-container">{ideaCards}</div>;
};

export default Ideas;
