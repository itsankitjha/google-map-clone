mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5raW5nIiwiYSI6ImNrbjhuazN6cDBwYjcycG8wZzV1ZXk1aDYifQ.OOb4KLTXakGe8leaT8lS6g";
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHIghAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "bottom-right");

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");

  // Add geolocate control to the map.
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    }),
    "bottom-right"
  );
}
