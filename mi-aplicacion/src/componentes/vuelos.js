import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";

const Vuelos = () => {
    const [mensaje, setMensaje] = useState(""); // creo que estoy hay que borrarlo
    const [info, setInfo] = useState([{code:'null',airline:'null',origin:'null', passengers:[]}]); // hay que tener un mejor manejo de errores
    //const [mensajes, setMensajes] = useState([]); // array con todos los msn del chat


    useEffect(() => {
        socket.on("FLIGHTS", (info_llegado) => {
            setInfo(info_llegado);//setInfo([...info, info_llegado]);
          //console.log(info)
          //socket.emit("FLIGHTS");
          //setMensaje("");
          
        });    
        socket.emit("FLIGHTS");
        return () => {
        socket.off("FLIGHTS")};
      }, []);
    console.log('VERIFICAR')
    console.log(info.code);
    console.log(info)

    //console.log(info)
    //socket.emit("FLIGHTS");
    //setMensaje("");


    return (
        <div>
            
            

            {console.log('AQUI!!')}
            {console.log(info)}
            {console.log(info.code)}
            {console.log((info[0]).passengers)}



              <h1>Informacíon de Vuelos</h1>
            {/*/ Esto es para poder imprimir los vuelos recibidos */}

            {info.map((e, i) => <div key ={i}>            

            <table>
            <tr> <td><strong>Codigo:</strong></td> <td>{e.code}</td> </tr>
              <tr> <td>Aerolinea:</td> <td> {e.airline}</td> </tr>

              <tr> <td>Origen:</td> <td>({e.origin})</td> </tr>

              <tr> <td>Destino:</td> <td>({e.destination})</td> </tr>

              <tr> <td>Avion:</td> <td>{e.plane}</td> </tr>

              <tr> <td>Asientos:</td> <td>{e.seats}</td> </tr>

              <tr> <td>Pasajeros:</td> <td>{(e.passengers).map((pasajero) => 
                        <p>{pasajero.name} ({pasajero.age} Años)</p>)}</td> </tr>

              
              
            </table>
            <br></br>
            </div> )}
            {console.log('PRUEBAS')}
            {console.log((info[0]).passengers)}

        </div>
    )

}
export default Vuelos;