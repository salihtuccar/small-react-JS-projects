import React, { useState } from "react";

export default function Accordion({ title }) {
  const [active, setActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(!active)}>CLICK ME</span>
        </div>
      </div>
      <div className={active ? "accordionContentShow" : "accordionContent"}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet. In voluptatibus esse et ullam similique
            qui dolorem adipisci eum dicta quae? Non quaerat reiciendis quo
          </p>
        </div>
      </div>
    </div>
  );
}
