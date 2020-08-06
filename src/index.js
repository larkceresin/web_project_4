
import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import {profilePopout, nameInput, jobInput, deletePopout, avatarPopout, privateInput, profileFormElement, editBtn,addButton,galleryPopout,galleryFormElement,titleInput,imageInput,galleryContainer,picturePopout, initialCards, defaultConfig} from "./utils/constants.js";
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
                    var result = confirm("are you sure");
                    if (result == true) { 
                        card.remove();
                    api.removeCard(id)}
                    // 
                   // privateInput.value = id;
                }  
            }, "#gallery-object")
            cardList.addItem(card.generateCard());
            api.getUserInfo()
            .then((res)=>{
                if (res._id != data.owner._id){
                    card.hideTrash();
                }
            })
        }, 
        
}, galleryContainer)
cardList.renderer()


const galleryForm = new PopupWithForm({popupSelector:galleryPopout, formSubmission: ()=> {
    api.addCard({name: titleInput.value, link: imageInput.value}).then((res)=>{
    const newCard = new Card ({data: res, handleCardClick:(data)=>{
        imagePopup.open({data})}, handleTrashClick: (id)=> {
            toggleModal(deletePopout) 
            privateInput.value = id;
        }  } 
    , "#gallery-object");
    cardList.addItem(newCard.generateCard());
    galleryValidator.enableValidation()}
    )}
})
galleryForm.setEventListeners();

addButton.addEventListener("click", () => galleryForm.open());
})

const deleteForm = new PopupWithForm({popupSelector: deletePopout, formSubmission: ()=>{
    console.log("hi")
return true}})
deleteForm.setEventListeners();

api.getUserInfo().then((res)=> {
    const userInfo = new UserInfo(".profile__name", ".profile__profession")

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
)



const profileValidator = new FormValidator(defaultConfig, profileFormElement);
const galleryValidator = new FormValidator(defaultConfig, galleryFormElement);
profileValidator.enableValidation();
galleryValidator.enableValidation();

const imagePopup = new PopupWithImage(picturePopout);
imagePopup.setEventListeners();





