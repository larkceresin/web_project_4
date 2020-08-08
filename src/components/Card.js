class Card {
  constructor({data, handleCardClick, handleTrashClick, handleLikeClick}, templateSelector) {
    this._image = data.link;
    this._title = data.name;
    this._id = data._id; 
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
      this._handleCardClick = handleCardClick;
    this._trashButton = this._element.querySelector(".gallery__trash-button");
    this.likeButton = this._element.querySelector(".gallery__like-button");
    this._galleryImage =  this._element.querySelector(".gallery__image");
    this._galleryText = this._element.querySelector(".gallery__text");
    this._handleTrashClick = handleTrashClick;
    this._likeCount = this._element.querySelector(".gallery__like-count");
    this._handleLikeClick = handleLikeClick;
    this.likes = data.likes
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
  removeCard(){
    this._element.remove();
    this._element = null
  }
  hideTrash(){
    this._trashButton.style.display = "none";
  }
  setLikeCount(count){
    this._likeCount.textContent = count;
  }
  addLike(){
    this.likeButton.classList.add("gallery__like-button_active");
  }
  removeLike(){
    this.likeButton.classList.remove("gallery__like-button_active");

  }
  setTrashListener(){
    this._trashButton.addEventListener("click", () => {
      this._handleTrashClick(this._id);
       
    });
  }
  _setEventListeners() {
    this.likeButton.addEventListener("click", () => {
      this._handleLikeClick(this._id);
    });
    this._galleryImage.addEventListener("click", () => this._handleCardClick({name: this._title, link: this._image}))
  }
}
export { Card };
