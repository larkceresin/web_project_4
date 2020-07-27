
import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import {profilePopout, nameInput, jobInput, profileFormElement, editBtn,addButton,galleryPopout,galleryFormElement,titleInput,imageInput,galleryContainer,picturePopout, initialCards, defaultConfig} from "./utils/constants.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import "./pages/index.css";
import { data } from "autoprefixer";


const profileValidator = new FormValidator(defaultConfig, profileFormElement);
const galleryValidator = new FormValidator(defaultConfig, galleryFormElement);
profileValidator.enableValidation();
galleryValidator.enableValidation();

const imagePopup = new PopupWithImage(picturePopout);
imagePopup.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__profession");

const cardList = new Section({
    items: initialCards,
    renderer: (data)=> { 
        const card = new Card ({
            data, handleCardClick:()=>{
                imagePopup.open({data})} 
            }, "#gallery-object")
            cardList.addItem(card.generateCard());
        }, 
        
}, galleryContainer)
cardList.renderer();

const profileForm = new PopupWithForm({popupSelector:profilePopout, formSubmission: (data)=> {
    userInfo.setUserInfo({userName: nameInput.value, userJob: jobInput.value });
    profileValidator.enableValidation()}});
    profileForm.setEventListeners();


const galleryForm = new PopupWithForm({popupSelector:galleryPopout, formSubmission: ()=> {
        const newCard = new Card ({data:{name: titleInput.value, link: imageInput.value}, handleCardClick:(data)=>{
            imagePopup.open({data})} 
        }, "#gallery-object");
        cardList.addItem(newCard.generateCard());
        galleryValidator.enableValidation()}
    })
galleryForm.setEventListeners();


editBtn.addEventListener("click", () => {
    profileForm.open();
    const currentUserInfo = userInfo.getUserInfo();
    document.querySelector(".popout__form-input_type_name").value = currentUserInfo.name;
    document.querySelector(".popout__form-input_type_job").value = currentUserInfo.job;
   });
addButton.addEventListener("click", () => galleryForm.open());
