import logo from './logo.svg';
import './App.css';

import socket from "./componentes/socket";


function App() {

  socket.on('POSITION', function(data) { 
  console.log(data);
  })



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo
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
