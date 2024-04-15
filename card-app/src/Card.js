// import React from "react";
// import "./Card.css";

// export default function Card(props) {
//   return (
//     <div className="card">
//       <div className="cardBody">
//         <img src={props.img} />
//         <div className="about">
//           <h2 className="cardTitle">{props.title}</h2>
//           <p className="cardDescription">{props.description}</p>
//         </div>
//       </div>
//       <button>See the Details</button>
//     </div>
//   );
// }

import "./Card.css";
// const Card = ({ data }) => {
//   return (
//     <>
//       {data.map((card, index) => (
//         <div className="card" key={index}>
//           <div className="cardBody">
//             <img src={card.img} alt="" />
//             <div className="about">
//               <h2 className="cardTitle">{card.title}</h2>
//               <p className="cardDescription">{card.description}</p>
//             </div>
//             <button>Details</button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Card;
const Card = ({ data }) => {
  return (
    <>
      {data.map((card, index) => (
        <div className="card" key={index}>
          <div className="cardBody">
            <img src={card.img} alt="" />
            <div className="about">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
