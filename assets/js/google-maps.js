function init() {
    var mapOptions = { "center": {  "lat": 51.58483749972037,  "lng": 0.13534988343235188 }, "clickableIcons": true, "disableDoubleClickZoom": false, "draggable": true, "fullscreenControl": false, "keyboardShortcuts": true, "mapMaker": false, "mapTypeControl": true, "mapTypeControlOptions": {  "text": "Default (depends on viewport size etc.)",  "style": 0 }, "mapTypeId": "roadmap", "rotateControl": true, "scaleControl": false, "scrollwheel": false, "streetViewControl": true, "styles": false, "zoom": 18, "zoomControl": true};
    var mapElement = document.getElementById('ez-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker0 = new google.maps.Marker({title: "UK Tax Pro Ltd", icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", position: new google.maps.LatLng(51.58483416651148, 0.13534988343235455), map: map});
var infowindow0 = new google.maps.InfoWindow({content: "<h3 class=\"infoTitle\">UK Tax Pro Ltd</h3><p><span class=\"infoWebsite\"><a href=\"http://uktaxproltd.co.uk/\">http://uktaxproltd.co.uk/</a><br></span><span class=\"infoEmail\"><a href=\"mailto:vika.accts@gmail.com\">vika.accts@gmail.com</a><br></span><span class=\"infoTelephone\">07979 203598</span></p>",map: map});
marker0.addListener('click', function () { infowindow0.open(map, marker0) ;});infowindow0.close();

    google.maps.event.addDomListener(window, "resize", function() { var center = map.getCenter(); google.maps.event.trigger(map, "resize"); map.setCenter(center); });
  }
google.maps.event.addDomListener(window, 'load', init);