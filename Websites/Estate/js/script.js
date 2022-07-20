// Navbar
const toggleButton = document.getElementsByClassName('ham')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
const nav = document.getElementsByClassName('nav')[0]

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('navbac')
})
// navbar


// scroll Animations logics

var img1 = document.querySelector(".about-img1")
var text1 = document.querySelector(".about-text1")
var text2 = document.querySelector(".about-text2")
var img2 = document.querySelector(".about-img2")
var rootElement = document.documentElement

function handleScroll() {
  //do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  // for img1 animation
  if ((rootElement.scrollTop / scrollTotal) > 0.10) {
    //show button
    img1.classList.add("img1animate")
    img2.classList.add("img2animate")
  } else {
    //hide button
    img1.classList.remove("img1animate")
    img2.classList.remove("img2animate")
  }
    // for img1 animation

// for text1 animation
  if ((rootElement.scrollTop / scrollTotal) > 0.09) {
    //show text1
    text1.classList.add("text1animate")
    text2.classList.add("text2animate")
  } else {
    //hide text1
    text1.classList.remove("text1animate")
    text2.classList.remove("text2animate")

  }
  // for text1 animation
}

document.addEventListener("scroll", handleScroll)

// scroll Animations logics