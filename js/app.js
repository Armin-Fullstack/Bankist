// Selectors
const nightBtn = document.querySelector(".night-btn")
const dayBtn = document.querySelector(".day-btn")
const statusBtn = document.querySelectorAll(".status-btn")
const statusBtnBorder = document.querySelector(".status-btn-border")

const nightDayContainer = document.querySelector(".night-day-container")
const statusDetailsContainer = document.querySelector(".status-details-container")


// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// display movements
const displayMovements = ({movements}) => {
  statusDetailsContainer.innerHTML = ""
  movements.forEach(movement => {
    const takeNegetive = movement < 0 ? movement.toString().slice(1) : movement
    const typeTransaction = movement > 0 ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#4ecb71" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6L6 19m0 0V6.52M6 19h12.48"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#f24e1e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19L19 6m0 0v12.48M19 6H6.52"/></svg>'

    // HTML template
    const html = `
    <div class="status-details">
        <div class="detail">
          ${typeTransaction}
      <div class="detail-info">
          <p class="detail-user-name">User's Name</p>
          <p class="detail-date">Date , Time</p>
      </div>
      </div>
    <p class="detail-amount"><span class="detail-sign-${movement > 0 ? "green" : "red"}">${movement > 0 ? "+" : "-"}</span>${takeNegetive}</p>
  </div>
    `
    // attach the html template into its container
    statusDetailsContainer.insertAdjacentHTML("afterbegin" , html)
  })
}
displayMovements(account1)

const createUserNames = accs => {
  // We don't want to create a new array. We wanna modify the array. (SIDE EFEECT = do some work without returning anything) in this case the side effects are gonna be 
  // to change the original accounts array.
  // we are not returning anything bc we are producing a side effect.
  accs.forEach(acc => {
    acc.userName = acc.owner
    .toLowerCase()
    .split(" ")
    .map(name => name[0])
    .join("")
  })
}
createUserNames(accounts)