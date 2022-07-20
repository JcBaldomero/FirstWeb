const toggleButton = document.getElementsByClassName('ham-link')[0]
const navlinks = document.getElementsByClassName('center-nav')[0]
const buttons = document.getElementsByClassName('right-nav')[0]

toggleButton.addEventListener('click', () => {
navlinks.classList.toggle('active')

buttons.classList.toggle('active')
})