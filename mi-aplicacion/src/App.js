import logo from './logo.svg';
import './App.css';

//import socket from "./componentes/socket";
import Chat from "./componentes/chat";
import Vuelos from "./componentes/vuelos";


function App() {

  //con estas lineas puedo llamar a las psosiciones de las aviones
  //socket.on('POSITION', function(data) { 
  //console.log(data);
  //})



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        <p>
          <Vuelos/>
        </p>

        <p>
          <Chat/>
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
