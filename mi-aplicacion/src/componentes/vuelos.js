import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";

const Vuelos = () => {
    const [mensaje, setMensaje] = useState(""); // creo que estoy hay que borrarlo
    const [info, setInfo] = useState([{code:'null',airline:'null',origin:'null'}]); // hay que tener un mejor manejo de errores
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

    console.log(info);

    //console.log(info)
    //socket.emit("FLIGHTS");
    //setMensaje("");


    return (
        <div>
            
            <h1>Informacíon de Vuelos (falta 'seats' y pasajeros)</h1>
            {/*/ Esto es para poder imprimir los vuelos recibidos */}
            {info.map((e, i) => <div key ={i}> Codigo: {e.code} -
            Aerolinea: {e.airline} - 
            Origen: ({e.origin})  -
            Destino: ({e.destinacion}) -
            Avion: {e.plane} -

              </div> )}

        </div>
    )

}
export default Vuelos;