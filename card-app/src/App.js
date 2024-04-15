import "./App.css";
import Card from "./Card";
import { data } from "./data";

export default function App() {
  return (
    <div className="wrapper">
      <Card data={data} />
    </div>
  );
}
