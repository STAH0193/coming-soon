$(document).ready(function() {
   $(".mitch_header").lettering();
 });

$(document).ready(function()
 {
     $("a.one").hover(function(e)
     {
         var randomClass = getRandomClass();
         $(e.target).attr("class", randomClass);
     });
 });

 function getRandomClass()
 {
     //Store available css classes
     var classes = new Array("green", "purple", "teal", "violet", "pink");

     //Give a random number from 0 to 5
     var randomNumber = Math.floor(Math.random()*5);

     return classes[randomNumber];
 }
