import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";

const Vuelos = () => {
    const [mensaje, setMensaje] = useState(""); // creo que estoy hay que borrarlo
    const [info, setInfo] = useState([]); // creo que estoy hay que borrarlo
    //const [mensajes, setMensajes] = useState([]); // array con todos los msn del chat


    useEffect(() => {
        socket.on("FLIGHTS", (info_llegado) => {
          setInfo([...info, info_llegado]);
          
        });    
    
        return () => {
          socket.off()};
      }, [info]);

    
    console.log(info)
    socket.emit("FLIGHTS");
    setMensaje("");


    return (
        <div>
            
            <h1>Preparando la info de Vuelos</h1>

        </div>
    )

}
export default Vuelos;