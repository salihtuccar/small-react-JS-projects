import React from "react";
import "./App.css";
import Accordion from "./Accordion";

function App() {
  const titles = [
    {
      title: "Question1",
    },
    {
      title: "Question2",
    },
    {
      title: "Question3",
    },
    {
      title: "Question4",
    },
    {
      title: "Question5",
    },
  ];
  return (
    <div className="App">
      <h1>FAQ</h1>
      {titles.map((title) => {
        return <Accordion title={title.title} />;
      })}
    </div>
  );
}

export default App;
