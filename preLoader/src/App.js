import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <CircleLoader color={"#D0021B"} loading={loading} size={150} />
      ) : (
        <img src="https://c.tenor.com/32nHeCvxlwEAAAAM/you-tube-like-and-subscribe.gif" />
      )}
    </div>
  );
}

export default App;
