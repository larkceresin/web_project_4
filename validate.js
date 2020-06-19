//form validation
function showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("popout__form-input_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popout__form-input-error_active");
}
function hideInputError(formElement, inputElement){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("popout__form-input_error");
    errorElement.classList.remove("popout__form-input-error_active");
    errorElement.textContent = "";
}
function checkInputValidity(formElement, inputElement){
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
     else{
        hideInputError(formElement, inputElement);
    }
}

function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popout__button_disabled");
        buttonElement.setAttribute("disabled", true);
    } else{
        buttonElement.classList.remove("popout__button_disabled");
        buttonElement.removeAttribute("disabled");
    }
}

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".popout__form-input"));
    const buttonElement = formElement.querySelector(".popout__button");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

function enableValidation() {
    const formList = Array.from(document.querySelectorAll(".popout__form"));
    formList.forEach((formElement) =>{
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
}

enableValidation();