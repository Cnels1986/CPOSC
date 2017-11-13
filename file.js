
const button = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

button.addEventListener('click', function() {
  menu.classList.toggle('isHidden')
})


var address = '42 N Prince St, Lancaster, PA 17603';
mapTest();

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
        map.setZoom(17);
     }
  });
}

var nextCPOSC = new Date(2018, 10, 1).getTime(); //sets date to Nov 1, 2018
var date = new Date().getTime(); //sets date to today's date

var x = nextCPOSC - date;
var days = Math.floor(x / (1000 * 60 * 60 * 24));

// console.log(days);

var hundred = Math.floor(days / 100);
var one = days % 100;

var ten = Math.floor(one / 10);
one = one % 10;

document.getElementById("hundreds").innerHTML = hundred;
document.getElementById("tens").innerHTML = ten;
document.getElementById("ones").innerHTML = one;



function calcTotal(){
  event.preventDefault();
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



// Edited code from https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  var panel = acc[i].nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

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


// finds file name
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );




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
  stop = stop -190;
  console.log(stop);
}
if(page == "speakers.html"){
    // stop = SBtop  + 100;
    console.log(SBtop);
}




// Homepage only
window.addEventListener('scroll', function(ev) {
//console.log("bottom " + stop);
//console.log(" top " +SBtop);
  var someDiv = document.getElementById('sidebar');

  // if(window.scrollY > 720)
  // addStick(someDiv);
  // if(window.scrollY >= 1420)
  // byeStick(someDiv);
  // if(window.scrollY < 1420 && window.scrollY > 720)
  // backStick(someDiv);
  // if(window.scrollY < 720)
  // removeStick(someDiv);
  if(window.scrollY > SBtop)
  addStick(someDiv);
  if(window.scrollY >= stop)
  byeStick(someDiv);
  if(window.scrollY < stop && window.scrollY > SBtop)
  backStick(someDiv);
  if(window.scrollY < SBtop)
  removeStick(someDiv);

  // console.log(window.scrollY);

});
