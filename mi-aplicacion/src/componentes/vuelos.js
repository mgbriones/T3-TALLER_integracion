import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";
import MyMap from "./mapa";

const Vuelos = () => {
    const [mensaje, setMensaje] = useState(""); // creo que estoy hay que borrarlo
    const [info, setInfo] = useState([{code:'null',airline:'null',origin:['null','null'],destination:['null','null'], passengers:[]}]); // hay que tener un mejor manejo de errores
    //const [mensajes, setMensajes] = useState([]); // array con todos los msn del chat
    const [ruta, setRuta] = useState([]);
    var camino = [];


    useEffect(() => {
        socket.on("FLIGHTS", (info_llegado) => {
            setInfo(info_llegado);//setInfo([...info, info_llegado]);

            
          
        });    
        socket.emit("FLIGHTS");
        return () => {
        socket.off("FLIGHTS")};
      }, []);
    

    //console.log(info)
    //socket.emit("FLIGHTS");
    //setMensaje("");
    
       
    info.map((plane) => camino.push([plane.origin, plane.destination]) ) 
 
    
    return (
        <div>
          {console.log('TUTUTUTUTUTU')}
            {console.log(camino[0][0][0] == 'null', console.log('TERMINO'))}

            <h1>Mapa</h1>
           {!(camino[0][0][0]=='null') && MyMap(camino) }
           {console.log('ESTO ES EN EL RETURN'), 
            console.log(camino),
            console.log('====----======-....') , 
            camino = [], 
            console.log(camino),
            console.log('====----======-....') }
                  


              <h1>Informacíon de Vuelos</h1>
            {/*/ Esto es para poder imprimir los vuelos recibidos */}

            {info.map((e, i) => <div key ={i}>            

            <table>
            <tr> <td><strong>Codigo:</strong></td> <td>{e.code}</td> </tr>
              <tr> <td>Aerolinea:</td> <td> {e.airline}</td> </tr>

              <tr> <td>Origen:</td> <td>({e.origin[0]},{e.origin[1]})</td> </tr>
         
              <tr> <td>Destino:</td> <td>({e.destination[0]},{e.destination[1]})</td> </tr>

              <tr> <td>Avion:</td> <td>{e.plane}</td> </tr>

              <tr> <td>Asientos:</td> <td>{e.seats}</td> </tr>

              <tr> <td>Pasajeros:</td> <td>{(e.passengers).map((pasajero) => 
                        <p>{pasajero.name} ({pasajero.age} Años)</p>)}</td> </tr>

              
              
            </table>
            <br></br>
            </div> )}
      

        </div>
    )

}
export default Vuelos;