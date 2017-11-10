const button = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

button.addEventListener('click', function() {
  menu.classList.toggle('isHidden')
})
/*
const accbutton = document.querySelector('.accordion')
const accsection = document.querySelector('.panelTest')

accbutton.addEventListener('click', function() {
  accsection.classList.toggle('accordionHidden')
})
*/

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

console.log(days);

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


  document.getElementById("total").innerHTML = "$" + tots;
}
/*
function accordion(){
  var test = document.getElementById("panelTest");
  var dis = test.getAttribute("display");
  if(test.style.display == "null"){

    console.log("test");
  }
}

/*
//document.getElementById("accordion").addEventListener("click", accordion);


function shrink(){
  var area = document.getElementByClass("test");
  console.log(area.style.background_color);
}*/

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
var sidebar = new StickySidebar('#sidebar', {
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 50,
        bottomSpacing: 10,
    });
