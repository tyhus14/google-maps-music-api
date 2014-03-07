function initialize() {
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(41.5008195, -99.680902),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var flightPlanCoordinates = [
        new google.maps.LatLng(34.8331685, -82.3628305),
        new google.maps.LatLng(32.8206645, -96.7313396),
        new google.maps.LatLng(41.8337329, -87.7321555),
        new google.maps.LatLng(34.0204989, -118.4117325),
        new google.maps.LatLng(45.5424364, -122.654422)
    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    flightPath.setMap(map);


    google.maps.event.addListener(map, "click", function(event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        console.log(latitude + ', ' + longitude);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);





