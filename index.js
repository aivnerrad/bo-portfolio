window.addEventListener("DOMContentLoaded", ()=> console.log("DOM is loaded"))

let allContent = Array.from(document.querySelectorAll("[data-content]"))
const changePage = (page) => {
  //change all content to hidden
  allContent.forEach(content => content.dataset.content = "hidden")
  //change status of current page to shown
  page.dataset.content = "shown"
  //change display of each piece of content based on status(hidden/shown)
  allContent.forEach(content => content.dataset.content === "shown" ? content.style.display = "flex" : content.style.display = "none")
}

let allTabs = Array.from(document.querySelectorAll("a[data-state]"))
const changeTab = (tab) => {
  allTabs.forEach(tab => tab.dataset.state = "inactive")
  tab.dataset.state = "active"
  let newPage = allContent.filter(content => content.id === tab.textContent.toLowerCase())[0]
  changePage(newPage)

}

allTabs.forEach((tab) => tab.addEventListener("click", () => changeTab(tab)))
