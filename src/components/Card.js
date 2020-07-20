class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._image = data.link;
    this._title = data.name;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
      this._handleCardClick = handleCardClick;
    this._trashButton = this._element.querySelector(".gallery__trash-button");
    this._likeButton = this._element.querySelector(".gallery__like-button");
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

    this._element.querySelector(".gallery__image").src = this._image;
    this._element.querySelector(".gallery__image").alt = this._title;
    this._element.querySelector(".gallery__text").textContent = this._title;
    return this._element;
  }
  _setEventListeners() {
    this._trashButton.addEventListener("click", (evt) => {
      evt.target.closest(".gallery__container").remove();
       
    });
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("gallery__like-button_active");
       
    });
    this._element.querySelector(".gallery__image").addEventListener("click", () => this._handleCardClick())
  }
}
export { Card };
