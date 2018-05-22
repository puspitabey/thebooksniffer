window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var mainNavbar = document.getElementById("mainNavbar");
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		mainNavbar.style.display = 'block';
		mainNavbar.className = "w3-top";
		navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
		mainNavbar.style.display = 'none';
		mainNavbar.className = navbar.className.replace("w3-top", "");
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
