import React, { useState } from "react";
import review from "./data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = review[index];
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > review.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = 4;
      }
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * review.length);
    setIndex(randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <div className="name-job">
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
      </div>

      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronCircleLeft onClick={prevPerson} />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronCircleRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random Character
      </button>
    </article>
  );
}

export default Review;
