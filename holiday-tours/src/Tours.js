import React from "react";
import Tour from "./Tour";
import "./Tours.css";

export default function Tours({ tours, removeTour }) {
  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="line"></div>
      <div className="tour">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}
