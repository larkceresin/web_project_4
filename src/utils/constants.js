//profile modal
const profilePopout = document.querySelector(".popout__container_profile-edit");
const profileFormElement = profilePopout.querySelector(".popout__form");
const nameInput = profilePopout.querySelector(".popout__form-input_type_name");
const jobInput = profilePopout.querySelector(".popout__form-input_type_job");

//profile
const profile = document.querySelector(".profile");
const editBtn = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");

//gallery modal
const galleryPopout = document.querySelector(".popout__container_gallery-add");

const galleryFormElement = galleryPopout.querySelector(".popout__form");
const titleInput = galleryFormElement.querySelector(".popout__form-input_type_title");
const imageInput = galleryFormElement.querySelector(".popout__form-input_type_image");

//gallery
const galleryContainer = document.querySelector(".gallery__grid");

//picture modal
const picturePopout = document.querySelector(".popout__container_picture-view");

//trash form
const deletePopout = document.querySelector(".popout__container_delete");
const deleteInput = deletePopout.querySelector(".popout__form-private");
//avatar form
const avatarPopout = document.querySelector(".popout__container_picture-change");
const avatarFormElement = avatarPopout.querySelector(".popout__form")
const avatarLink = avatarPopout.querySelector(".popout__form-input_type_image");
//avatar 
const avatarEdit = document.querySelector(".profile__picture_overlay");
const avatar = document.querySelector(".profile__picture");
const defaultConfig = {
  formSelector: ".popout__form",
  inputSelector: ".popout__form-input",
  submitButtonSelector: ".popout__button",
  inactiveButtonClass: "popout__button_disabled",
  inputErrorClass: "popout__form-input_error",
  errorClass: "popout__form-input-error_active"
}
const escKeyCode = 27;
export {profilePopout, deleteInput, avatar, avatarFormElement, nameInput, deletePopout, avatarPopout, avatarLink, avatarEdit, jobInput, profileFormElement, editBtn,addButton,galleryPopout,galleryFormElement,titleInput,imageInput,galleryContainer,picturePopout, defaultConfig, escKeyCode}