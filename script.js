
var mymap = L.map('mapid').setView([50.6188, 26.2588], 17);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidmlrdG9yYm9icnlrIiwiYSI6ImNpdXB2bG9nbDAwMzgyenBpZTNycHo5NXMifQ.xY_3ezVLltHBuHGTj2sjDA'
}).addTo(mymap);
var marker = L.marker([50.6188, 26.2588]).addTo(mymap);

var polygon = L.polygon([
    [50.6176, 26.258],
    [50.617, 26.258],
    [50.6162, 26.256],
    [50.617, 26.2574]
]).addTo(mymap);
var circle = L.circle([50.61, 26.242], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(mymap);

marker.bindPopup("<b>smart people here</b><br>( and me )").openPopup();
circle.bindPopup("water here");
polygon.bindPopup("trees here");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);