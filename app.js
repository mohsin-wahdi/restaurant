// document.addEventListener("");

// scroll start
let btntop = document.getElementById("btntop");
btntop.style.display = "none";
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btntop.style.display = "block";
  } else {
    btntop.style.display = "none";
  }

  btntop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
// scroll End

// header fixed
document.addEventListener("DOMContentLoaded", () => {
  let bt = document.getElementById("bt");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      bt.style.background = "rgb(238, 217, 28) 5px";
    } else {
      bt.style.background = "white";
    }
  });
});

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");

btn1.addEventListener("click", () => {
  img1.style.display = "block";
  img2.style.display = "none";
  img3.style.display = "none";

  // title
  title1.style.display = "block";
  title2.style.display = "none";
  title3.style.display = "none";
});

btn2.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "block";
  img3.style.display = "none";
  //title
  title1.style.display = "none";
  title2.style.display = "block";
  title3.style.display = "none";
});

btn3.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "block";
  //title
  title1.style.display = "none";
  title2.style.display = "none";
  title3.style.display = "block";
});

// testional....
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");

let imgs1 = document.getElementById("imgs1");
let imgs2 = document.getElementById("imgs2");

let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");

slide1.addEventListener("click", () => {
  imgs1.style.display = "block";
  imgs2.style.display = "none";
});

slide2.addEventListener("click", () => {
  imgs2.style.display = "block";
  imgs1.style.display = "none";
});

// front image  slider
document.addEventListener("DOMContentLoaded", () => {
  var firstIndex = 0;
  function automaticSliding() {
    setTimeout(automaticSliding, 3000);
    var pics;
    const slider = document.getElementsByClassName("slider");
    for (pics = 0; pics < slider.length; pics++) {
      slider[pics].style.display = "none";
    }
    firstIndex++;
    if (firstIndex > slider.length) {
      firstIndex = 1;
    }
    slider[firstIndex - 1].style.display = "block";
  }
  automaticSliding();
});

// sliding testional
document.addEventListener('DOMContentLoaded',()=>{


var firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 3000);
  var pics;
  const sliding = document.getElementsByClassName("sliding");
  for (pics = 0; pics < sliding.length; pics++) {
    sliding[pics].style.display = "none";
  }
  firstIndex++;
  if (firstIndex > sliding.length) {
    firstIndex = 1;
  }
  sliding[firstIndex - 1].style.display = "block";
}
automaticSlide();
});
