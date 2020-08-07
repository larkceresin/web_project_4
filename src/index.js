
import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import {profilePopout, nameInput, avatar, avatarFormElement, jobInput, deletePopout, avatarLink, avatarPopout, avatarEdit, profileFormElement, editBtn,addButton,galleryPopout,galleryFormElement,titleInput,imageInput,galleryContainer,picturePopout, initialCards, defaultConfig} from "./utils/constants.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import "./pages/index.css";
import { data } from "autoprefixer";
import Api from "./components/Api.js";
import {toggleModal} from "./utils/utils.js";

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-3", 
    headers: {
    authorization: "6be65cf2-723d-4de8-a54b-173b288df7f4",
    "content-type": "application/json"}});
    
api.getCardList().then((res)=> {
    const cardList = new Section({
    items: res,
    renderer: (data)=> { 
       
        const card = new Card ({
            data, handleCardClick:()=>{
                imagePopup.open({data})}, handleTrashClick: (id)=> {
                    toggleModal(deletePopout) 
            function deleteMethod(){
                card.removeCard()
                api.removeCard(id)
                deleteForm.removeEventListener("submit", deleteMethod())
            }
            deleteForm.addEventListener("submit", deleteMethod())
                    }, handleLikeClick: (id) => {
                        if (!card.likeButton.classList.contains(".gallery__like-button_active")){
                            card.addLike();    
                            api.changeLikeCardStatus(id, true);
                     console.log("add")
                        } else {
                            card.removeLike();
                            api.changeLikeCardStatus( id, false)
                        console.log("remove")
                        }
                         card.setLikeCount(card.likes.length)
                    }  
            }, "#gallery-object")
            card.setLikeCount(data.likes.length)
            cardList.addItem(card.generateCard());
            api.getUserInfo()
                .then((res)=>{
                if (res._id != data.owner._id){
                    card.hideTrash()
                }
            }) 
                .catch((err)=> console.log(err))

        }, 
        
}, galleryContainer)
cardList.renderer()


const galleryForm = new PopupWithForm({popupSelector:galleryPopout, formSubmission: ()=> {
    api.addCard({name: titleInput.value, link: imageInput.value}).then((res)=>{
    const newCard = new Card ({data: res, handleCardClick:(data)=>{
        imagePopup.open({data})}, handleTrashClick: (id)=> {
            toggleModal(deletePopout) 
            function deleteMethod(id){
                newcard.removeCard()
                api.removeCard(id)
                deleteForm.removeEventListener("submit", deleteMethod)
            }
            deleteForm.addEventListener("submit", deleteMethod)
        }  } 
    , "#gallery-object");
    cardList.addItem(newCard.generateCard());
    galleryValidator.enableValidation()}
    )}
})
galleryForm.setEventListeners();

addButton.addEventListener("click", () => galleryForm.open());
})

const deleteForm = new PopupWithForm({popupSelector: deletePopout})
deleteForm.setEventListeners();

api.getUserInfo().then((res)=> {
    const userInfo = new UserInfo(".profile__name", ".profile__profession")
    avatar.src = res.avatar
    userInfo.setUserInfo({userName:res.name, userJob:res.about}) 

    const profileForm = new PopupWithForm({popupSelector:profilePopout, formSubmission: (data)=> {
        api.setUserInfo({name: nameInput.value, about: jobInput.value})
        .then((res) => {userInfo.setUserInfo({userName: res.name, userJob: res.about });
        profileValidator.enableValidation()})
        }});
        profileForm.setEventListeners();

    editBtn.addEventListener("click", () => {
        profileForm.open();
        const currentUserInfo = userInfo.getUserInfo();
        document.querySelector(".popout__form-input_type_name").value = currentUserInfo.name;
        document.querySelector(".popout__form-input_type_job").value = currentUserInfo.job;
   });
}
);
const avatarEditForm = new PopupWithForm({popupSelector: avatarPopout, formSubmission: () =>{
    avatar.src = avatarLink.value;
    api.setUserAvatar({avatar: avatarLink.value});
}})
avatarEditForm.setEventListeners();
const avatarValidator = new FormValidator(defaultConfig, avatarFormElement)
avatarValidator.enableValidation();

avatarEdit.addEventListener("click", ()=> toggleModal(avatarPopout));

const profileValidator = new FormValidator(defaultConfig, profileFormElement);
const galleryValidator = new FormValidator(defaultConfig, galleryFormElement);
profileValidator.enableValidation();
galleryValidator.enableValidation();

const imagePopup = new PopupWithImage(picturePopout);
imagePopup.setEventListeners();





