import React from "react";
import { Map, MapContainer, TileLayer,Polyline, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


function MyMap(test){
    let algo_util = test
    console.log('ESTA LLEGANDO ALGO?')
    console.log(algo_util)
    console.log('------------')
    const center = [0, 0]

    const polyline = [
            [-33.382761,-70.803203],
            [-34.82264,-58.533321],
        ]

    const polyline2 = [
            [-38.921106,-72.649643],
            [-34.82264,-58.533321],

        ]
    var mensaje = [
                    [
                        [-33.382761,-70.803203],
                        [-34.82264,-58.533321],
                    ],

                    [
                        [-38.921106,-72.649643],
                        [-34.82264,-58.533321],
                    ]
                ]


    const limeOptions = { color: 'red' }
    const purpleOptions = { color: 'purple' }
    return(
        <MapContainer center={center} zoom={1} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {console.log('###########'), console.log(test)}

            {test.map((ruta) => <Polyline pathOptions={limeOptions} positions={ruta} />)}
            
            {console.log('@@@@@@@@@@@@@@'), console.log(test)}


        </MapContainer>
        );

    
}
export default MyMap;

