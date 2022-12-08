import Star from "./components/star";
import "./App.css";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(0);

  return (
    <div className="App">
      {[1, 2, 3, 4, 5].map((idx) => {
        return (
          <li
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(0)}
            onClick={() => setRating(idx)}
            className="star"
          >
            {( idx <= hoverIdx || idx <= rating )  ? <Star filled /> : <Star />}
          </li>
        );
      })}
      <button className="btn" onClick={() => setRating(0)}>Reset rating</button>
    </div>
  );
}

export default App;
