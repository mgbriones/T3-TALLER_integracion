import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";

const Chat = () => {
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
        socket.on("CHAT", (mensaje) => {
          setMensajes([...mensajes, mensaje]);
        });    
    
        return () => {
          socket.off()};
      }, [mensajes]);

    const submit = (e) => {
        e.preventDefault();
        console.log(mensaje)
        socket.emit("CHAT", {name: user, message: mensaje});
        setMensaje("");
    };

    return (
        <div>
            <div>
            {/*/ Esto es para poder imprimir los mensajes recibidos */}
            {mensajes.map((e, i) => <div key ={i}> {e.name}: {e.message}  </div> )}
            </div>

            <form onSubmit={submit}>
                <label htmlFor=""> Escriba su mensaje</label>
                <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="1"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                ></textarea>

                <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="1"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                ></textarea>

                <button>Enviar</button>
            </form>



        </div>
    )

}
export default Chat;