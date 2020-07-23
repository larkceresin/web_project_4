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
            evt.preventDefault();
            this._formSubmission();
        });
        super.setEventListeners();

    }
}
export default PopupWithForm