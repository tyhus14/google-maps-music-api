// function initialize() {
//     var mapOptions = {
//       center: new google.maps.LatLng(34.8272504, -82.3614572),
//       zoom: 4
//     };
//     var map = new google.maps.Map(document.getElementById("map-canvas"),
//         mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);


function initialize() {
  var myLatlng = new google.maps.LatLng(34.8272504, -82.3614572);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);