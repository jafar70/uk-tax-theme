const element = document.getElementById("button");
const mainmenu = document.getElementById("nav");
const hasSubmenu = document.getElementsByClassName("submenu-button");

document.addEventListener("DOMContentLoaded", function(event) {
  mainmenu.classList.add("closed");

  document.getElementById("button").addEventListener("click", () => {
    slideToggle();
    toggleAnimation();
  });

  var x, i;
  x = document.querySelectorAll("li>ul");
  for (i = 0; i < x.length; i++) {
    x[i].parentElement.classList.add("has-sub");
    x[i].classList.add("closed");
    x[i].parentElement.innerHTML += '<span class="submenu-button"></span>';
  }

  for (var i = 0; i < hasSubmenu.length; i++) {
    hasSubmenu[i].onclick = function(idx) {
      this.classList.toggle("submenu-opened");
      
      this.previousElementSibling.classList.toggle("test");
      this.previousElementSibling.classList.toggle("closed");
      // if (this.previousElementSibling.className == "closed") {
      //   this.previousElementSibling.classList.toggle("closed");
      // } else {
      //   this.previousElementSibling.classList.toggle("test");
      // }
    };
  }
  
});

function slideToggle() {
  if (mainmenu.className == "nav__links test") {
    mainmenu.classList.add("closed");
  } else {
    mainmenu.classList.remove("closed");
  }
}



function toggleAnimation() {
  if (element.classList) {
    element.classList.toggle("menu-opened");
    mainmenu.classList.toggle("test");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("menu-opened");

    if (i >= 0) classes.splice(i, 1);
    else classes.push("menu-opened");
    element.className = classes.join(" ");
    mainmenu.classList.remove("closed");
  }
}


function findOffset(element) {
  var top = 0, left = 0;

  do {
    top += element.offsetTop  || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while(element);

  return {
    top: top,
    left: left
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById('sticky');
  var headerOffset = findOffset(stickyHeader);
  
  window.onscroll = function() {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add('fixed');
    } else {
      stickyHeader.classList.remove('fixed');
    }
  };
};
