function scrolll(){
     var left = document.querySelector(".scroll-img");
     left.scrollBy(-180,0);
}
function scrollr(){
    var right = document.querySelector(".scroll-img");
    right.scrollBy(180,0);
}

function scrollleft(){
    var left = document.querySelector(".scroll-image");
    left.scrollBy(-180,0);
}
function scrollright(){
   var right = document.querySelector(".scroll-image");
   right.scrollBy(180,0);
}

function scrollleft1(){
  var left = document.querySelector(".scroll-item");
  left.scrollBy(-180,0);
}
function scrollright1(){
 var right = document.querySelector(".scroll-item");
 right.scrollBy(180,0);
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

