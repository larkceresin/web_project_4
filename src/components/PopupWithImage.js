import Popup from "./Popup.js";

class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
    }
    open({data}){
    this._popupElement.querySelector(".popout__picture").src = data.link;
    this._popupElement.querySelector(".popout__picture").alt = data.name;
    this._popupElement.querySelector(".popout__title").textContent = data.name;
    super.open();
    }
}
export default PopupWithImage