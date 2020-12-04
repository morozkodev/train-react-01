import logo from './logo.svg';
import './App.css';
import SchedaProdotto from './components/SchedaProdotto';
import Eventi from './components/Eventi';
import Interruttore from './components/Interruttore';
import ControlloCustom from './components/controllo-login/ControlloCustom';
import Orologio from './components/clock/Orologio';
import Lista from './components/Liste/Lista';

function App() {
  return (
    <div className="App">
      <ControlloCustom/>
      <br/><br/>
      <Lista/>
      <br/><br/>
      
      <br/><br/>
      <SchedaProdotto/>
      <br/><br/>
      <Eventi/>
      <br/><br/>
      <Interruttore/>
      <br/><br/>
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
