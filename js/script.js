// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 80,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// typescript progress circular bar 
let typescriptProgress = document.querySelector(".typescript"),
  typescriptValue = document.querySelector(".typescript-progress");

let typescriptStartValue = 0,
  typescriptEndValue = 65,
  typescriptspeed = 30;

let progresstypescript = setInterval(() => {
  typescriptStartValue++;

  typescriptValue.textContent = `${typescriptStartValue}%`;
  typescriptProgress.style.background = `conic-gradient(#20c997 ${
    typescriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (typescriptStartValue == typescriptEndValue) {
    clearInterval(progresstypescript);
  }
}, typescriptspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 90,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#A52A2A ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// redux progress circular bar 
let reduxProgress = document.querySelector(".redux"),
  reduxValue = document.querySelector(".redux-progress");

let reduxStartValue = 0,
  reduxEndValue = 75,
  reduxspeed = 30;

let progressredux = setInterval(() => {
  reduxStartValue++;

  reduxValue.textContent = `${reduxStartValue}%`;
  reduxProgress.style.background = `conic-gradient(#ADFF2F ${
    reduxStartValue * 3.6
  }deg, #efeded 0deg)`;

  if (reduxStartValue == reduxEndValue) {
    clearInterval(progressredux);
  }
}, reduxspeed);


// angular progress circular bar 
let angularProgress = document.querySelector(".angular"),
  angularValue = document.querySelector(".angular-progress");

let angularStartValue = 0,
  angularEndValue = 70,
  angularspeed = 30;

let progressangular = setInterval(() => {
  angularStartValue++;

  angularValue.textContent = `${angularStartValue}%`;
  angularProgress.style.background = `conic-gradient(#9932CC ${
    angularStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (angularStartValue == angularEndValue) {
    clearInterval(progressangular);
  }
}, angularspeed);

// node progress circular bar 
let nodeProgress = document.querySelector(".node"),
  nodeValue = document.querySelector(".node-progress");

let nodeStartValue = 0,
  nodeEndValue = 70,
  nodespeed = 30;

let progressnode = setInterval(() => {
  nodeStartValue++;

  nodeValue.textContent = `${nodeStartValue}%`;
  nodeProgress.style.background = `conic-gradient(#DA70D6 ${
    nodeStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (nodeStartValue == nodeEndValue) {
    clearInterval(progressnode);
  }
}, nodespeed);

// express progress circular bar 
let expressProgress = document.querySelector(".express"),
  expressValue = document.querySelector(".express-progress");

let expressStartValue = 0,
  expressEndValue = 65,
  expressspeed = 30;

let progressexpress = setInterval(() => {
  expressStartValue++;

  expressValue.textContent = `${expressStartValue}%`;
  expressProgress.style.background = `conic-gradient(#0000FF ${
    expressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (expressStartValue == expressEndValue) {
    clearInterval(progressexpress);
  }
}, expressspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});