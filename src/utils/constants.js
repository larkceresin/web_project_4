import endPlace from "../images/cliffside__Katie-Rodriguez.jpg";
import leaf from "../images/leaf__chuttersnap.jpg";
import snowyMtn from "../images/snowy-peaks__Joshua-Redekopp.jpg";
import barrier from "../images/storm-incoming__Reuben-Teo.jpg";
import neverForever from "../images/wash-hands__Joshua-Reddekopp.jpg";
import waterCross from "../images/waterfalling__Oliver-Ash.jpg";
//profile modal
const profilePopout = document.querySelector(".popout__container_profile-edit");

const profileFormElement = profilePopout.querySelector(".popout__form");
const nameInput = profileFormElement.querySelector(".popout__form-input_type_name");
const jobInput = profileFormElement.querySelector(".popout__form-input_type_job");

//profile
const profile = document.querySelector(".profile");
const nameOutput = document.querySelector(".profile__name");
const jobOutput = document.querySelector(".profile__profession")
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
const popoutImage =  picturePopout.querySelector(".popout__picture");
const popoutTitle = picturePopout.querySelector(".popout__title");


const initialCards = [
    {
        name: "The End Place",
        link: endPlace
    },
    {
        name: "Turn That Leaf Over",
        link: leaf
    },
    {
        name: "Great Peaks, The Snowy Mountains",
        link: snowyMtn
    },
    {
        name: "Barrier Islands",
        link: barrier
    },
    {
        name: "Never Forever",
        link: neverForever
    },
    {
        name: "Water Crossing",
        link: waterCross
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
export {profilePopout, profileFormElement, nameInput,jobInput, nameOutput, jobOutput, editBtn,addButton,galleryPopout,galleryFormElement,titleInput,imageInput,galleryContainer,picturePopout, initialCards, defaultConfig}