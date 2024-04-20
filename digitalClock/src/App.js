import React, { useState } from "react";
import "./App.css";
import "animate.css";

// function App() {
//   let time = new Date().toLocaleTimeString();

//   const [currentTime, setCurrentTime] = useState(time);

//   function Time() {
//     let time = new Date().toLocaleTimeString();
//     setCurrentTime(time);
//   }

//   setInterval(Time, 1000);

//   return (
//     <div className="App">
//       <h1 class="animate__animated animate__bounceInDown">{currentTime}</h1>
//     </div>
//   );
// }

// export default App;

const App = () => {
  let time = new Date().toLocaleDateString();

  const Time = () => {
    let time = new Date().toLocaleDateString();
    setCurrentTime(time);
  };
  const [currentTime, setCurrentTime] = useState(time);

  setInterval(Time, 1000);
  return (
    <div className="App">
      <h1 className="animate__animated animate__bounce"> {currentTime}</h1>
    </div>
  );
};

export default App;