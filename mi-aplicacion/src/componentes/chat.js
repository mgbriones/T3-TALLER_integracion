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
            

            <form onSubmit={submit}>
                <label htmlFor=""> <h1>Chatear</h1></label>
                <div>
                <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="1"
                    value={user}
                    placeholder = "Nombre Usuario"
                    onChange={(e) => setUser(e.target.value)}
                ></textarea>

                <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="1"
                    value={mensaje}
                    placeholder = "Escriba su mensaje..."
                    onChange={(e) => setMensaje(e.target.value)}
                ></textarea>

                 
                </div>
                <button >Enviar</button> 
                
            </form>

            <div>
            {/*/ Esto es para poder imprimir los mensajes recibidos */}
            {console.log(mensajes)}
            {mensajes.map((e, i) => <div key ={i}> 
            <p align = 'left'><strong>{e.name}</strong> -- <i>Send {(new Date(e.date)).toLocaleString()}</i>  </p>
            <p align = 'left'><h3>{e.message}</h3> </p> 
            <br></br>
            

             



            </div> )}
            
            </div>

        </div>
    )

}
export default Chat;