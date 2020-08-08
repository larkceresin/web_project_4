
import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import {profilePopout, nameInput, avatar, avatarFormElement, deleteInput, jobInput, deletePopout, avatarLink, avatarPopout, avatarEdit, profileFormElement, editBtn,addButton,galleryPopout,galleryFormElement,titleInput,imageInput,galleryContainer,picturePopout, defaultConfig} from "./utils/constants.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import "./pages/index.css";
import { data } from "autoprefixer";
import Api from "./components/Api.js";
import {toggleModal, setButtonText} from "./utils/utils.js";

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
            data,
            handleCardClick:()=>{
                imagePopup.open({data})
            }, 
            handleTrashClick: (id)=> {
                toggleModal(deletePopout) 
                deleteInput.value = id;
                deleteForm.setDeleteHandle(()=>{card.removeCard()})
            },
            handleLikeClick: (id) => {
                if (card.likeButton.classList.contains("gallery__like-button_active")){
                    card.removeLike();
                    api.changeLikeCardStatus( id, false)
                    .then(res => card.setLikeCount(res.likes.length));                           
                } else {
                    card.addLike();    
                    api.changeLikeCardStatus(id, true)
                    .then(res=> card.setLikeCount(res.likes.length));
                }
            }  
        }, "#gallery-object");

        card.setLikeCount(data.likes.length);
        cardList.addItem(card.generateCard());
        api.getUserInfo()
        .then((res)=>{
       
            if (res._id != data.owner._id){
                card.hideTrash()
                
            } else {
                card.setTrashListener()
               
            }
            data.likes.some((thing) => {if (thing._id == res._id){
                card.addLike();
            }});

        })
            .catch((err)=> console.log(err))
        }, 
        
}, galleryContainer)
cardList.renderer()


const galleryForm = new PopupWithForm({popupSelector:galleryPopout, formSubmission: ()=> {
    setButtonText(galleryPopout, "Saving...")
    api.addCard({name: titleInput.value, link: imageInput.value}).then((res)=>{
    const newCard = new Card ({
        data: res, 
        handleCardClick:(data)=>{
            imagePopup.open({data})}, 
        handleTrashClick: (id)=> {
            toggleModal(deletePopout); 
            deleteInput.value = id;
            deleteForm.setDeleteHandle(()=>{newCard.removeCard()})
        }, 
        handleLikeClick: (id) => {
            if (newCard.likeButton.classList.contains("gallery__like-button_active")){
                newCard.removeLike();
                api.changeLikeCardStatus( id, false)
                .then(res => newCard.setLikeCount(res.likes.length));                           
            } else {
                newCard.addLike();    
                api.changeLikeCardStatus(id, true)
                .then(res=> newCard.setLikeCount(res.likes.length));
            }
            }} 
    , "#gallery-object")
    newCard.setTrashListener()
    cardList.addItem(newCard.generateCard());
    galleryValidator.enableValidation()}
    )
    setButtonText(galleryPopout, "Create")
}
})
galleryForm.setEventListeners();

addButton.addEventListener("click", () => galleryForm.open());
})

const deleteForm = new PopupWithForm({popupSelector: deletePopout, formSubmission:()=>{
    setButtonText(deletePopout, "Saving...")
    api.removeCard(deleteInput.value)
    .then(()=> deleteForm.runDeleteHandle())
    .then(() => setButtonText(deletePopout, "Yes"))
   // .then(() => {location.reload()})
}})
deleteForm.setEventListeners();

api.getUserInfo().then((res)=> {
    const userInfo = new UserInfo(".profile__name", ".profile__profession")
    avatar.src = res.avatar
    userInfo.setUserInfo({userName:res.name, userJob:res.about}) 

    const profileForm = new PopupWithForm({popupSelector:profilePopout, formSubmission: (data)=> {
        setButtonText(profilePopout, "Saving...")
        api.setUserInfo({name: nameInput.value, about: jobInput.value})
        .then((res) => {userInfo.setUserInfo({userName: res.name, userJob: res.about });
        profileValidator.enableValidation()})
        }});
        profileForm.setEventListeners();
        setButtonText(profilePopout, "Save")

    editBtn.addEventListener("click", () => {
        profileForm.open();
        const currentUserInfo = userInfo.getUserInfo();
        nameInput.value = currentUserInfo.name;
        jobInput.value = currentUserInfo.job;
   });
}
);
const avatarEditForm = new PopupWithForm({popupSelector: avatarPopout, formSubmission: () =>{
    setButtonText(avatarPopout, "Saving")
    avatar.src = avatarLink.value;
    api.setUserAvatar({avatar: avatarLink.value});
    setButtonText(avatarPopout, "Save")
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





