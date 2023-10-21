import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='column'>
        <h1>hey</h1>
        <h2>i'm jd</h2>
        <p>welcome to this little site on the web</p>
        <p>hosting some projects here:</p>
        <ul className='project-list'>
          <li>
            <a href='https://jdshaeffer.github.io/bikepacking-events/'>
              bikepacking-events
            </a>
          </li>
          <li>
            <a href='https://jdshaeffer.github.io/dungeon-solitaire/'>
              dungeon-solitaire
            </a>
          </li>
          <li>hips</li>
          <li>nycmud</li>
          <li>journal</li>
        </ul>
      </div>
      <div className='column'>
        <small>questions/feedback? gmail at shaefferjd</small>
      </div>
    </div>
  );
}

export default App;
