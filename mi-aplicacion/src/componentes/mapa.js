import React from "react";
import { MapContainer, TileLayer,Polyline, Marker, Popup } from "react-leaflet";

function MyMap(){

    console.log('HOLA MUNDO')
}
export default MyMap

{/*
function MyMap(){
    const position = [0,0];
    return(
        <MapContainer
        className = 'map'
        center = {position}
        zoom = {1}
        style = {{height: 700, width:"100%" }}
        >
            <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"            
            />


        </MapContainer>
        );

    
}
export default MyMap;

*/}