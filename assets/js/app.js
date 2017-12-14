$(document).ready(function(){
  $('#principal').hide();
  setTimeout(function(){
    $('#splash').fadeOut(500);
    $('#principal').show();
  }, 3000);
});

    function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.418841, lng: -70.642266},
    zoom: 15
});
};
