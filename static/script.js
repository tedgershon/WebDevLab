function addYear() {
    var d= new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=y;
 }
 /*
 function showList() {
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMoreBTN").style.display = "none";
 }
 */
 
 $("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();     
 
  });
   $("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();     
  });

 function validate() {
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}

function greetingFunc() {
        var d = new Date();
        var h = d.getHours();
        var E = document.getElementById("greeting");
        if (h>=5 && h<12) {
            E.innerHTML=" Good morning, I am Ted Gershon";
        } else if (h>=12 && h<18) {
            E.innerHTML=" Good afternoon, I am Ted Gershon";
        } else if (h>=18 && h<20) {
            E.innerHTML=" Good evening, I am Ted Gershon";
        } else  {
            E.innerHTML="Good night, I am Ted Gershon";
        }
    }

/* greetingFunc(); */

var L = window.location.href;
console.log(L);
if (L.includes("index.html")) { /* run only for index.html */
   greetingFunc();
}
/*
let map;

async function initMap() {
// The location of CMU
const position = { lat: 40.3962674, lng:-79.9621106 };

// Request needed libraries.
//@ts-ignore
const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

// The map, centered at CMU
map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
});

// The marker, positioned at CMU
const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "CMU",
 });
}

if (L.includes("fun.html")) {
    initMap();
}
*/

function activeNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}