import logo from './logo.svg';
import './App.css';

//import socket from "./componentes/socket";
import Chat from "./componentes/chat";
import Vuelos from "./componentes/vuelos";
import Aviones from "./componentes/aviones";
import MyMap from "./componentes/mapa";
{/*   import MyMap from "./componentes/mapa";        */}
{/*   import socket from "./componentes/socket";     */}


function App() {

  //con estas lineas puedo llamar a las psosiciones de las aviones
  //socket.on('POSITION', function(data) { 
  //console.log(data);
  //})



  return (
    <div className="App">
      <header className="App-header">
       
        
        

        <p>
          <Vuelos/>
        </p>

        <p>
          <Chat/>
        </p>
        
        





        

        
      </header>
    </div>
  );
}

export default App;
