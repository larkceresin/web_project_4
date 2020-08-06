class Card {
  constructor({data, handleCardClick, handleTrashClick}, templateSelector) {
    this._image = data.link;
    this._title = data.name;
    this._id = data._id; 
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
      this._handleCardClick = handleCardClick;
    this._trashButton = this._element.querySelector(".gallery__trash-button");
    this._likeButton = this._element.querySelector(".gallery__like-button");
    this._galleryImage =  this._element.querySelector(".gallery__image");
    this._galleryText = this._element.querySelector(".gallery__text");
    this._handleTrashClick = handleTrashClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".gallery__container")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._setEventListeners();
    this._galleryImage.src = this._image;
    this._galleryImage.alt = this._title;
    this._galleryText.textContent = this._title;
    return this._element;
  }
  remove(){
    this._element.remove();
  }
  hideTrash(){
    this._trashButton.style.display = "none";
  }
  _setEventListeners() {
    this._trashButton.addEventListener("click", (evt) => {
      this._handleTrashClick(this._id); //submit with ID of element
       
    });
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("gallery__like-button_active");
       
    });
    this._galleryImage.addEventListener("click", () => this._handleCardClick({name: this._title, link: this._image}))
  }
}
export { Card };
