const form = document.querySelector("form")
const submitBtn = document.getElementById("submitBtn")
const dismissBtn = document.getElementById("dismissBtn")
const emailInput = document.getElementById("email")
const message = document.getElementById("message")
const success = document.querySelector(".success")
const signUp = document.querySelector(".sign-up")

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

function emailSuccess(){
    success.style.display = "flex"
    signUp.style.display = "none"

}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault()

    var emailValue = emailInput.value

    var isValidEmail = emailRegex.test(emailValue)

    if (isValidEmail/""){
        emailSuccess()
    } else {
        message.innerHTML = "Enter valid email"
        emailInput.classList.add("error")
    }
})

dismissBtn.addEventListener("click", function () {
    success.style.display = "none"
    signUp.style.display = "flex"
    emailInput.classList.remove("error")
    emailInput.value = ""
    message.style.visibility = "hidden"
})