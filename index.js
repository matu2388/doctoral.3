import L from "https://cdn.jsdelivr.net/npm/leaflet@1.8.0/dist/leaflet-src.esm.js";
import { sitios } from './assets/data/markers/sitios';

document.addEventListener("DOMContentLoaded", function() {
    const mymap = new L.Map('map').setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Carga dinámica de los marcadores
    sitios.forEach((point) => {
        const markerInstance = L.marker([point.lat, point.lon]).addTo(mymap);
        markerInstance.bindPopup(`<b>${point.name}</b>`); // Agregar pop-up con el nombre del sitio
    });

    mymap.fitBounds(sitios.map(point => [point.lat, point.lon]));
});
