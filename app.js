"use strict";
var t =0;
var id2=0;

$("button").on('click',function() {
  t = (this.id);

  
const p = document.querySelector(".joke");

var ct1 = document.querySelector(".ct");
ct1.textContent = "Selected Category: "+t;

const btn = document.getElementById("newjoke");
btn.addEventListener("click", getRandomJoke);


$("button" ).ready(function() {
    var id= "#"+t;
    $(id2).css('background', '#ffffff');
    $(id2).css('color', '#000000');
    $(id).css('background', '#006BFF');
    $(id).css('color', '#ffffff');
    id2=id;;
    getRandomJoke();
  
});


function getRandomJoke() {
  
  var link="https://api.chucknorris.io/jokes/random?category="+t;
  fetch(link)
  .then((response) => response.json())
  .then((data) => {
    p.textContent = data.value;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

}); 