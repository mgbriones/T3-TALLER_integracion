import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";

const Chat = () => {
    const [mensaje, setMensaje] = useState(""); // creo que estoy hay que borrarlo
    const [mensajes, setMensajes] = useState([]); // array con todos los msn del chat

    // mensaje de prueba
    var msn = {
        name:'luis',
        message:'que pasa??'
        };
    
    useEffect(()=> {
        socket.emit('CHAT', msn)
    })

    //useEffect(() => {
        //socket.on("mensajes", (mensaje) => {
          //setMensajes([...mensajes, mensaje]);
        //});
    useEffect(() => {
        socket.on("CHAT", (mensaje) => {
          setMensajes([...mensajes, mensaje]);
        });    
    
        return () => {
          socket.off();
        };
      }, []);



    return (
        <div>
            {mensajes.map((e, i) => <div key ={i}> {e.name}: {e.message}  </div> )}
        </div>
    )

}
export default Chat;