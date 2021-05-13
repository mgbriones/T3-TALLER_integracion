// Aqui se inicia la conexion al webSocket

import socketIOClient from "socket.io-client";

const ENDPOINT = "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl";
const socket = socketIOClient(ENDPOINT, {
    path:'/flights'});

export default socket;