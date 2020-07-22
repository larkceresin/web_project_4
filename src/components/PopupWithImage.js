import Popup from "./Popup.js";

class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
    }
    open({link, name}){
    this._popupElement.querySelector(".popout__image").src = link;
    this._popupElement.querySelector(".popout__image").alt = name;
    this._popupElement.querySelector(".popout__title").textContent = name;
    super.open();
    }
}
export default PopupWithImage