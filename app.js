// Selectors
const nightBtn = document.querySelector(".night-btn")
const dayBtn = document.querySelector(".day-btn")
const statusBtn = document.querySelectorAll(".status-btn")
const statusBtnBorder = document.querySelector(".status-btn-border")

const nightDayContainer = document.querySelector(".night-day-container")

// Night/Day functionality
dayBtn.addEventListener("click" , () => {
  nightDayContainer.classList.toggle("active-mode")
 })
nightBtn.addEventListener("click" , () => {
 nightDayContainer.classList.toggle("active-mode")
})

// Status Button functionality
statusBtn.forEach((button , i) => {
  button.addEventListener("click" , () => {
    statusBtn.forEach(element => {
      element.classList.remove("active-btn")
    })
    button.classList.add("active-btn")
    statusBtnBorder.style.left = `calc(calc(100% / 4) * ${i})`
  })
})