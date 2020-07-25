import {escKeyCode} from "../utils/constants";

class Popup{
    constructor(popupSelector){
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open(){
        this._popupElement.classList.add("popout__container_active");
        document.addEventListener(`keyup`, this._handleEscClose)
    }
    close(){
         this._popupElement.classList.remove("popout__container_active");
        document.removeEventListener(`keyup`, this._handleEscClose);   
    }
    
    _handleEscClose(evt){
        if (evt.keyCode === escKeyCode){
            this.close();
        }
    }
    setEventListeners(){
        this._popupElement.querySelector(".popout__close-button").addEventListener("click", () => 
        this.close());
        this._popupElement.addEventListener("click", (e)=>{
           if(e.target !== e.currentTarget)
    return;
            this.close();     
        })
    }
}
export default Popup