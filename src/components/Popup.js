class Popup{
    constructor(popupSelector){
        this._popupElement= document.querySelector(popupSelector);
        this._handleEscClose = this._handlEscClose.bind(this);
    }
    open(){
        this._popupElement.classList.add("popup_active");
        document.addEventListener(`keyUp`, this._handleEscClose)
    }
    close(){
         this._popupElement.classList.add("popup_active");
        document.removeEventListener('keyup', this_handleEscClose);
    }
    
    _handleEscClose(e){
        if(evt.target = 27){
            this.close()
        }
    }
    setEventListeners(){
        this._popupElement.querySelector(".modal__close-button").addEventListener("click", this._close)
    }
}
export default Popup