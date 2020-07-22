//profile modal
const profilePopout = document.querySelector(".popout__container_profile-edit");

const profileFormElement = profilePopout.querySelector(".popout__form");
const nameInput = profileFormElement.querySelector(".popout__form-input_type_name");
const jobInput = profileFormElement.querySelector(".popout__form-input_type_job");
const profileCloseBtn = profilePopout.querySelector(".popout__close-button");

//profile
const profile = document.querySelector(".profile");
const nameOutput = profile.querySelector(".profile__name");
const jobOutput = profile.querySelector(".profile__profession");
const editBtn = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");

//gallery modal
const galleryPopout = document.querySelector(".popout__container_gallery-add");

const galleryFormElement = galleryPopout.querySelector(".popout__form");
const galleryCloseBtn = galleryPopout.querySelector(".popout__close-button");
const titleInput = galleryFormElement.querySelector(".popout__form-input_type_title");
const imageInput = galleryFormElement.querySelector(".popout__form-input_type_image");

//gallery
const galleryContainer = document.querySelector(".gallery__grid");

//picture modal
const picturePopout = document.querySelector(".popout__container_picture-view");
const pictureCloseBtn = picturePopout.querySelector(".popout__close-button");
const popoutImage =  picturePopout.querySelector(".popout__picture");
const popoutTitle = picturePopout.querySelector(".popout__title");


const initialCards = [
    {
        name: "The End Place",
        link: "images/cliffside__Katie-Rodriguez.jpg"
    },
    {
        name: "Turn That Leaf Over",
        link: "images/leaf__chuttersnap.jpg"
    },
    {
        name: "Great Peaks, The Snowy Mountains",
        link: "images/snowy-peaks__Joshua-Redekopp.jpg"
    },
    {
        name: "Barrier Islands",
        link: "images/storm-incoming__Reuben-Teo.jpg"
    },
    {
        name: "Never Forever",
        link: "images/wash-hands__Joshua-Reddekopp.jpg"
    },
    {
        name: "Water Crossing",
        link: "images/waterfalling__Oliver-Ash.jpg"
    }
    
];
const defaultConfig = {
  formSelector: ".popout__form",
  inputSelector: ".popout__form-input",
  submitButtonSelector: ".popout__button",
  inactiveButtonClass: "popout__button_disabled",
  inputErrorClass: "popout__form-input_error",
  errorClass: "popout__form-input-error_active"
}
export {profilePopout, profileFormElement, nameInput,jobInput,profileCloseBtn,profile,nameOutput,jobOutput,editBtn,addButton,galleryPopout, galleryFormElement, galleryCloseBtn,titleInput,imageInput,galleryContainer,picturePopout, pictureCloseBtn, popoutImage, popoutTitle, initialCards, defaultConfig}