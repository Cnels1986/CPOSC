$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});


var address = '42 N Prince St, Lancaster, PA 17603';

var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    zoom: 6
});

var geocoder = new google.maps.Geocoder();

geocoder.geocode({
   'address': address
},
function(results, status) {
   if(status == google.maps.GeocoderStatus.OK) {
      new google.maps.Marker({
         position: results[0].geometry.location,
         map: map
      });
      map.setCenter(results[0].geometry.location);
      map.setZoom(16);
   }
});


var nextCPOSC = new Date(2018, 10, 1).getTime(); //sets date to Nov 1, 2018
var date = new Date().getTime(); //sets date to today's date

var x = nextCPOSC - date;
var days = Math.floor(x / (1000 * 60 * 60 * 24));

console.log(days);

var hundred = Math.floor(days / 100);
var one = days % 100;
// console.log(hundred);

var ten = Math.floor(one / 10);
one = one % 10;
// console.log(ten);
// console.log(one);

document.getElementById("hundreds").innerHTML = hundred;
document.getElementById("tens").innerHTML = ten;
document.getElementById("ones").innerHTML = one;
