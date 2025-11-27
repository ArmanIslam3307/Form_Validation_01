let form = document.querySelector("#form")
let nameInput = document.querySelector("#name")
let nameError = document.querySelector("#nameError")

let emailInput = document.querySelector("#email")
let emailError = document.querySelector("#emailError")


let phnInput = document.querySelector("#phone")
let phnError = document.querySelector("#phnError")

let addrInput = document.querySelector("#addr")
let addrError = document.querySelector("#addrError")

let msgInput = document.querySelector("#message")
let msgError = document.querySelector("#msgError")

let submit = document.querySelector("#submit")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    if (nameInput.value === "" || /\d/.test(nameInput.value)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }
    if (emailInput.value === "" || !emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (addrInput.value === "") {
        addrError.textContent = "Please enter your address.";
        isValid = false;
    }
    if (msgInput.value === "") {
        msgError.textContent = "Please enter your Massage.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset()
    }


})

function addBlurAndInputEvent(inputName, errorInput) {
    inputName.addEventListener("blur", () => {
        if (inputName.value === "") {
            errorInput.textContent = "Input Required!"
        } else {
            errorInput.textContent = ""
        }

    })
    inputName.addEventListener("input", () => {
        if (inputName.value === "") {
            errorInput.textContent = "Input Required!"
        } else {
            errorInput.textContent = ""
        }
    })
}

//name
addBlurAndInputEvent(nameInput, nameError)
addBlurAndInputEvent(emailInput, emailError)
addBlurAndInputEvent(addrInput, addrError)
addBlurAndInputEvent(msgInput, msgError)