function initMap(){
  //create center marker at ucsd
  var ucsd_ltlng = {lat:32.879, lng:-117.236};

  //create map object and specift the DOM element for display
  var map = new google.maps.Map(document.getElementById('map'), {center: ucsd_ltlng, zoom: 15});

  var marker = new google.maps.Marker({
    position: ucsd_ltlng,
    map: map,
    title: "UCSD"
  });
}
