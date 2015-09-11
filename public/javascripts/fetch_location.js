$(document).ready(function(){

  function getLocation() {
    // code here
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#latitude").text(position.coords.latitude);
      $("#longitude").text(position.coords.longitude);
    });
  }

  getLocation();
  insertMap($("#latitude").text(), $("#longitude").text());
});
