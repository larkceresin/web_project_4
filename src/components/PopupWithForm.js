import Popup from "./Popup.js";
class PopupWithForm extends Popup{
    constructor({popupSelector, formSubmission}){
        super(popupSelector);
        this._formSubmission = formSubmission;
        this.inputValues = this._getInputValues;
        this._form = this._popupElement.querySelector(".popout__form")
    }
 
    _getInputValues(){
        const inputValues = Array.from(this._form.querySelectorAll(".popout__form-input"));
        return inputValues;
    }
    
    close(){
        this._form.reset();
        super.close();
        
        
    }
    setEventListeners(){
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault;
            this._formSubmission();
            this.close();
        });
        super.setEventListeners();

    }
}
export default PopupWithForm