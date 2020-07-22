import {toggleModal} from "../utils/utils";
class Popup{
    constructor(popupSelector){
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open(){
        this._popupElement.classList.add("popout__container_active");
        document.addEventListener(`keyUp`, this._handleEscClose);
    }
    close(){
         this._popupElement.classList.remove("popout__container_active");
        document.removeEventListener('keyup', ()=>this_handleEscClose());
    }
    
    _handleEscClose(evt){
        if(evt.keyCode = 27){
            this.close();
        }
    }
    setEventListeners(){
        this._popupElement.querySelector(".modal__close-button").addEventListener("click", this._close);
        this._popupElement.addEventListener("click", ToggleModal(this._popupElement));
    }
}
export default Popup