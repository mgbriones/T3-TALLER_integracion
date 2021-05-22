import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";

const Aviones = () => {
    const [mensaje, setMensaje] = useState(""); // creo que estoy hay que borrarlo
    const [user, setUser] = useState(""); // creo que estoy hay que borrarlo
    const [mensajes, setMensajes] = useState([]); // array con todos los msn del chat

    // mensaje de prueba
    
    
    //useEffect(()=> {
        //socket.emit('CHAT', msn)
    //})

    //useEffect(() => {
        //socket.on("mensajes", (mensaje) => {
          //setMensajes([...mensajes, mensaje]);
        //});
    useEffect(() => {
        socket.on("POSITION", (mensaje) => {
          setMensajes(mensaje);
        });    
    
        return () => {
          socket.off()};
      }, [mensajes]);

    

    return (
        <div>
            Posicion de los aviones 
            {console.log('PROBANDO POSICIONES')}{console.log(mensajes)}
            {mensajes.code}

        </div>
    )

}
export default Aviones;