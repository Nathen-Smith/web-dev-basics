window.onscroll = function () { scrollFunction() };

var top = document.getElementById("top");
var navbar = document.getElementById("navbar");
var navbarBrand = document.getElementById("navbar-brand");
var navLink = document.getElementsByClassName("nav-link");
const navLinksLen = navLink.length;
var navbarHeightOffset = navbar.offsetTop; //used for making sticky

function scrollFunction() {
  const transitionNavLink = (fontSize) => {
    for (i = 0; i < navLinksLen; i++) {
      navLink[i].style.fontSize = fontSize;
    }
  }
  const isScrolledIntoView = (el) => {
    // https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
    let rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0
  }

  if (window.pageYOffset >= navbarHeightOffset) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (!isScrolledIntoView(top)) {
    navbar.style.paddingTop = "10px";
    navbar.style.paddingBottom = "10px";
    navbarBrand.style.fontSize = "20px";
    transitionNavLink("16px")
  } else {
    navbar.style.paddingBottom = "10px";
    navbar.style.transition = "0.2s";
    navbarBrand.style.transition = "0.2s";
    navbarBrand.style.fontSize = "36px";
    transitionNavLink("24px");
  }
  var visibleElementIdx = null;
  for (i = 0; i < navLinksLen; i++) {
    if (navLink[i].getAttribute("href").substring(1) &&
      isScrolledIntoView(document.getElementById(navLink[i].getAttribute("href").substring(1)))) {
      // get the first element visible in viewport  
      // substring to remove the #
      visibleElementIdx = i;
      break;
    }
  }
  for (i = 0; i < navLinksLen; i++) {
    if (i == visibleElementIdx) {
      navLink[visibleElementIdx].style.color = "white";
    } else {
      navLink[i].style.color = "gray";
    }
  }
}
