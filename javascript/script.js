// navbar

function toggleClass() {
  let menu = document.querySelector(".ham-navlink-container");
  menu.classList.toggle("toggleCls");
}
// navbar








// scroll up shows logic
var up = document.querySelector(".up")
var rootElement = document.documentElement

function handleScroll() {
  //do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > 0.06) {
    //shows button
    up.classList.add("upshow")
  } else {
    //hides button
    up.classList.remove("upshow")
  }
}

document.addEventListener("scroll", handleScroll)