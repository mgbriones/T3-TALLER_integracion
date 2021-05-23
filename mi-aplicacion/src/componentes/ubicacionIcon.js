import React from 'react';
import L from "Leaflet";

export const ubicacionIcon = L.icon({
    iconUrl: require('../assets/icon.svg'),
    iconRetinaUrl: require('../assets/icon.svg'),
    iconAnchor:null,
    shadowUrl:null,
    shadowSize:null,
    shadowAnchor:null,
    iconSize:[35,35],
    className: "Leaflet-venue-icon",
});