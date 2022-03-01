window.addEventListener("DOMContentLoaded", ()=> console.log("DOM is loaded"))

let allContent = Array.from(document.querySelectorAll("[data-content]"))
const loadPage = (page) => {
  //change all content to hidden
  allContent.forEach(content => content.dataset.content = "hidden")
  //change status of current page to shown
  page.dataset.content = "shown"
  //change display of each piece of content based on status(hidden/shown)
  allContent.forEach(content => content.dataset.content === "shown" ? content.style.display = "flex" : content.style.display = "none")
}
loadPage(allContent[0])

let allTabs = Array.from(document.querySelectorAll(".tab"))
const changeTab = (tab) => {
  allTabs.forEach(tab => tab.dataset.state = "inactive")
  tab.dataset.state = "active"
  let newPage = allContent.filter(content => content.id === tab.textContent.toLowerCase())[0]
  loadPage(newPage)
}

allTabs.forEach((tab) => tab.addEventListener("click", () => changeTab(tab)))
const aboutPageBackground = document.querySelector(".slideshow")
const aboutBackgroundImages = ["./assets/slideshow/bo-concrete-slideshow.png", "./assets/slideshow/bo-fireplace-slideshow.png", "./assets/slideshow/bo-hardwood-slideshow.png", "./assets/slideshow/bo-hardwood2-slideshow.png", "./assets/slideshow/bo-landscaping-slideshow.png"]
let image = 0
let slideTimer = 3000
const changeBackground = () => {
  aboutPageBackground.style = `background-image: url(${aboutBackgroundImages[image]})`
  setTimeout("changeBackground()", slideTimer)
  image++
  if(image === aboutBackgroundImages.length) image = 0;
}
changeBackground()
