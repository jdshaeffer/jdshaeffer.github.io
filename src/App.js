import React from 'react';
import './App.css';
import resume from './assets/resume.pdf'

document.body.className = 'App'

function App() {
  return (
    // <div className='App' style={{backgroundImage: "url(" + tiles + ")"}}>
    <div>
      <h1>j.d. shaeffer</h1>
      <div className="Links">
        <a href={ resume }><h1>resume</h1></a>
        <a href='https://github.com/jdshaeffer'><h1>github</h1></a>
        <a href='https://www.linkedin.com/in/j-d-s-0b5751132/'><h1>linkedin</h1></a>
        <a href='tic.html'><h1>hmm</h1></a> 
      </div>
    </div>
  );
}

export default App;
