import "./styles/index.css";
import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import {toggleModal} from "./utils/utils.js";
import {profilePopout, profileFormElement, nameInput,jobInput,profileCloseBtn,profile,nameOutput,jobOutput,editBtn,addButton,galleryPopout,galleryCloseBtn,titleInput,imageInput,galleryContainer,picturePopout, pictureCloseBtn, popoutImage, popoutTitle, initialCards, defaultConfig} from "./utils/constants.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";



function profileFormSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    
    toggleModal(profilePopout);
}

const profileValidator = new FormValidator(defaultConfig, profileFormElement);
const galleryValidator = new FormValidator(defaultConfig, galleryFormElement);
profileValidator.enableValidation();
galleryValidator.enableValidation();


function galleryHandleCard(data){
    const card = new Card (data, templateSelector:"#gallery-object", handleCardClick:function(evt)=>{ const picturePopout = document.querySelector(".popout__container_picture-view");
        const popoutImage = picturePopout.querySelector(".popout__picture");
        const popoutTitle = picturePopout.querySelector(".popout__title");

        popoutImage.src = evt.target.src;
        popoutImage.alt = evt.target.alt;
        popoutTitle.textContent = evt.target.alt;
        toggleModal(picturePopout);})
       return galleryContainer.prepend(card.generateCard());

}

//run initial cards through
initialCards.forEach((item) => galleryHandleCard(item));


function galleryFormSubmitHandler (evt) {
    evt.preventDefault();
    galleryHandleCard({name:titleInput.value, link: imageInput.value});
    
   galleryFormElement.reset();
    toggleModal(galleryPopout);
}
    //picture
const pictureToggle = () => {
    let pictureList = Array.from(document.qurySelectorAll(".gallery__image"));
    pictureList.forEach((galleryImage) =>
                        {galleryImage.addEventListener('click', (evt) => {
    popoutImage.src = evt.target.src;
    popoutImage.alt = evt.target.alt;
    popoutTitle.textContent = evt.target.alt;
    
    toggleModal(picturePopout);
            });
    })}


const modalOtherToggle = () => {
    const modalList = Array.from(document.querySelectorAll(".popout__container"));
    modalList.forEach( (modal) => {
        modal.addEventListener("click", (evt) => {
        toggleModal(evt.target);
        });

    });
    modalList.forEach(() => {
        
        document.addEventListener("keydown", (evt) =>{
            const escKeyCode = 27;
            if (evt.keyCode === escKeyCode){
                toggleModal(document.querySelector(".popout__container_active"));
        }
    });
   });
}

modalOtherToggle();

profileFormElement.addEventListener('submit', profileFormSubmitHandler);
editBtn.addEventListener("click", () => toggleModal(profilePopout));
profileCloseBtn.addEventListener("click", () => toggleModal(profilePopout));
addButton.addEventListener("click", () => toggleModal(galleryPopout));
galleryCloseBtn.addEventListener("click", () => toggleModal(galleryPopout));
galleryFormElement.addEventListener('submit', galleryFormSubmitHandler);
pictureCloseBtn.addEventListener("click", () => toggleModal(picturePopout));