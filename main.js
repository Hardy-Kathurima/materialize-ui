$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".parallax").parallax();
  $(".slider").slider({
    full_width: true,
    interval: 8000,
    height: 100,
  });
  $(".scrollspy").scrollspy();

});

// go up button start
let btn = document.querySelector(".box");
let body = document.querySelector("#body");
btn.addEventListener('click', scrollUp);

function scrollUp() {
  document.documentElement.scrollTop = 0;



}
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// finish