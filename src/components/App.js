import React, { useState } from 'react';
import '../styles/App.css';
const App = () => {
  const [text, settext] = useState('');

  return (
    <div id="main">
      <textarea onChange={(e) => settext(e.target.value)}></textarea>
      <div className="word-counter">{text.split(' ').length - 1}</div>
      <div id="char-counter">{text.length}</div>
    </div>
  );
};

export default App;
