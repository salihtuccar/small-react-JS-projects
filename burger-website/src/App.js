import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/menu" element={<Menu/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/contact" element={<Contact/>}/>
//         </Routes>
//         <Footer/>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
