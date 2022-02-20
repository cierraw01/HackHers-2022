/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var mcasualSunny = "https://i.pinimg.com/originals/3c/12/aa/3c12aa9abde028e393b0af9dba235f9e.jpg";
var mcasualRainy = "ebbc8e46bdd7d9e820612c03b3e6cd13.jpg";
var mcasualCold = "https://i.pinimg.com/originals/93/85/26/9385261a5c551e8e4ec14324f94cc1ed.jpg";

var mworkSunny = "https://i.pinimg.com/originals/50/0e/bc/500ebc8c69bbe3e7eb9375d7006d834f.jpg";
var mworkRainy= "https://www.pinterest.ca/pin/1477812369707961/";
var mworkCold = "https://i.pinimg.com/originals/f5/d5/75/f5d575d4b9310855e7ab0d62caed5fbd.jpg";

var mschoolSunny = "O1CN01XSZFXn1CJylJxEG49__39600061-0-lubanu-s_720x.jpg";
var mschoolRainy= "https://i.pinimg.com/originals/a2/7f/c9/a27fc95beeb39d0b870f173cff5cbb68.jpg";
var mschoolCold = "https://i.pinimg.com/originals/04/96/ed/0496eda56b45835069cf9633ec5de604.jpg";

var mformalSunny = "https://i.pinimg.com/originals/fa/15/69/fa15699af69750040f2f76b40bada501.jpg";
var mformalRainy = "https://i.pinimg.com/564x/a7/96/49/a796498a7ba3451586aa05ee7cc6e26a.jpg";
var mformalCold = "https://i.pinimg.com/564x/11/ea/cd/11eacdc939fde4e080fae1afb45680c1.jpg";

var mpartySunny = "https://i.pinimg.com/originals/9f/df/73/9fdf73c3021b94c6a62ca23d4adde2e6.jpg";
var mpartyRainy = "https://i.pinimg.com/originals/fe/bd/10/febd104c1fd6cd23eeea28f68c1d18d0.jpg";
var mpartyCold = "https://i.pinimg.com/originals/62/22/3f/62223fa289c187798de36458daf54578.jpg";

var msportySunny = "https://i.pinimg.com/originals/19/ae/0a/19ae0aa82bc46e19964d7db752e21114.jpg";
var msportyRainy = "https://i.pinimg.com/originals/21/ae/e1/21aee19d83135854b6c1c2a06cf5bed4.jpg";
var msportyCold = "https://i.pinimg.com/originals/e5/ff/cf/e5ffcf3df048f586cafa0e29d88eed92.jpg";

var fcasualSunny = "https://i.pinimg.com/564x/fa/83/6c/fa836c106cab066eb54167dc4b87db95.jpg";
var fcasualRainy = "https://i.pinimg.com/originals/0d/a9/c5/0da9c575b7b6ae7ce673305142815ab1.jpg";
var fcasualCold = "https://i.pinimg.com/564x/97/fd/bd/97fdbdee4cda05f542d5dfe2ba66d1ff.jpg";

var fworkSunny = "https://i.pinimg.com/originals/ae/77/ba/ae77ba4c3d83aeb904720caf04e38613.jpg";
var fworkRainy = "https://i.pinimg.com/564x/d0/05/d1/d005d14507ed3fa917c696767e9cc3b4.jpg";
var fworkCold = "https://i.pinimg.com/564x/bf/8d/6e/bf8d6e8a7e63ac90b45a6009c0a7d718.jpg";

var fschoolSunny = "https://i.pinimg.com/originals/12/f0/dc/12f0dcf2601f4a3278043daec7e1d97b.jpg";
var fschoolRainy = "https://i.pinimg.com/originals/a7/f2/be/a7f2be00a74729dd40fb63fe952f77b3.jpg";
var fschoolCold = "https://i.pinimg.com/564x/5e/ab/6a/5eab6ae5263a4bdf8f8a17a55d785800.jpg";

var fformalSunny = "https://i.pinimg.com/736x/90/b5/4a/90b54a8c07de5eaa44bad137132b4a16.jpg";
var fformalRainy = "https://i.pinimg.com/750x/27/29/87/272987ccfd790257d0f0bdc079476f29.jpg";
var fformalCold = "https://i.pinimg.com/originals/2e/e1/68/2ee1682d0e880285486a1faecc20769f.jpg ";

var fpartySunny = "https://i.pinimg.com/564x/80/7a/2f/807a2f4cbc04cc37a25d1c09bbc0b262.jpg";
var fpartyRainy = "https://i.pinimg.com/564x/65/12/aa/6512aa4283265d29f7bceffd311c592f.jpg";
var fpartyCold = "https://i.pinimg.com/originals/18/3c/e8/183ce8671e5324ca13fdecd6face53e3.jpg ";

var fsportySunny = "https://i.pinimg.com/originals/d3/66/27/d3662762e5c379ee60b809a618d09ac3.jpg";
var fsportyRainy = "https://i.pinimg.com/564x/36/8e/9b/368e9be2b58201b8f0db45c617cbdf56.jpg";
var fsportyCold = "https://i.pinimg.com/originals/57/1d/cf/571dcf5c92972c5ad362bb554d6e6842.jpg ";

var q1a1 = document.getElementById ("weather1"); 
var q1a2 = document.getElementById ("weather2"); 
var q1a3 = document.getElementById ("weather3"); 

var q2a1 = document.getElementById ("masculine"); 
var q2a2 = document.getElementById ("feminine"); 

var q3a1 = document.getElementById ("casual"); 
var q3a2 = document.getElementById ("party"); 
var q3a3 = document.getElementById ("work"); 
var q3a4 = document.getElementById ("school"); 
var q3a5 = document.getElementById ("formalelegant"); 
var q3a6 = document.getElementById ("sporty"); 


var submit = document.getElementById("result");
// submit.addEventListener("click", final);

// function final () {
//   if (consol.log) {
    
//   }
// }


var srcVal = "https://i.pinimg.com/originals/0d/a9/c5/0da9c575b7b6ae7ce673305142815ab1.jpg"; 
// var result.innerHTML; 

// q1a1.addEventListener("radio", ); 
// q1a2.addEventListener("radio", ); 
// q1a3.addEventListener("radio", ); 

// q2a1.addEventListener("radio", ); 
// q2a2.addEventListener("radio", ); 

// q3a1.addEventListener("radio", ); 
// q3a2.addEventListener("radio", ); 
// q3a3.addEventListener("radio", ); 
// q3a4.addEventListener("radio", ); 
// q3a5.addEventListener("radio", ); 
// q3a6.addEventListener("radio", ); 




const outfitForm = document.querySelector("#styleQuiz");

function updateResult () {
  if(q1a1.checked && q2a1.checked && q3a1.checked){
    srcVal = mcasualSunny; 
  }
  if(q1a1.checked && q2a1.checked && q3a2.checked){
    srcVal = mpartySunny; 
  }
  if(q1a1.checked && q2a1.checked && q3a3.checked){
    srcVal = mworkSunny;
  }
  if(q1a1.checked && q2a1.checked && q3a4.checked){
    srcVal = mschoolSunny;
  }
  if(q1a1.checked && q2a1.checked && q3a5.checked){
    srcVal = mformalSunny;
  }
  if(q1a1.checked && q2a1.checked && q3a6.checked){
    srcVal = msportySunny;
  }
  if(q1a2.checked && q2a1.checked && q3a1.checked){
    srcVal = mcasualRainy;
  }
  if(q1a2.checked && q2a1.checked && q3a2.checked){
    srcVal = mpartyRainy;
  }
  if(q1a2.checked && q2a1.checked && q3a3.checked){
    srcVal = mworkRainy;
  }
  if(q1a2.checked && q2a1.checked && q3a4.checked){
    srcVal = mschoolRainy;
  }
  if(q1a2.checked && q2a1.checked && q3a5.checked){
    srcVal = mformalRainy;
  }
  if(q1a2.checked && q2a1.checked && q3a6.checked){
    srcVal = msportyRainy;
  }
  if(q1a3.checked && q2a1.checked && q3a1.checked){
    srcVal = mcasualCold;
  }
  if(q1a3.checked && q2a1.checked && q3a2.checked){
    srcVal = mpartyCold;
  }
  if(q1a3.checked && q2a1.checked && q3a3.checked){
    srcVal = mworkCold;
  }
  if(q1a3.checked && q2a1.checked && q3a4.checked){
    srcVal = mschoolCold;
  }
  if(q1a3.checked && q2a1.checked && q3a5.checked){
    srcVal = mpartyCold;
  }
  if(q1a3.checked && q2a1.checked && q3a6.checked){
    srcVal = msportyCold;
  }
  
  
  // second round 
  if(q1a1.checked && q2a2.checked && q3a1.checked){
    srcVal = fcasualSunny;
  }
  if(q1a1.checked && q2a2.checked && q3a2.checked){
    srcVal = fpartySunny;
  }
  if(q1a1.checked && q2a2.checked && q3a3.checked){
    srcVal = fworkSunny;
  }
  if(q1a1.checked && q2a2.checked && q3a4.checked){
    srcVal = fschoolSunny;
  }
  if(q1a1.checked && q2a2.checked && q3a5.checked){
    srcVal = fformalSunny;
  }
  if(q1a1.checked && q2a2.checked && q3a6.checked){
    srcVal = fsportySunny;
  }
  
  if(q1a2.checked && q2a2.checked && q3a1.checked){
    srcVal = fcasualRainy;
  }
  if(q1a2.checked && q2a2.checked && q3a2.checked){
    srcVal = fpartyRainy;
  }
  if(q1a2.checked && q2a2.checked && q3a3.checked){
    srcVal = fworkRainy;
  }
  if(q1a2.checked && q2a2.checked && q3a4.checked){
    srcVal = fschoolRainy;
  }
  if(q1a2.checked && q2a2.checked && q3a5.checked){
    srcVal = fformalRainy;
  }
  if(q1a2.checked && q2a2.checked && q3a6.checked){
    srcVal = fsportyRainy;
  }
  if(q1a3.checked && q2a2.checked && q3a1.checked){
    srcVal = fcasualCold;
  }
  if(q1a3.checked && q2a2.checked && q3a2.checked){
    srcVal = fpartyCold;
  }
  if(q1a3.checked && q2a2.checked && q3a3.checked){
    srcVal = fworkCold;
  }
  if(q1a3.checked && q2a2.checked && q3a4.checked){
    srcVal = fschoolCold;
  }
  if(q1a3.checked && q2a2.checked && q3a5.checked){
    srcVal = fformalCold;
  }
  if(q1a3.checked && q2a2.checked && q3a6.checked){
    srcVal = fsportyCold;
  }
  
 
}


$(document).ready(function(){
    $("button").click(function(event){
        // Change src attribute of image
        updateResult();
        $("img").attr("src", srcVal);
        event.preventDefault();
    });    
});