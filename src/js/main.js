/* Your JS here. */
window.onscroll = function () { scrollFunction() };

var hello = document.getElementById("helloworld");
var navbar = document.getElementById("navbar");
var navbarBrand = document.getElementById("navbar-brand");
var navLink = document.getElementsByClassName("nav-link");
const navLinksLen = navLink.length;
var navbarHeightOffset = navbar.offsetTop; //used for making sticky

function scrollFunction() {
  const transitionNavLink = (fontSize) => {
    for (i = 0; i < navLinksLen; i++) {
      navLink[i].style.fontSize = fontSize;
      // console.log(navLink[i].getAttribute("href").substring(1))
    }
  }
  const isScrolledIntoView = (el) => {
    // https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
    let rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  }
  if (window.pageYOffset >= navbarHeightOffset) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (isScrolledIntoView(hello)) {
    navbar.style.paddingTop = "20px";
    navbarBrand.style.fontSize = "20px";
    // transitionNavLink("16px");

  } else {
    navbar.style.paddingTop = "40px";
    navbar.style.transition = "0.4s";
    navbarBrand.style.transition = "0.4s";
    navbarBrand.style.fontSize = "36px";
    transitionNavLink("20px");
  }
  var visibleElementIdx = null;
  for (i = 0; i < navLinksLen; i++) {
    if (navLink[i].getAttribute("href").substring(1) &&
      isScrolledIntoView(document.getElementById(navLink[i].getAttribute("href").substring(1)))) {
      visibleElementIdx = i;
      break;
    }
  }
  for (i = 0; i < navLinksLen; i++) {
    if (i == visibleElementIdx) {
      navLink[visibleElementIdx].style.color = "red";
    } else {
      navLink[i].style.color = "blue";
    }
  }


}







  // console.log(navLink[i].getAttribute("href").substring(1))


