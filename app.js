// Selectors
const nightBtn = document.querySelector(".night-btn")
const dayBtn = document.querySelector(".day-btn")

const nightDayContainer = document.querySelector(".night-day-container")

dayBtn.addEventListener("click" , () => {
  nightDayContainer.classList.toggle("active-mode")
 })
nightBtn.addEventListener("click" , () => {
 nightDayContainer.classList.toggle("active-mode")
})
