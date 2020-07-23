import Popup from "./Popup.js";
class PopupWithForm extends Popup{
    constructor({popupSelector, formSubmission}){
        super(popupSelector);
        this._formSubmission = formSubmission;
    }
    _getInputValues(){
        this.inputValues = Array.from(popupElement.querySelector(".popout__form").qurySelectorAll(".popout__form-input"));
        return this.inputValues
    }
    setEventListeners(){
        super.setEventListeners();
        this._popupElement.querySelector(".popout__form").addEventListeners("submit", () => {
            evt.preventDefault();
            this._formSubmission();
        })
    }
    
    close(){
        this._popupElement.querySelector(".popout__form").reset();
        super.close();
    }
}
export default PopupWithForm