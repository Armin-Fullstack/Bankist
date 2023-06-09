// Selectors
const nightBtn = document.querySelector(".night-btn")
const dayBtn = document.querySelector(".day-btn")
const statusBtn = document.querySelectorAll(".status-btn")

const nightDayContainer = document.querySelector(".night-day-container")

// Night/Day functionality
dayBtn.addEventListener("click" , () => {
  nightDayContainer.classList.toggle("active-mode")
 })
nightBtn.addEventListener("click" , () => {
 nightDayContainer.classList.toggle("active-mode")
})


// Status Button functionality
statusBtn.forEach(button => {
  button.addEventListener("click" , (e) => {
    if(!e.target.classList.contains("active-status-button")) {
      statusBtn.forEach(element => {
        element.classList.remove("active-status-button")
      })
      button.classList.add("active-status-button")
    }
  })
})