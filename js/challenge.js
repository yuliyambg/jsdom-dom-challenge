let numberOfSecondsPassed = 0
const counter = document.querySelector("#counter")
const likesul = document.querySelector(".likes")
const commentinput = document.querySelector("#comment-input")
const list = document.querySelector("#list")
let isPaused = false

setInterval(function() {
   if (isPaused === false) {
       numberOfSecondsPassed = numberOfSecondsPassed + 1
       counter.innerText = numberOfSecondsPassed
   }
}, 1000); // update about every second


let minusbutton = document.querySelector("#minus")
minusbutton.addEventListener("click", function () {
numberOfSecondsPassed = numberOfSecondsPassed - 1
    counter.innerText = numberOfSecondsPassed
})

let plusbutton = document.querySelector("#plus")
plusbutton.addEventListener("click", function () {
    numberOfSecondsPassed = numberOfSecondsPassed + 1
    counter.innerText = numberOfSecondsPassed
})

let heartbutton = document.querySelector("#heart")
heartbutton.addEventListener("click", function () {
    likesul.innerHTML += `<li> ${numberOfSecondsPassed} left one like </li>`
})

let submitbutton = document.querySelector("#submit")
submitbutton.addEventListener("click", function (e) {
    e.preventDefault()
    list.innerHTML += `<li>${commentinput.value}</li>`
    commentinput.value =""
})

let pausebutton = document.querySelector("#pause")
pausebutton.addEventListener("click", function () {
    isPaused = !isPaused
    minusbutton.disabled = !minusbutton.disabled
    plusbutton.disabled = !plusbutton.disabled
    heartbutton.disabled = !heartbutton.disabled
    submitbutton.disabled =  !submitbutton.disabled
    const pauseBtnValue = pausebutton.innerHTML === "resume" ? "pause" : "resume"
    pausebutton.innerHTML = pauseBtnValue
})
