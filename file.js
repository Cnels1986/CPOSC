// finds file name
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

// burger menu, toggles the isHidden function which transforms the nav menu
const button = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

button.addEventListener('click', function() {
  menu.classList.toggle('isHidden')
})

// initial address for the home page
var address = '42 N Prince St, Lancaster, PA 17603';
mapTest();


// changes the address variable and redraws the map, functions called based on button pressed
function address1(){
  address = '42 N Prince St, Lancaster, PA 17603';
  mapTest();
}
function address2(){
  address = '111 N. Prince Street, Lancaster, PA 17603';
  mapTest();
}
function address3(){
  address = '24 E. King Street, Lancaster, PA 17602';
  mapTest();
}

// https://developers.google.com/maps/documentation/javascript/
// redraws map api with the given address
function mapTest(){
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
      map.setZoom(18);
    }
  });
}

if(page == "index.html"){
  var nextCPOSC = new Date(2018, 10, 1).getTime(); //sets date to Nov 1, 2018
  var date = new Date().getTime(); //sets date to today's date

  // finds the difference in time
  var x = nextCPOSC - date;
  // calculated the amount of days from the give time
  var days = Math.floor(x / (1000 * 60 * 60 * 24));
  // determines the hundreds number for the amount of days
  var hundred = Math.floor(days / 100);

  var one = days % 100;

  // determines the tens
  var ten = Math.floor(one / 10);
  // determines the ones
  one = one % 10;

  document.getElementById("hundreds").innerHTML = hundred;
  document.getElementById("tens").innerHTML = ten;
  document.getElementById("ones").innerHTML = one;
}



// calculates the total price of tickets from each of the select menus
function calcTotal(){
  // event.preventDefault();
  var tots = 0; //initial value

  var number = document.getElementById("fourtyTwo").value;
  tots = tots + parseInt(number) * 42;

  number = document.getElementById("ten").value;
  tots = tots + parseInt(number) * 10;

  number = document.getElementById("zero").value;
  tots = tots + parseInt(number) * 0;
  number = document.getElementById("free").value;
  tots = tots + parseInt(number) * 0;
  number = document.getElementById("student").value;
  tots = tots + parseInt(number) * 0;


  document.getElementById("total").innerHTML = "$" + tots;
}


//functions to add or remove classes from the sidebar
function addStick(someDiv){
  someDiv.classList.add("stickyTest");
}
function removeStick(someDiv){
  someDiv.classList.remove("stickyTest");
}
function byeStick(someDiv){
  someDiv.classList.add('byeStick');
}
function backStick(someDiv){
  someDiv.classList.remove('byeStick');
}


// used for determining the height of the speakers page with the accordion
var totsHeight = 0;
var body = document.body.getBoundingClientRect();
var sbt = document.getElementById('sidebar');
var sideBarTop = sbt.getBoundingClientRect();
var sbs = document.getElementById('sideBarStop');
var sideBarStop = sbs.getBoundingClientRect();

// the top of the sidebar button, with 30px buffer
var SBtop = sideBarTop.top - body.top + 10;
if(page == "index.html")
  SBtop = sideBarTop.top - body.top - 30;
//the bottom of where the sidebar should go, with height of button considered
var stop = sideBarStop.top - body.top - 260;

// determines if its the button with links above to change height
if(page == "about.html"){
  stop = stop - 220;
}
if(page == "sponsor.html"){
  stop = stop - 190;
}
// Gets initial height of the speakers page, with all the accordion panels open
if(page == "speakers.html"){
  var panels = document.getElementsByClassName('panel');
  for(var q = 0; q <= panels.length; q++){
    totsHeight = totsHeight + 300;
  }
  stop = stop + totsHeight;
}


// Homepage only
window.addEventListener('scroll', function(ev) {
  var someDiv = document.getElementById('sidebar');

// depending on the distance of the scroll, classes will added or removed to alter the side menu
  if(window.pageYOffset > SBtop)
  addStick(someDiv);
  if(window.pageYOffset >= stop)
  byeStick(someDiv);
  if(window.pageYOffset < stop && window.pageYOffset > SBtop)
  backStick(someDiv);
  if(window.pageYOffset < SBtop)
  removeStick(someDiv);
});


// Edited code from https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

// if a panel is opened or closed, the stop variable is altered to reflect the websites change in height
for (i = 0; i < acc.length; i++) {
  var panel = acc[i].nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      stop = stop - 325;
      console.log(stop);
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      stop = stop + 300;
      console.log(totsHeight);
    }
  }
}
