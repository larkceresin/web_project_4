import Popup from "./Popup.js";

class PopupWithImage extends Popup{

    open({data}){
        this._popupImage = this._popupElement.querySelector(".popout__picture");
        this._popupTitle = this._popupElement.querySelector(".popout__title");
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupTitle.textContent = data.name;
        super.open();
    }
}
export default PopupWithImage