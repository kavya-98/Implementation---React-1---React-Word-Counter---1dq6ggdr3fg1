import React, { useState } from "react";
//import '../styles/App.css';
const App = () => {
  const [text, settext] = useState("");
  const [max, setmax] = useState(50);
  const [size, setsize] = useState(0);
  // const font={}

  return (
    <div id="main">
      <textarea
        style={{ fontSize: { size } }}
        maxLength={max}
        onChange={(e) => settext(e.target.value)}
      ></textarea>
      <div className="word-counter">{text.split(" ").length}</div>
      <div id="char-counter">{text.length}</div>
      <input
        type="number"
        value={max}
        onChange={(e) => setmax(e.target.value)}
        id="char-limit-input"
      />
      <input
        type="range"
        max="32px"
        min="16"
        onChange={(e) => setsize(e.target.value)}
      />
    </div>
  );
};

export default App;
