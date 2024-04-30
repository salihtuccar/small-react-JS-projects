import { useState } from "react";
import "./App.css";

function App() {
  //states
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please type weight and height");
    } else {
      let bmiCalculated = weight / (height * height);
      setBmi(bmiCalculated.toFixed());

      if (bmi <= 18) {
        setMessage("you are weak");
        setImage("https://i.ytimg.com/vi/okoB9frBGIw/hqdefault.jpg");
      } else if (bmi <= 25 && bmi >= 18) {
        setMessage("you are normal");
        setImage(
          "https://galeri.uludagsozluk.com/33/kurtlar-vadisi-pusu-kazim_42709.jpg"
        );
      } else if (bmi <= 30 && bmi >= 25) {
        setMessage("you are fat");
        setImage(
          "https://galeri13.uludagsozluk.com/713/kurtlar-vadisi-abidin_2162358.jpg"
        );
      } else if (bmi >= 30 && bmi <= 35) {
        setMessage("you are obese");
        setImage("https://i.ytimg.com/vi/IPbyySh9ROM/hqdefault.jpg");
      } else if (bmi >= 35) {
        setMessage("morbid obesity");
      }
    }
  };

  let reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
    setImage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Delete Infos
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your Bmi is : {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
