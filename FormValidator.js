class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        
        
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }
    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    }
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove("popout__form-input_error");
        errorElement.classList.remove("popout__form-input-error_active");
        errorElement.textContent = "";
    }
    _checkInputValidity(inputElement) {
        this._inputList.forEach((inputElement) => {
            if (!inputElement.validity.valid){
            this._showInputError(inputElement);
        }
         else{
            this._hideInputError(inputElement);
        }})
    }
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute("disabled", true);
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute("disabled");
        }
    }

    _setEventListeners(formElement) {
        this._toggleButtonState();
        this._inputList.forEach((thing) => {
            thing.addEventListener("input", () => {
                this._checkInputValidity();
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

}


export {FormValidator}