import Popup from "./Popup.js";

class PopupWithImage extends Popup{
    constructor(popupElement){
        super(popupElement);
    }
    open({link, caption}){
    this._popupElement.querySelector(`.popup__image`).src = link;
    this._popupElement.querySelector(`.popup__title`).textContent = caption;
    }
}
export default PopupWithImage