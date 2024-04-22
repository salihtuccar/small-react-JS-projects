import "./App.css";
import { userValidation } from "./Validation";

// function App() {
//   const createUser = async (event) => {
//     event.preventDefault();
//     let formData = {
//       name: event.target[0].value,
//       email: event.target[1].value,
//       password: event.target[2].value,
//     };
//     console.log(formData);
//     const isValid = await userValidation.isValid(formData);
//     console.log(isValid);
//   };

//   return (
//     <div className="App">
//       <form className="form" onSubmit={createUser}>
//         <input type="text" placeholder="type your name..." />
//         <input type="email" placeholder="type your email..." />
//         <input type="password" placeholder="type your password..." />
//         <input className="submit" type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;
import React from "react";
const createUser = async (e) => {
  e.preventDefault();
  let formData = {
    name: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value,
  };
  const isValid = await userValidation.isValid(formData);
  console.log(isValid);
};
const App = () => {
  return (
    <div className="App">
      <form className="form" onSubmit={createUser}>
        <input type="name" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default App;
