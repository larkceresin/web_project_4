import Popup from "./Popup.js";
class PopupWithForm extends Popup{
    constructor({popupSelector, formSubmission}){
        super(popupSelector);
        this._formSubmission = formSubmission;
        this._form = this._popupElement.querySelector(".popout__form")
    }
 
    _getInputValues(){
        const inputlist = Array.from(this._form.querySelectorAll(".popout__form-input"));
        this._formValues = {};
        inputlist.forEach(input => {this._formValues[input.name] = input.value});
        return this._formValues;
    }
    
    close(){
        this._form.reset();
        super.close();   
    }
    setDeleteHandle(deleteHandle){
        this._deleteHandle = deleteHandle;
    }
    runDeleteHandle(){
        this._deleteHandle()
    }

    setEventListeners(){
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._formSubmission(this._formValues)
            this.close();
        });
        super.setEventListeners();

    }
}
export default PopupWithForm