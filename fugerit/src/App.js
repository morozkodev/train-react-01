import logo from './logo.svg';
import './App.css';
import SchedaProdotto from './components/SchedaProdotto';
import Eventi from './components/Eventi';
import Interruttore from './components/Interruttore';
import Benvenuto from './components/Benvenuto';

function App() {
  return (
    <div className="App">
      <Benvenuto utenteAutenticato={false}/>
      <SchedaProdotto/>
      <Eventi/>
      <Interruttore/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
