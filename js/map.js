var map = L.map("map").setView([42.4658, -2.44999], 13);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

  osm.addTo(map);

  var wmsLayer = L.Geoserver.wms("http://localhost:8080/geoserver/Logro%C3%B1o_raster/wms", {
  layers: "Logroño_raster:NDBI_LOGROÑO_corte_3",
});
wmsLayer.addTo(map);