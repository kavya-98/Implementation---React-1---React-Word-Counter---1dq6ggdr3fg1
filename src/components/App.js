import React, { useState } from "react";
//import '../styles/App.css';
const App = () => {
  const [text, settext] = useState("");

  return (
    <div id="main">
      <textarea
        maxlength="50"
        onChange={(e) => settext(e.target.value)}
      ></textarea>
      <div className="word-counter">{text.split(" ").length}</div>
      <div id="char-counter">{text.length}</div>
      <input type="number" max="50" />
    </div>
  );
};

export default App;
