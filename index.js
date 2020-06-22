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
const galleryTemplate = document.querySelector("#gallery-object").content;
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



function toggleModal(popout) { 

    popout.classList.toggle("popout__container_active");
}
   

function profileFormSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    
    toggleModal(profilePopout);
}


function galleryCreateCard(image, title){
    const galleryElement = galleryTemplate.cloneNode(true);
    const galleryImage = galleryElement.querySelector(".gallery__image");
    const galleryText = galleryElement.querySelector(".gallery__text");
    const galleryTrash = galleryElement.querySelector(".gallery__trash-button");
    const galleryLike = galleryElement.querySelector(".gallery__like-button");
    galleryImage.src = image;
    galleryImage.alt = title;
    galleryText.textContent = title;
    
    //delete button:
galleryTrash.addEventListener("click", () => {
    galleryTrash.parentElement.remove();
});
//like-button
galleryLike.addEventListener("click", () => {
    galleryLike.classList.toggle("gallery__like-button_active");
});
    //picture
galleryImage.addEventListener('click', (evt) => {
    popoutImage.src = evt.target.src;
    popoutImage.alt = evt.target.alt;
    popoutTitle.textContent = evt.target.alt;
    
    toggleModal(picturePopout);
});
    return galleryElement;

}

function galleryHandleCard(image, title){
        galleryContainer.prepend(galleryCreateCard(image, title));

}

//run initial cards through
initialCards.forEach((thingy) => galleryHandleCard(thingy.link, thingy.name));


function galleryFormSubmitHandler (evt) {
    evt.preventDefault();
    galleryHandleCard(imageInput.value, titleInput.value);
    
   galleryFormElement.reset();
    setSubmitButtonState(false);
    toggleModal(galleryPopout);
}



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