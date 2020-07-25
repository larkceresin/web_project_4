import Popup from "./Popup.js";
class PopupWithForm extends Popup{
    constructor({popupSelector, formSubmission}){
        super(popupSelector);
        this._formSubmission = formSubmission;
        this.inputValues = this._getInputValues;
    }
 
    _getInputValues(){
        const inputValues = Array.from(this._popupElement.querySelector(".popout__form").querySelectorAll(".popout__form-input"));
        return inputValues;
    }
    open(){
        this.setEventListeners();
        super.open();
    }
    
    close(){
        super.close();
        this._popupElement.querySelector(".popout__form").reset();
        
    }
    setEventListeners(){
        this._popupElement.querySelector(".popout__form").addEventListener(`submit`, (evt) => {
            evt.preventDefault;
            this._formSubmission(this.inputValues);
        });
        super.setEventListeners();

    }
}
export default PopupWithForm