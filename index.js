// Initialize and add the map
let map;

async function initMap() {
  // The location of Tokyo
  const position = { lat: 35.6764, lng: 139.65 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Tokyo
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "c62343e0349f2347",
  });

  // The marker, positioned at Tokyo
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Tokyo",
    gestureHandling: "greedy",
  });
}

initMap();
