<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Hind:400,500,600,700&display=swap" rel="stylesheet">
</head>
<body>
  
  <div class="top-nav">
    <div class="top-nav__grid">
  <ul class="top-nav__grid__item top-nav__grid__item--contact_list">
    <li><i class="icon-phone"></i> 02085990003</li>
    <li><i class="icon-paper-plane"></i>vika.accts@gmail.com</li>
    <li><i class='icon-clock'></i> Mon - Fri: 9:30 - 19:30</li>
  </ul>
   <ul class="top-nav__grid__item top-nav__grid__item--social_list">
    <li><i class='icon-twitter'></i></li>
    <li><i class="icon-instagram"></i></li>
    </ul>
  </div>
  </div>
  
  <header>
    <div class="head-container">
    <img class="logo" src="assets/img/uk-tax-pro-logo.png" alt="logo">
            <nav>
                <ul class="nav__links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us </a></li>
                    <li><a href="#">Business Start Up </a></li>
                    <li><a href="#">Tax Planning </a></li>
                    <li><a href="#">Accountancy </a></li>
                    <li><a href="#">Contact Us </a></li>
                </ul>
            </nav>
            <a class="cta" href="#">Contact</a>
            <p onclick="openNav()" class="menu cta">Menu</p>
    </div>
            
        </header>
  
  <script>
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
  if (mainmenu.className == "test") {
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

  </script>
</body>
</html>